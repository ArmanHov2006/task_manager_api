from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from sqlalchemy import and_
from .. import models, schemas
from ..database import get_db
from .auth import get_current_user

router = APIRouter(prefix="/projects", tags=["Projects"])


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
        and_(
            models.Project.id == project_id,
            models.Project.owner_id == current_user.id
        )
    ).first()
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    return project


@router.put("/{project_id}", response_model=schemas.Project)
def update_project(
    project_id: int,
    project_update: schemas.ProjectCreate,
    current_user: models.User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    project = db.query(models.Project).filter(
        and_(
            models.Project.id == project_id,
            models.Project.owner_id == current_user.id
        )
    ).first()
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    
    project.name = project_update.name
    project.description = project_update.description
    
    db.commit()
    db.refresh(project)
    return project


@router.delete("/{project_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_project(
    project_id: int, 
    current_user: models.User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    project = db.query(models.Project).filter(
        and_(
            models.Project.id == project_id,
            models.Project.owner_id == current_user.id
        )
    ).first()
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")

    db.delete(project)
    db.commit()
    return