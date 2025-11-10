"""
Database configuration and session management.
Uses SQLite for development, easily swappable to PostgreSQL for production.
"""

from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os
from dotenv import load_dotenv

load_dotenv()

# Get database URL from environment
DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./phantom.db")

# Create engine with connection pooling for production readiness
engine = create_engine(
    DATABASE_URL,
    connect_args={"check_same_thread": False} if "sqlite" in DATABASE_URL else {},
    pool_pre_ping=True,
    pool_size=10,
    max_overflow=20,
)

# Session factory for database transactions
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base class for all models
Base = declarative_base()


def get_db():
    """
    Provides database session for request lifecycle.
    Automatically closes session after request completes.
    """
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


