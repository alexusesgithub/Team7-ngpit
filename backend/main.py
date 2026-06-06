"""
Module 3: Challenge Me - Backend
FastAPI application for managing projects, teams, mentors, and internships.
"""
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
from enum import Enum
from datetime import datetime

app = FastAPI(
    title="FutureForge Challenge Me API",
    description="Backend API for Module 3: Challenge Me",
    version="1.0.0"
)

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],  # Vite dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ============ Enums ============
class ProjectCategory(str, Enum):
    AI_ML = "AI/ML"
    FULL_STACK = "Full Stack"
    SYSTEMS_DESIGN = "Systems Design"

class ProjectDifficulty(str, Enum):
    BEGINNER = "Beginner"
    INTERMEDIATE = "Intermediate"
    ADVANCED = "Advanced"

class TeamStatus(str, Enum):
    RECRUITING = "Recruiting"
    FULL = "Full"
    COMPLETED = "Completed"

class MentorAvailability(str, Enum):
    AVAILABLE = "Available"
    BOOKED = "Booked"
    ON_LEAVE = "On Leave"

class InternshipStatus(str, Enum):
    OPEN = "Open"
    CLOSING_SOON = "Closing Soon"
    CLOSED = "Closed"

# ============ Pydantic Models ============

class ProjectBase(BaseModel):
    title: str
    description: str
    category: ProjectCategory
    difficulty: ProjectDifficulty
    duration: str
    team_size: str
    skills: List[str]
    mentors_assigned: int
    featured: bool = False

class ProjectResponse(ProjectBase):
    id: int
    progress: int
    created_at: datetime
    
    class Config:
        from_attributes = True

class TeamBase(BaseModel):
    name: str
    project_id: int
    skills_required: List[str]
    max_members: int

class TeamResponse(TeamBase):
    id: int
    members_count: int
    status: TeamStatus
    open_spots: int
    created_at: datetime
    
    class Config:
        from_attributes = True

class DiscussionBase(BaseModel):
    title: str
    content: str
    category: str
    author_id: int

class DiscussionResponse(DiscussionBase):
    id: int
    replies_count: int
    views: int
    upvotes: int
    is_recent: bool
    created_at: datetime
    author_name: str
    
    class Config:
        from_attributes = True

class MentorBase(BaseModel):
    name: str
    role: str
    expertise: List[str]
    rating: float
    reviews_count: int

class MentorResponse(MentorBase):
    id: int
    availability: MentorAvailability
    assigned_to_user: bool
    
    class Config:
        from_attributes = True

class InternshipBase(BaseModel):
    company: str
    title: str
    duration: str
    commitment_hours: str
    stipend: str
    skills: List[str]
    deadline_days: int

class InternshipResponse(InternshipBase):
    id: int
    status: InternshipStatus
    posted_at: datetime
    
    class Config:
        from_attributes = True

# ============ Mock Data ============

PROJECTS_DB = [
    {
        "id": 1,
        "title": "AI Startup Idea Validator",
        "description": "Build an AI system that evaluates startup viability using real market data, competitive analysis, and growth predictions.",
        "category": ProjectCategory.AI_ML,
        "difficulty": ProjectDifficulty.ADVANCED,
        "duration": "6 weeks",
        "team_size": "Solo or Team",
        "skills": ["Python", "ML", "API Integration", "Data Analysis"],
        "mentors_assigned": 2,
        "featured": True,
        "progress": 35,
        "created_at": datetime.now()
    },
    {
        "id": 2,
        "title": "Real-Time Collaboration Platform",
        "description": "Develop a web platform for real-time team collaboration with live editing, comments, and notifications.",
        "category": ProjectCategory.FULL_STACK,
        "difficulty": ProjectDifficulty.INTERMEDIATE,
        "duration": "4 weeks",
        "team_size": "Team (3-5)",
        "skills": ["React", "Node.js", "WebSockets", "PostgreSQL"],
        "mentors_assigned": 1,
        "featured": False,
        "progress": 0,
        "created_at": datetime.now()
    },
    {
        "id": 3,
        "title": "Sustainable Supply Chain Optimizer",
        "description": "Design an optimization engine for sustainable supply chains reducing carbon emissions while maintaining profitability.",
        "category": ProjectCategory.SYSTEMS_DESIGN,
        "difficulty": ProjectDifficulty.ADVANCED,
        "duration": "8 weeks",
        "team_size": "Team (4-6)",
        "skills": ["System Design", "Optimization", "Cloud", "Analytics"],
        "mentors_assigned": 3,
        "featured": False,
        "progress": 0,
        "created_at": datetime.now()
    }
]

TEAMS_DB = [
    {
        "id": 1,
        "name": "Team Alpha",
        "project_id": 1,
        "members_count": 3,
        "max_members": 5,
        "skills_required": ["Python", "ML", "Data Analysis"],
        "open_spots": 2,
        "status": TeamStatus.RECRUITING,
        "created_at": datetime.now()
    },
    {
        "id": 2,
        "name": "Collab Coders",
        "project_id": 2,
        "members_count": 4,
        "max_members": 5,
        "skills_required": ["React", "Node.js", "WebSockets"],
        "open_spots": 1,
        "status": TeamStatus.RECRUITING,
        "created_at": datetime.now()
    }
]

