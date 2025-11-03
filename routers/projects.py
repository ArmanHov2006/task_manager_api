from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from jose import JWTError, jwt
import sys
import os
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
import models, schemas, utils
from database import get_db
from routers.auth import oauth2_scheme

router = APIRouter(prefix="/projects", tags=["Projects"])

def get_current_user(
    token: str = Depends(oauth2_scheme),
    db: Session = Depends(get_db)
):
    try:
        payload = jwt.decode(token, utils.SECRET_KEY, algorithms=[utils.ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise HTTPException(status_code=401, detail="Invalid token")
    except JWTError:
        raise HTTPException(status_code=401, detail="Invalid token")
    
    user = db.query(models.User).filter(models.User.username == username).first()
    if user is None:
        raise HTTPException(status_code=401, detail="User not found")
    return user


@router.post("/", response_model=schemas.Project, status_code=status.HTTP_201_CREATED)
def create_project(
    project: schemas.ProjectCreate, 
    current_user: models.User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    new_project = models.Project(name=project.name, description=project.description, owner_id=current_user.id)
    db.add(new_project)
    db.commit()
    db.refresh(new_project)
    return new_project


@router.get("/", response_model=list[schemas.Project])
def get_projects(
    current_user: models.User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    return db.query(models.Project).filter(models.Project.owner_id == current_user.id).all()


@router.get("/{project_id}", response_model=schemas.Project)
def get_project(
    project_id: int, 
    current_user: models.User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    project = db.query(models.Project).filter(
        models.Project.id == project_id,
        models.Project.owner_id == current_user.id
    ).first()
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    return project


@router.delete("/{project_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_project(
    project_id: int, 
    current_user: models.User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    project = db.query(models.Project).filter(
        models.Project.id == project_id,
        models.Project.owner_id == current_user.id
    ).first()
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")

    db.delete(project)
    db.commit()
    return
