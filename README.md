# Task Manager API

A FastAPI-based task management system with SQLAlchemy ORM and SQLite database.

## Features

- ✅ Create tasks
- ✅ Get all tasks
- ✅ RESTful API with automatic OpenAPI documentation

## Setup

1. Create and activate virtual environment:
```bash
python -m venv venv
.\venv\Scripts\Activate.ps1  # For PowerShell
```

2. Install dependencies:
```bash
pip install fastapi uvicorn sqlalchemy
```

3. Run the application:
```bash
# From Project1 folder
uvicorn task_manager_api.main:app --reload
```

## API Endpoints

- `GET /` - Root endpoint
- `GET /tasks/` - Get all tasks
- `POST /tasks/` - Create a new task

## Interactive Documentation

Once running, visit:
- Swagger UI: http://127.0.0.1:8000/docs
- ReDoc: http://127.0.0.1:8000/redoc

## Project Structure

```
task_manager_api/
├── __init__.py
├── main.py              # FastAPI app initialization
├── database.py          # Database configuration
├── models.py            # SQLAlchemy models
├── routers/
│   ├── __init__.py
│   └── tasks.py         # Task routes
└── venv/               # Virtual environment
```