DISCUSSIONS_DB = [
    {
        "id": 1,
        "title": "How to structure ML pipelines for production?",
        "content": "I'm looking for best practices...",
        "category": "ML/AI",
        "author_id": 101,
        "author_name": "Sarah Chen",
        "replies_count": 12,
        "views": 340,
        "upvotes": 45,
        "is_recent": True,
        "created_at": datetime.now()
    },
    {
        "id": 2,
        "title": "WebSockets vs GraphQL subscriptions for real-time updates?",
        "content": "What are the trade-offs?...",
        "category": "Full Stack",
        "author_id": 102,
        "author_name": "Alex Kumar",
        "replies_count": 8,
        "views": 210,
        "upvotes": 32,
        "is_recent": False,
        "created_at": datetime.now()
    }
]

MENTORS_DB = [
    {
        "id": 1,
        "name": "Industry Professional",
        "role": "Senior ML Engineer @ Google",
        "expertise": ["Machine Learning", "System Design", "Career Growth"],
        "rating": 4.9,
        "reviews_count": 127,
        "availability": MentorAvailability.AVAILABLE,
        "assigned_to_user": True
    },
    {
        "id": 2,
        "name": "Alex Rodriguez",
        "role": "Full Stack Lead @ Stripe",
        "expertise": ["Full Stack", "Web Development", "Architecture"],
        "rating": 4.8,
        "reviews_count": 95,
        "availability": MentorAvailability.AVAILABLE,
        "assigned_to_user": False
    },
    {
        "id": 3,
        "name": "Priya Sharma",
        "role": "Product Manager @ Meta",
        "expertise": ["Product Strategy", "User Research", "Scaling"],
        "rating": 4.7,
        "reviews_count": 110,
        "availability": MentorAvailability.BOOKED,
        "assigned_to_user": False
    }
]

INTERNSHIPS_DB = [
    {
        "id": 1,
        "company": "TechStartup Labs",
        "title": "AI/ML Intern (Micro-Internship)",
        "duration": "2-4 weeks",
        "commitment_hours": "15 hrs/week",
        "stipend": "$500-800",
        "skills": ["Python", "TensorFlow", "Data"],
        "status": InternshipStatus.OPEN,
        "deadline_days": 14,
        "posted_at": datetime.now()
    },
    {
        "id": 2,
        "company": "CloudScale Inc.",
        "title": "Full Stack Developer (Paid Project)",
        "duration": "3-5 weeks",
        "commitment_hours": "20 hrs/week",
        "stipend": "$1200-1800",
        "skills": ["React", "Node.js", "AWS"],
        "status": InternshipStatus.OPEN,
        "deadline_days": 5,
        "posted_at": datetime.now()
    }
]

# ============ Routes ============

# Health Check
@app.get("/health")
async def health_check():
    """API health check endpoint."""
    return {"status": "ok", "message": "FutureForge Challenge Me API is running"}

# ============ Projects ============

@app.get("/api/projects", response_model=List[ProjectResponse])
async def get_projects(featured_only: bool = False):
    """Get all projects or featured projects only."""
    projects = PROJECTS_DB
    if featured_only:
        projects = [p for p in projects if p.get("featured", False)]
    return projects

@app.get("/api/projects/{project_id}", response_model=ProjectResponse)
async def get_project(project_id: int):
    """Get a specific project by ID."""
    project = next((p for p in PROJECTS_DB if p["id"] == project_id), None)
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    return project

@app.post("/api/projects/{project_id}/join")
async def join_project(project_id: int, user_id: int):
    """User joins a project."""
    project = next((p for p in PROJECTS_DB if p["id"] == project_id), None)
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    return {"message": f"Successfully joined project: {project['title']}", "project_id": project_id}

# ============ Teams ============

@app.get("/api/teams", response_model=List[TeamResponse])
async def get_teams():
    """Get all teams."""
    return TEAMS_DB

@app.get("/api/teams/{team_id}", response_model=TeamResponse)
async def get_team(team_id: int):
    """Get a specific team by ID."""
    team = next((t for t in TEAMS_DB if t["id"] == team_id), None)
    if not team:
        raise HTTPException(status_code=404, detail="Team not found")
    return team

@app.post("/api/teams/{team_id}/join")
async def join_team(team_id: int, user_id: int):
    """User joins a team."""
    team = next((t for t in TEAMS_DB if t["id"] == team_id), None)
    if not team:
        raise HTTPException(status_code=404, detail="Team not found")
    if team["open_spots"] <= 0:
        raise HTTPException(status_code=400, detail="Team is full")
    team["members_count"] += 1
    team["open_spots"] -= 1
    return {"message": f"Successfully joined team: {team['name']}", "team_id": team_id}

