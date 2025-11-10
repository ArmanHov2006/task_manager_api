# Phantom - Ambient Productivity AI (Day 1 & Day 2)

## Structure
```
phantom/
├── backend/
│   ├── main.py
│   ├── database.py
│   ├── models.py
│   ├── schemas.py
│   ├── utils.py
│   ├── auth.py
│   ├── routers/
│   │   ├── telemetry.py
│   │   ├── auth_router.py
│   │   └── users.py
│   └── requirements.txt
├── extension/
│   ├── manifest.json
│   ├── background.js
│   ├── content.js
│   ├── popup.html
│   └── popup.js
└── frontend/
    ├── package.json
    ├── next.config.js
    ├── tsconfig.json
    ├── tailwind.config.js
    ├── postcss.config.js
    ├── lib/
    │   └── api.ts
    ├── app/
    │   ├── layout.tsx
    │   ├── globals.css
    │   ├── page.tsx
    │   ├── login/
    │   │   └── page.tsx
    │   └── dashboard/
    │       └── page.tsx
    └── components/
        └── Navigation.tsx
```

## Run - Backend (FastAPI)
```
cd task_manager_api/phantom/backend
python -m venv venv
.\venv\Scripts\activate   # Windows
pip install -r requirements.txt
set SECRET_KEY=replace-with-long-random-string
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```
Open http://localhost:8000/docs

## Run - Frontend (Next.js)
```
cd task_manager_api/phantom/frontend
npm install
npm run dev
```
Open http://localhost:3000

## Load the Chrome Extension
1. Open `chrome://extensions`
2. Enable Developer mode
3. Load unpacked → select `task_manager_api/phantom/extension`

## Day 1 Verification
- Backend server runs and `/health` returns healthy
- DB `phantom.db` is created in backend
- Extension logs telemetry attempts every 30s (see Service Worker console)

## Day 2 Verification
- Register: POST `/users/`
- Login: POST `/auth/token` with x-www-form-urlencoded
- `/auth/me` returns current user with Bearer token
- Frontend login/register flows redirect to dashboard
- Dashboard shows recent telemetry (after extension runs)


