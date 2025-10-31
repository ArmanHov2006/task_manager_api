from fastapi import FastAPI
import models
import database
from routers import tasks, users, auth

# Create database tables
models.Base.metadata.create_all(bind=database.engine)

app = FastAPI(title="Task Manager API")

# Include routers
app.include_router(users.router)
app.include_router(auth.router)
app.include_router(tasks.router)

@app.get("/")
def root():
    return {"message": "Task Manager API is running! 🚀"}