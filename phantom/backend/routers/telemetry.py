"""
Telemetry endpoint for receiving Chrome extension data.
High-performance design for handling frequent updates.
"""

from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session
from typing import List
from datetime import datetime, timedelta

from database import get_db
from models import User, TelemetryEvent
from schemas import TelemetryEventCreate, TelemetryEventResponse

# Placeholder until Day 2 auth is wired; swap to real dependency below
try:
    from auth import get_current_user
except Exception:
    def get_current_user():  # type: ignore
        raise RuntimeError("Auth is not configured yet. Implement Day 2 to secure endpoints.")


router = APIRouter(prefix="/telemetry", tags=["telemetry"])


@router.post("/", response_model=TelemetryEventResponse, status_code=status.HTTP_201_CREATED)
async def create_telemetry_event(
    event: TelemetryEventCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    """
    Receives telemetry from Chrome extension.
    """
    db_event = TelemetryEvent(
        user_id=current_user.id,
        timestamp=event.timestamp,
        active_url=event.active_url,
        active_domain=event.active_domain,
        active_title=event.active_title,
        tab_count=event.tab_count,
        context_switches_5min=event.context_switches_5min,
        typing_velocity=event.typing_velocity,
        mouse_velocity=event.mouse_velocity,
        idle_seconds=event.idle_seconds,
        scroll_depth=event.scroll_depth,
    )
    db.add(db_event)
    db.commit()
    db.refresh(db_event)
    return db_event


@router.get("/recent", response_model=List[TelemetryEventResponse])
async def get_recent_telemetry(
    limit: int = 50,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    """
    Retrieves recent telemetry for dashboard display.
    """
    events = (
        db.query(TelemetryEvent)
        .filter(TelemetryEvent.user_id == current_user.id)
        .order_by(TelemetryEvent.timestamp.desc())
        .limit(limit)
        .all()
    )
    return events


@router.get("/summary")
async def get_telemetry_summary(
    hours: int = 24,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    """
    Aggregated statistics for dashboard overview.
    """
    since = datetime.utcnow() - timedelta(hours=hours)
    events = (
        db.query(TelemetryEvent)
        .filter(
            TelemetryEvent.user_id == current_user.id,
            TelemetryEvent.timestamp >= since,
        )
        .all()
    )
    if not events:
        return {
            "total_events": 0,
            "unique_domains": 0,
            "avg_tab_count": 0,
            "total_context_switches": 0,
        }
    unique_domains = set(e.active_domain for e in events)
    avg_tab_count = sum(e.tab_count for e in events) / len(events)
    total_switches = sum(e.context_switches_5min for e in events)
    return {
        "total_events": len(events),
        "unique_domains": len(unique_domains),
        "avg_tab_count": round(avg_tab_count, 1),
        "total_context_switches": total_switches,
        "time_range_hours": hours,
    }


