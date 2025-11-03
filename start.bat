@echo off
start cmd /k "cd frontend && npm install && npm run start"
start cmd /k "python -m uvicorn main:app --reload"