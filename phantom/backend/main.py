"""
FastAPI application entry point.
Configures CORS, routers, and middleware.
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import engine, Base
from routers import telemetry, auth_router, users

# Create database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Phantom API",
    description="Ambient Productivity AI - Backend API",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc",
)

# CORS configuration for Chrome extension and Next.js frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://localhost:3001",
        "chrome-extension://*",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(auth_router.router)
app.include_router(users.router)
app.include_router(telemetry.router)


@app.get("/")
async def root():
    return {"message": "Phantom API", "status": "operational", "version": "1.0.0"}


@app.get("/health")
async def health_check():
    """Health check endpoint for monitoring"""
    return {"status": "healthy"}


