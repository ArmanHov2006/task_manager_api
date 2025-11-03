from sqlalchemy import Column, Integer, String, Boolean, ForeignKey
from sqlalchemy.orm import relationship
from database import Base

class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    password = Column(String, nullable=False)
    
    tasks = relationship("Task", back_populates="owner")
    projects = relationship("Project", back_populates="owner")


class Task(Base):
    __tablename__ = "tasks"
    
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    description = Column(String)
    completed = Column(Boolean, default=False)
    owner_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    
    owner = relationship("User", back_populates="tasks")
    project_id = Column(Integer, ForeignKey("projects.id"))
    project = relationship("Project", back_populates="tasks")


class Project(Base):
    __tablename__ = "projects"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    description = Column(String)

    owner_id = Column(Integer, ForeignKey("users.id"))
    owner = relationship("User", back_populates="projects")

    tasks = relationship("Task", back_populates="project")
