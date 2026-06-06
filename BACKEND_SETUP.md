# Module 3: Challenge Me - Full Stack Setup Guide

## 📁 Project Structure

```
Team7-ngpit/
├── futureforge/                    # React Frontend (Vite)
│   ├── src/
│   │   ├── ChallengeMe.tsx        # Module 3 Component
│   │   ├── services/
│   │   │   └── challengeMeAPI.ts  # API Service Layer (NEW)
│   │   ├── App.tsx
│   │   ├── Home.tsx
│   │   └── ...
│   ├── .env.example
│   └── package.json
│
├── backend/                        # Python FastAPI Backend (NEW)
│   ├── main.py                    # FastAPI Application
│   ├── requirements.txt           # Python Dependencies
│   └── .env.example
│
└── README.md
```

---

## 🚀 Quick Start

### Step 1: Setup Backend (Python FastAPI)

1. **Create Python Virtual Environment**
   ```bash
   cd backend
   python -m venv venv
   ```

2. **Activate Virtual Environment**
   - **Windows (PowerShell):**
     ```bash
     .\venv\Scripts\Activate.ps1
     ```
   - **macOS/Linux:**
     ```bash
     source venv/bin/activate
     ```

3. **Install Dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Create `.env` file** (from `.env.example`)
   ```bash
   cp .env.example .env
   ```

5. **Run Backend Server**
   ```bash
   uvicorn main:app --reload --host 0.0.0.0 --port 8000
   ```
   - Backend will be available at: `http://localhost:8000`
   - API Documentation: `http://localhost:8000/docs` (Interactive Swagger UI)
   - Alternative Docs: `http://localhost:8000/redoc`

---

### Step 2: Setup Frontend (React + Vite)

1. **Install Dependencies** (if not already done)
   ```bash
   cd futureforge
   npm install
   ```

2. **Create `.env` file** (from `.env.example`)
   ```bash
   cp .env.example .env
   ```

3. **Run Frontend Development Server**
   ```bash
   npm run dev
   ```
   - Frontend will be available at: `http://localhost:5173`

---

## 🔌 API Integration

### How to Update ChallengeMe Component to Use API

The API service layer is already created at `futureforge/src/services/challengeMeAPI.ts`

**Example: Fetch Projects from Backend**

```typescript
import { projectsAPI } from '../services/challengeMeAPI';
import { useEffect, useState } from 'react';

export default function ChallengeMe() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    projectsAPI.getAll()
      .then(data => setProjects(data))
      .catch(error => console.error('Failed to fetch projects:', error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading projects...</div>;
  
  return (
    // Render projects...
  );
}
```

### Available API Methods

#### Projects
```typescript
projectsAPI.getAll(featuredOnly?: boolean)  // Get all or featured projects
projectsAPI.getById(id: number)              // Get specific project
projectsAPI.join(projectId, userId)          // User joins project
```

#### Teams
```typescript
teamsAPI.getAll()                           // Get all teams
teamsAPI.getById(id: number)                // Get specific team
teamsAPI.join(teamId, userId)               // User joins team
teamsAPI.create(teamData)                   // Create new team
```

#### Discussions
```typescript
discussionsAPI.getAll(category?: string)    // Get all/filtered discussions
discussionsAPI.getById(id: number)          // Get specific discussion
discussionsAPI.create(data)                 // Create new discussion
discussionsAPI.upvote(id: number)           // Upvote a discussion
```

#### Mentors
```typescript
mentorsAPI.getAll(availability?: string)    // Get all/available mentors
mentorsAPI.getById(id: number)              // Get specific mentor
mentorsAPI.requestMentorship(mentorId, userId)  // Request mentorship
```

#### Internships
```typescript
internshipsAPI.getAll(status?: string)      // Get all/filtered internships
internshipsAPI.getById(id: number)          // Get specific internship
internshipsAPI.apply(internshipId, userId)  // Apply for internship
```

#### Stats
```typescript
statsAPI.getStats()                         // Get module statistics
healthCheck()                               // Check API health
```

---

## 📡 Backend API Endpoints

