"""
Database models defining the core data structures.
Designed for scalability and efficient querying.
"""

from sqlalchemy import Column, Integer, String, Boolean, DateTime, Text, Float, ForeignKey, Index
from sqlalchemy.orm import relationship
from datetime import datetime
from database import Base


class User(Base):
    """
    User model with authentication and subscription tracking.
    Supports freemium model with usage limits.
    """
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    username = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    is_active = Column(Boolean, default=True)
    is_premium = Column(Boolean, default=False)
    created_at = Column(DateTime, default=datetime.utcnow)
    
    # Relationships
    telemetry_events = relationship("TelemetryEvent", back_populates="user", cascade="all, delete-orphan")
    context_sessions = relationship("ContextSession", back_populates="user", cascade="all, delete-orphan")
    

class TelemetryEvent(Base):
    """
    Stores behavioral telemetry from Chrome extension.
    Optimized for high-frequency writes and time-series queries.
    """
    __tablename__ = "telemetry_events"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False, index=True)
    timestamp = Column(DateTime, default=datetime.utcnow, index=True)
    
    # Browser state
    active_url = Column(Text)
    active_domain = Column(String, index=True)
    active_title = Column(Text)
    tab_count = Column(Integer)
    
    # Behavioral metrics
    context_switches_5min = Column(Integer)
    typing_velocity = Column(Integer)
    mouse_velocity = Column(Float)
    idle_seconds = Column(Integer)
    scroll_depth = Column(Float)
    
    # Relationships
    user = relationship("User", back_populates="telemetry_events")
    
    # Composite index for efficient time-range queries per user
    __table_args__ = (
        Index('idx_user_timestamp', 'user_id', 'timestamp'),
    )


class ContextSession(Base):
    """
    Aggregated cognitive mode sessions detected by AI.
    Represents continuous periods in a specific focus state.
    """
    __tablename__ = "context_sessions"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False, index=True)
    
    # Session timing
    start_time = Column(DateTime, nullable=False, index=True)
    end_time = Column(DateTime)
    duration_minutes = Column(Integer)
    
    # AI-detected mode
    mode = Column(String, index=True)
    confidence = Column(Float)
    
    # Context data (JSON stored as text)
    primary_domains = Column(Text)
    productivity_score = Column(Float)
    
    # Relationships
    user = relationship("User", back_populates="context_sessions")
    
    __table_args__ = (
        Index('idx_user_start_time', 'user_id', 'start_time'),
    )


