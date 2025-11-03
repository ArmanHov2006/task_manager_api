from pydantic import BaseModel, EmailStr
from typing import Optional

class UserCreate(BaseModel):
    username: str
    email: EmailStr
    password: str

class UserResponse(BaseModel):
    id: int
    username: str
    email: str
    
    model_config = {
        "from_attributes": True
    }

class TaskCreate(BaseModel):
    title: str
    description: Optional[str] = None

class TaskUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    completed: Optional[bool] = None

class TaskResponse(BaseModel):
    id: int
    title: str
    description: Optional[str]
    completed: bool
    owner_id: int
    
    model_config = {
        "from_attributes": True
    }

class ProjectBase(BaseModel):
    name: str
    description: str


class ProjectCreate(ProjectBase):
    pass


class Project(ProjectBase):
    id: int
    owner_id: int
    
    model_config = {
        "from_attributes": True
    }
