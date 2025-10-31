# Task Manager API

A FastAPI-based REST API for managing tasks with user authentication.

## Features

- ✅ User registration and authentication with JWT tokens
- ✅ Complete CRUD operations for tasks
- ✅ Task ownership and access control
- ✅ SQLite database with SQLAlchemy ORM
- ✅ Pydantic v2 for data validation
- ✅ RESTful API with automatic OpenAPI documentation

## Setup

1. Create and activate virtual environment:

```bash
python -m venv venv
.\venv\Scripts\Activate.ps1  # For PowerShell
# or
source venv/bin/activate     # For Linux/MacOS
```

2. Install dependencies:

```bash
pip install -r requirements.txt
```

3. Run the application:

```bash
uvicorn main:app --reload
```

The API will be available at http://localhost:8000

## API Endpoints

### Authentication

- `POST /auth/register` - Register a new user
- `POST /auth/token` - Login to get access token

### Users

- `GET /users/me` - Get current user info
- `GET /users/{user_id}` - Get user by ID

### Tasks

- `GET /tasks` - List all tasks for current user
- `POST /tasks` - Create a new task
- `GET /tasks/{task_id}` - Get task by ID
- `PUT /tasks/{task_id}` - Update task
- `DELETE /tasks/{task_id}` - Delete task

## Interactive Documentation

Once running, visit:

- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## Example Usage

1. Register a new user:

```bash
curl -X 'POST' \
  'http://localhost:8000/auth/register' \
  -H 'Content-Type: application/json' \
  -d '{
    "username": "testuser",
    "email": "test@example.com",
    "password": "password123"
  }'
```

2. Login to get access token:

```bash
curl -X 'POST' \
  'http://localhost:8000/auth/token' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'username=testuser&password=password123'
```

3. Create a task (replace {access_token} with the token from previous step):

```bash
curl -X 'POST' \
  'http://localhost:8000/tasks' \
  -H 'Authorization: Bearer {access_token}' \
  -H 'Content-Type: application/json' \
  -d '{
    "title": "My first task",
    "description": "This is a test task"
  }'
```

4. List all tasks:

```bash
curl -X 'GET' \
  'http://localhost:8000/tasks' \
  -H 'Authorization: Bearer {access_token}'
```

## Project Structure

```
task_manager_api/
├── __init__.py
├── main.py              # FastAPI app initialization
├── database.py          # Database configuration
├── models.py            # SQLAlchemy models
├── schemas.py           # Pydantic models
├── utils.py             # Utility functions
├── requirements.txt     # Project dependencies
├── routers/
│   ├── __init__.py
│   ├── auth.py         # Authentication routes
│   ├── tasks.py        # Task routes
│   └── users.py        # User routes
```
