from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from .. import models, database

router = APIRouter(prefix="/tasks", tags=["Tasks"])

def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/")
def get_tasks(db: Session = Depends(get_db)):
    return db.query(models.Task).all()

@router.post("/")
def create_task(title: str, description: str, db: Session = Depends(get_db)):
    task = models.Task(title=title, description=description)
    db.add(task)
    db.commit()
    db.refresh(task)
    return task

