# Task Manager API - Full Stack Application

A full-stack task and project management application with FastAPI backend and Next.js frontend.

## Features

### Backend (FastAPI)
- ✅ User registration and authentication with JWT tokens
- ✅ Complete CRUD operations for tasks
- ✅ Complete CRUD operations for projects
- ✅ Task ownership and access control
- ✅ SQLite database with SQLAlchemy ORM
- ✅ Pydantic v2 for data validation
- ✅ RESTful API with automatic OpenAPI documentation
- ✅ CORS enabled for frontend integration

### Frontend (Next.js + Chakra UI)
- ✅ Modern React-based UI with TypeScript
- ✅ User authentication flow (login/register)
- ✅ Task management interface
- ✅ Project management interface
- ✅ Protected routes with authentication
- ✅ Responsive design

## Project Structure

```
task_manager_api/
├── main.py              # FastAPI app initialization
├── database.py          # Database configuration
├── models.py            # SQLAlchemy models
├── schemas.py           # Pydantic models
├── utils.py             # Utility functions (JWT, password hashing)
├── requirements.txt     # Python dependencies
├── routers/
│   ├── auth.py         # Authentication routes
│   ├── tasks.py        # Task routes
│   ├── projects.py     # Project routes
│   └── users.py        # User routes
└── frontend/
    ├── app/
    │   ├── components/  # React components
    │   ├── hooks/       # Custom React hooks
    │   ├── lib/         # API client
    │   ├── store/       # State management (Zustand)
    │   ├── login/       # Login page
    │   ├── register/    # Register page
    │   ├── tasks/       # Tasks page
    │   └── projects/    # Projects page
    ├── package.json     # Node.js dependencies
    └── next.config.js   # Next.js configuration
```

## Setup and Installation

### Prerequisites
- Python 3.8+ installed
- Node.js 18+ and npm installed

### Backend Setup

1. **Navigate to the project root directory:**
   ```bash
   cd task_manager_api
   ```

2. **Create and activate virtual environment:**
   
   **Windows (PowerShell):**
   ```bash
   python -m venv venv
   .\venv\Scripts\Activate.ps1
   ```
   
   **Windows (CMD):**
   ```bash
   python -m venv venv
   venv\Scripts\activate.bat
   ```
   
   **Linux/MacOS:**
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```

3. **Install Python dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the backend server:**
   ```bash
   uvicorn main:app --reload
   ```
   
   The API will be available at **http://localhost:8000**

### Frontend Setup

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install Node.js dependencies:**
   ```bash
   npm install
   ```

3. **Run the frontend development server:**
   ```bash
   npm run dev
   ```
   
   The frontend will be available at **http://localhost:3000**

## Running the Entire Project

### Option 1: Run Both Servers Manually

**Terminal 1 - Backend:**
```bash
# Activate virtual environment (if not already activated)
.\venv\Scripts\Activate.ps1  # Windows PowerShell
# or
source venv/bin/activate     # Linux/MacOS

# Run backend
uvicorn main:app --reload
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

### Option 2: Using the Batch Script (Windows)

If you have a `start.bat` file, you can use it to start both servers:
```bash
.\start.bat
```

## Accessing the Application

1. **Frontend Application:** Open your browser and navigate to http://localhost:3000
2. **Backend API Documentation:**
   - Swagger UI: http://localhost:8000/docs
   - ReDoc: http://localhost:8000/redoc
3. **API Base URL:** http://localhost:8000

## API Endpoints

### Authentication

- `POST /auth/register` - Register a new user
  ```json
  {
    "username": "testuser",
    "email": "test@example.com",
    "password": "password123"
  }
  ```

- `POST /auth/token` - Login to get access token (OAuth2 form data)
  ```
  username=testuser&password=password123
  ```

- `GET /auth/me` - Get current user info (requires authentication)

### Tasks

- `GET /tasks` - List all tasks for current user (requires authentication)
- `POST /tasks` - Create a new task (requires authentication)
  ```json
  {
    "title": "My first task",
    "description": "This is a test task"
  }
  ```
- `GET /tasks/{task_id}` - Get task by ID (requires authentication)
- `PUT /tasks/{task_id}` - Update task (requires authentication)
- `DELETE /tasks/{task_id}` - Delete task (requires authentication)

### Projects

- `GET /projects` - List all projects for current user (requires authentication)
- `POST /projects` - Create a new project (requires authentication)
  ```json
  {
    "name": "My Project",
    "description": "Project description"
  }
  ```
- `GET /projects/{project_id}` - Get project by ID (requires authentication)
- `PUT /projects/{project_id}` - Update project (requires authentication)
- `DELETE /projects/{project_id}` - Delete project (requires authentication)

## Usage Flow

1. **Start both servers** (backend on port 8000, frontend on port 3000)
2. **Open the frontend** at http://localhost:3000
3. **Register a new account** or **login** with existing credentials
4. **Navigate to Tasks** or **Projects** pages to manage your data
5. **Create, update, and delete** tasks and projects as needed

## Troubleshooting

### Backend Issues

- **Port 8000 already in use:** Change the port in the uvicorn command:
  ```bash
  uvicorn main:app --reload --port 8001
  ```
  Then update `frontend/next.config.js` to point to the new port.

- **Database errors:** Delete `tasks.db` and restart the server to recreate the database.

- **Import errors:** Make sure you're in the project root directory and the virtual environment is activated.

### Frontend Issues

- **Port 3000 already in use:** Next.js will automatically use the next available port (3001, 3002, etc.)

- **API connection errors:** 
  - Ensure the backend is running on port 8000
  - Check browser console for CORS errors
  - Verify `next.config.js` has the correct API rewrite configuration

- **Module not found errors:** Run `npm install` again in the frontend directory.

### Common Issues

- **CORS errors:** The backend is configured to allow requests from `http://localhost:3000`. If you're using a different port, update `main.py` CORS configuration.

- **Authentication not working:** 
  - Check that the token is being stored in localStorage
  - Verify the JWT secret key in `utils.py`
  - Check browser console for API errors

## Development

### Backend Development
- The backend uses FastAPI with automatic reload on file changes
- Database is SQLite (stored as `tasks.db` in the project root)
- API documentation is automatically generated at `/docs`

### Frontend Development
- The frontend uses Next.js 16 with App Router
- TypeScript is enabled for type safety
- Chakra UI is used for components
- Zustand is used for state management

## Environment Variables

### Backend
Create a `.env` file in the project root (optional):
```
SECRET_KEY=your-secret-key-here-min-32-characters
```

If not provided, a default key will be used (not recommended for production).

### Frontend
Create a `.env.local` file in the `frontend` directory (optional):
```
NEXT_PUBLIC_API_URL=http://localhost:8000
```

If not provided, the default `/api` proxy will be used (configured in `next.config.js`).

## Production Deployment

For production deployment:

1. **Backend:**
   - Use a production ASGI server like Gunicorn with Uvicorn workers
   - Set up a proper database (PostgreSQL recommended)
   - Configure environment variables securely
   - Set up proper CORS origins

2. **Frontend:**
   - Build the application: `npm run build`
   - Start the production server: `npm start`
   - Or deploy to a platform like Vercel, Netlify, etc.

## License

This project is open source and available for personal and commercial use.
