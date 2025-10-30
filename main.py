from fastapi import FastAPI
from . import models, database
from .routers import tasks

# Create DB tables
models.Base.metadata.create_all(bind=database.engine)

# Initialize FastAPI app
app = FastAPI()

# Include routers
app.include_router(tasks.router)

@app.get("/")
def root():
    return {"message": "Task Manager API running successfully 🚀"}