@app.post("/api/teams")
async def create_team(team_data: TeamBase):
    """Create a new team."""
    new_team = {
        "id": len(TEAMS_DB) + 1,
        "name": team_data.name,
        "project_id": team_data.project_id,
        "members_count": 1,
        "max_members": team_data.max_members,
        "skills_required": team_data.skills_required,
        "open_spots": team_data.max_members - 1,
        "status": TeamStatus.RECRUITING,
        "created_at": datetime.now()
    }
    TEAMS_DB.append(new_team)
    return new_team

# ============ Discussions ============

@app.get("/api/discussions", response_model=List[DiscussionResponse])
async def get_discussions(category: Optional[str] = None):
    """Get all discussions or filter by category."""
    discussions = DISCUSSIONS_DB
    if category:
        discussions = [d for d in discussions if d.get("category") == category]
    return discussions

@app.get("/api/discussions/{discussion_id}", response_model=DiscussionResponse)
async def get_discussion(discussion_id: int):
    """Get a specific discussion by ID."""
    discussion = next((d for d in DISCUSSIONS_DB if d["id"] == discussion_id), None)
    if not discussion:
        raise HTTPException(status_code=404, detail="Discussion not found")
    return discussion

@app.post("/api/discussions")
async def create_discussion(discussion_data: DiscussionBase):
    """Create a new discussion."""
    new_discussion = {
        "id": len(DISCUSSIONS_DB) + 1,
        "title": discussion_data.title,
        "content": discussion_data.content,
        "category": discussion_data.category,
        "author_id": discussion_data.author_id,
        "author_name": "User",
        "replies_count": 0,
        "views": 0,
        "upvotes": 0,
        "is_recent": True,
        "created_at": datetime.now()
    }
    DISCUSSIONS_DB.append(new_discussion)
    return new_discussion

@app.post("/api/discussions/{discussion_id}/upvote")
async def upvote_discussion(discussion_id: int):
    """Upvote a discussion."""
    discussion = next((d for d in DISCUSSIONS_DB if d["id"] == discussion_id), None)
    if not discussion:
        raise HTTPException(status_code=404, detail="Discussion not found")
    discussion["upvotes"] += 1
    return {"upvotes": discussion["upvotes"]}

# ============ Mentors ============

@app.get("/api/mentors", response_model=List[MentorResponse])
async def get_mentors(availability: Optional[str] = None):
    """Get all mentors or filter by availability."""
    mentors = MENTORS_DB
    if availability:
        mentors = [m for m in mentors if m.get("availability") == availability]
    return mentors

@app.get("/api/mentors/{mentor_id}", response_model=MentorResponse)
async def get_mentor(mentor_id: int):
    """Get a specific mentor by ID."""
    mentor = next((m for m in MENTORS_DB if m["id"] == mentor_id), None)
    if not mentor:
        raise HTTPException(status_code=404, detail="Mentor not found")
    return mentor

@app.post("/api/mentors/{mentor_id}/request")
async def request_mentor(mentor_id: int, user_id: int):
    """Request mentorship from a mentor."""
    mentor = next((m for m in MENTORS_DB if m["id"] == mentor_id), None)
    if not mentor:
        raise HTTPException(status_code=404, detail="Mentor not found")
    if mentor["availability"] == MentorAvailability.BOOKED:
        raise HTTPException(status_code=400, detail="Mentor is currently booked")
    return {"message": f"Mentorship request sent to {mentor['name']}", "mentor_id": mentor_id}

# ============ Internships ============

@app.get("/api/internships", response_model=List[InternshipResponse])
async def get_internships(status_filter: Optional[str] = None):
    """Get all internships or filter by status."""
    internships = INTERNSHIPS_DB
    if status_filter:
        internships = [i for i in internships if i.get("status") == status_filter]
    return internships

@app.get("/api/internships/{internship_id}", response_model=InternshipResponse)
async def get_internship(internship_id: int):
    """Get a specific internship by ID."""
    internship = next((i for i in INTERNSHIPS_DB if i["id"] == internship_id), None)
    if not internship:
        raise HTTPException(status_code=404, detail="Internship not found")
    return internship

@app.post("/api/internships/{internship_id}/apply")
async def apply_internship(internship_id: int, user_id: int):
    """Apply for an internship."""
    internship = next((i for i in INTERNSHIPS_DB if i["id"] == internship_id), None)
    if not internship:
        raise HTTPException(status_code=404, detail="Internship not found")
    if internship["status"] == InternshipStatus.CLOSED:
        raise HTTPException(status_code=400, detail="Application closed")
    return {"message": f"Application submitted for {internship['title']}", "internship_id": internship_id}

# ============ Stats/Dashboard ============

@app.get("/api/stats")
async def get_stats():
    """Get module statistics."""
    return {
        "total_projects": len(PROJECTS_DB),
        "active_teams": len([t for t in TEAMS_DB if t["status"] == TeamStatus.RECRUITING]),
        "total_discussions": len(DISCUSSIONS_DB),
        "available_mentors": len([m for m in MENTORS_DB if m["availability"] == MentorAvailability.AVAILABLE]),
        "open_internships": len([i for i in INTERNSHIPS_DB if i["status"] == InternshipStatus.OPEN])
    }
