"""
Pydantic schemas for request/response validation.
Ensures type safety and automatic API documentation.
"""

from pydantic import BaseModel, EmailStr, Field
from datetime import datetime
from typing import Optional


# ============= USER SCHEMAS =============

class UserBase(BaseModel):
    email: EmailStr
    username: str


class UserCreate(UserBase):
    password: str = Field(..., min_length=8)


class UserLogin(BaseModel):
    username: str
    password: str


class User(BaseModel):
    id: int
    email: EmailStr
    username: str
    is_active: bool
    is_premium: bool
    created_at: datetime
    
    model_config = {"from_attributes": True}


class Token(BaseModel):
    access_token: str
    token_type: str


# ============= TELEMETRY SCHEMAS =============

class TelemetryEventCreate(BaseModel):
    """
    Telemetry data sent from Chrome extension.
    Optimized for minimal payload size while capturing key signals.
    """
    timestamp: datetime
    active_url: str
    active_domain: str
    active_title: str
    tab_count: int
    context_switches_5min: int = 0
    typing_velocity: int = 0  # chars/min
    mouse_velocity: float = 0.0  # pixels/sec
    idle_seconds: int = 0
    scroll_depth: float = 0.0
    
    model_config = {
        "json_schema_extra": {
            "example": {
                "timestamp": "2025-01-15T10:23:45Z",
                "active_url": "https://docs.google.com/document/d/abc123",
                "active_domain": "docs.google.com",
                "active_title": "Q4 Product Roadmap - Google Docs",
                "tab_count": 8,
                "context_switches_5min": 2,
                "typing_velocity": 45,
                "mouse_velocity": 120.5,
                "idle_seconds": 0,
                "scroll_depth": 0.65
            }
        }
    }


class TelemetryEventResponse(BaseModel):
    id: int
    user_id: int
    timestamp: datetime
    active_domain: str
    # optional field for future mode enrichment
    # mode: Optional[str] = None
    
    model_config = {"from_attributes": True}


# ============= CONTEXT SCHEMAS =============

class ContextSessionResponse(BaseModel):
    id: int
    user_id: int
    start_time: datetime
    end_time: Optional[datetime]
    duration_minutes: Optional[int]
    mode: str
    confidence: float
    productivity_score: Optional[float]
    
    model_config = {"from_attributes": True}


