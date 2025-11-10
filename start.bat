@echo off
start cmd /k "cd frontend && npm install && npm run dev"
start cmd /k "cd .. && task_manager_api\venv\Scripts\activate && uvicorn task_manager_api.main:app --reload"
