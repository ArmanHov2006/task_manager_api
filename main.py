from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import models
import database
from routers import tasks, users, auth, projects

# Create database tables
models.Base.metadata.create_all(bind=database.engine)

app = FastAPI(title="Task Manager API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(users.router)
app.include_router(auth.router)
app.include_router(tasks.router)
app.include_router(projects.router)

@app.get("/")
def root():
    return {"message": "Task Manager API is running! 🚀"}