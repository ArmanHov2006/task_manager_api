@echo off
start cmd /k "cd frontend && npm install && npm run dev"
start cmd /k "venv\Scripts\activate && uvicorn main:app --reload"