### Health & Stats
- `GET /health` - Health check
- `GET /api/stats` - Get module statistics

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects?featured_only=true` - Get featured projects
- `GET /api/projects/{id}` - Get specific project
- `POST /api/projects/{id}/join` - Join a project

### Teams
- `GET /api/teams` - Get all teams
- `GET /api/teams/{id}` - Get specific team
- `POST /api/teams/{id}/join` - Join a team
- `POST /api/teams` - Create new team

### Discussions
- `GET /api/discussions` - Get all discussions
- `GET /api/discussions?category=AI/ML` - Filter by category
- `GET /api/discussions/{id}` - Get specific discussion
- `POST /api/discussions` - Create new discussion
- `POST /api/discussions/{id}/upvote` - Upvote discussion

### Mentors
- `GET /api/mentors` - Get all mentors
- `GET /api/mentors?availability=Available` - Filter by availability
- `GET /api/mentors/{id}` - Get specific mentor
- `POST /api/mentors/{id}/request` - Request mentorship

### Internships
- `GET /api/internships` - Get all internships
- `GET /api/internships?status_filter=Open` - Filter by status
- `GET /api/internships/{id}` - Get specific internship
- `POST /api/internships/{id}/apply` - Apply for internship

---

## 🗄️ Database Models (For Future Implementation)

When you're ready to integrate a database (PostgreSQL, MySQL, etc.), the backend is structured with these models:

```
Project
├── id: int
├── title: string
├── description: string
├── category: enum (AI/ML, Full Stack, Systems Design)
├── difficulty: enum (Beginner, Intermediate, Advanced)
├── duration: string
├── team_size: string
├── skills: list
├── mentors_assigned: int
├── featured: bool
├── progress: int
└── created_at: datetime

Team
├── id: int
├── name: string
├── project_id: int (FK)
├── members_count: int
├── max_members: int
├── skills_required: list
├── open_spots: int
├── status: enum
└── created_at: datetime

Discussion
├── id: int
├── title: string
├── content: string
├── category: string
├── author_id: int
├── author_name: string
├── replies_count: int
├── views: int
├── upvotes: int
├── is_recent: bool
└── created_at: datetime

Mentor
├── id: int
├── name: string
├── role: string
├── expertise: list
├── rating: float
├── reviews_count: int
├── availability: enum
└── assigned_to_user: bool

Internship
├── id: int
├── company: string
├── title: string
├── duration: string
├── commitment_hours: string
├── stipend: string
├── skills: list
├── status: enum
├── deadline_days: int
└── posted_at: datetime
```

---

## 🔐 Environment Variables

### Backend (.env)
```
FASTAPI_ENV=development
HOST=0.0.0.0
PORT=8000
FRONTEND_URL=http://localhost:5173
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:8000
```

---

## 🧪 Testing the API

### Using Swagger UI (Interactive)
1. Start backend: `uvicorn main:app --reload`
2. Open browser: `http://localhost:8000/docs`
3. Try API endpoints directly in the UI

### Using cURL
```bash
# Get all projects
curl http://localhost:8000/api/projects

# Get featured projects only
curl http://localhost:8000/api/projects?featured_only=true

# Get all teams
curl http://localhost:8000/api/teams

# Get all mentors
curl http://localhost:8000/api/mentors
```

### Using Postman
1. Import endpoints from Swagger JSON: `http://localhost:8000/openapi.json`
2. Test all endpoints with request/response examples

---

## 📝 Next Steps

1. ✅ Backend created with mock data
2. ✅ Frontend API service layer created
3. ⏭️ **TODO:** Update ChallengeMe.tsx to use API instead of mock data
4. ⏭️ **TODO:** Integrate with real database (PostgreSQL/MySQL)
5. ⏭️ **TODO:** Add authentication/authorization
6. ⏭️ **TODO:** Add error handling UI
7. ⏭️ **TODO:** Add loading states
8. ⏭️ **TODO:** Deploy to production

---

## 🛠️ Tech Stack

### Frontend
- React 19.2.6
- Vite 8.0.12
- TypeScript 6.0.2
- Tailwind CSS 4.3.0
- lucide-react 1.17.0

### Backend
- FastAPI 0.104.1
- Uvicorn 0.24.0 (ASGI server)
- Pydantic 2.5.0 (Data validation)
- Python 3.8+

---

## 🐛 Troubleshooting

### Backend won't start
```bash
# Check if port 8000 is already in use
lsof -i :8000  # macOS/Linux
netstat -ano | findstr :8000  # Windows

# Kill process using the port
kill -9 <PID>  # macOS/Linux
taskkill /PID <PID> /F  # Windows

# Or change PORT in .env
```

### CORS Error
- Ensure `FRONTEND_URL` in backend `.env` matches your frontend URL
- Default is `http://localhost:5173` for Vite dev server

### API calls timing out
- Ensure backend is running on port 8000
- Check `VITE_API_URL` in frontend `.env`
- Verify no firewall is blocking port 8000

---

## 📚 Resources

- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [Pydantic Documentation](https://docs.pydantic.dev/)
- [Uvicorn Documentation](https://www.uvicorn.org/)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)

---

**Ready to integrate? Start with Step 1 and Step 2 above!** 🎉
