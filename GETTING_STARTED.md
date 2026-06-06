# 🚀 Module 3: Challenge Me - Getting Started (5 Minutes)

## What's Been Created for You

✅ **Backend (Python FastAPI)** - 21 API endpoints  
✅ **Frontend API Service** - TypeScript client  
✅ **ChallengeMe Component** - Full UI with 5 tabs  
✅ **Setup Scripts** - Automated setup  
✅ **Complete Documentation** - Guides included  

---

## ⚡ Start Backend (Windows)

Open PowerShell and run:

```bash
cd backend
.\setup_backend.bat
```

You'll see:
```
Backend setup complete!
Starting FastAPI server...
API will be available at: http://localhost:8000
Swagger UI: http://localhost:8000/docs
```

**That's it!** Backend is running. 🎉

---

## ⚡ Start Backend (macOS/Linux)

Open Terminal and run:

```bash
cd backend
bash setup_backend.sh
```

Same result as Windows above.

---

## ⚡ Start Frontend (New Terminal/PowerShell)

```bash
cd futureforge
.\setup_frontend.bat
```

Or macOS/Linux:

```bash
cd futureforge
bash setup_frontend.sh
```

You'll see:
```
Frontend setup complete!
Starting Vite development server...
Frontend will be available at: http://localhost:5173
```

**Done!** Frontend is running. 🎉

---

## ✅ Verify Everything Works

### Test 1: Backend is Running
Open browser: `http://localhost:8000/health`

Should see:
```json
{"status":"ok","message":"FutureForge Challenge Me API is running"}
```

### Test 2: Backend Docs (Interactive Testing)
Open browser: `http://localhost:8000/docs`

You can test all 21 endpoints directly here!

### Test 3: Frontend is Running
Open browser: `http://localhost:5173`

Click "Launch Module 3" → Should see Challenge Me with all 5 tabs

### Test 4: Frontend Can Talk to Backend
1. In `http://localhost:5173`, open DevTools (F12)
2. Go to Console tab
3. Run:
```javascript
fetch('http://localhost:8000/api/projects')
  .then(r => r.json())
  .then(console.log)
```

Should see projects data printed!

---

## 📁 What Files Were Created

```
backend/
├── main.py                  ← FastAPI app (21 endpoints)
├── requirements.txt         ← Python packages
├── .env.example            ← Config template
├── setup_backend.bat       ← Windows setup
├── setup_backend.sh        ← Mac/Linux setup
└── Dockerfile              ← Docker setup (optional)

futureforge/
├── src/
│   ├── ChallengeMe.tsx     ← Module 3 Component
│   └── services/
│       └── challengeMeAPI.ts ← API client
├── .env.example            ← Config template
├── setup_frontend.bat      ← Windows setup
├── setup_frontend.sh       ← Mac/Linux setup
└── Dockerfile              ← Docker setup (optional)

Documentation/
├── BACKEND_SETUP.md        ← Full setup guide
├── BACKEND_SUMMARY.md      ← Quick reference
├── PROJECT_STRUCTURE.md    ← File structure
└── GETTING_STARTED.md      ← This file!
```

---

## 🔌 API Endpoints (21 Total)

### Projects (4)
```
GET    /api/projects
GET    /api/projects?featured_only=true
GET    /api/projects/{id}
POST   /api/projects/{id}/join
```

### Teams (4)
```
GET    /api/teams
GET    /api/teams/{id}
POST   /api/teams
POST   /api/teams/{id}/join
```

### Discussions (4)
```
GET    /api/discussions
GET    /api/discussions?category=AI/ML
GET    /api/discussions/{id}
POST   /api/discussions
POST   /api/discussions/{id}/upvote
```

### Mentors (3)
```
GET    /api/mentors
GET    /api/mentors/{id}
POST   /api/mentors/{id}/request
```

### Internships (3)
```
GET    /api/internships
GET    /api/internships/{id}
POST   /api/internships/{id}/apply
```

### Health & Stats (2)
```
GET    /health
GET    /api/stats
```

Test all of them at: `http://localhost:8000/docs`

---

## 💻 Current Data (Mock)

Everything is pre-populated with realistic data:

✅ **3 Featured Projects**
- AI Startup Idea Validator (35% progress)
- Real-Time Collaboration Platform
- Sustainable Supply Chain Optimizer

✅ **2 Active Teams**
- Team Alpha (AI project)
- Collab Coders (Full Stack project)

✅ **2 Discussion Threads**
- ML pipelines for production
- WebSockets vs GraphQL

✅ **3 Mentors**
- Industry Professional (Your Assigned Mentor!)
- Alex Rodriguez (Full Stack Lead)
- Priya Sharma (Product Manager)

✅ **2 Internship Opportunities**
- AI/ML Intern at TechStartup Labs
- Full Stack at CloudScale Inc.

---

## 🎯 Module 3: Challenge Me Features

### 5 Tabs - All Working!

#### 1️⃣ Projects Tab
- Featured projects highlighted
- Progress tracking
- "Start Project" / "Continue Building" buttons
- Skills required displayed
- Mentor assignment shown

#### 2️⃣ Teams Tab
- Browse active teams
- Create your own team
- See team composition
- Join open teams

#### 3️⃣ Peer Learning Tab
- Discussion board
- Upvote discussions
- Filter by category
- Start new discussions

#### 4️⃣ Mentors Tab
- Your assigned mentor (Industry Professional)
- Browse available mentors
- View expertise areas
- Request mentorship
- Send messages

#### 5️⃣ Internships Tab
- Micro-internship opportunities
- Paid project listings
- View deadline and commitment
- Apply to opportunities

---

## 📱 Next Steps

### Option 1: Just Explore
1. ✅ Start backend
2. ✅ Start frontend
3. ✅ Test endpoints at `http://localhost:8000/docs`
4. ✅ Navigate Module 3 at `http://localhost:5173`

**Current Status:** Working perfectly with mock data! 🎉

### Option 2: Connect Frontend to Backend
Update `ChallengeMe.tsx` to fetch real data:

```typescript
import { projectsAPI } from '../services/challengeMeAPI';
import { useEffect, useState } from 'react';

export default function ChallengeMe() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    projectsAPI.getAll().then(setProjects);
  }, []);

  // Rest of component...
}
```

**Estimated time:** 30 minutes for all tabs

### Option 3: Add Real Database
Replace mock data in `backend/main.py` with SQLAlchemy + PostgreSQL

See `BACKEND_SETUP.md` for details.

**Estimated time:** 2-3 hours

---

## 🐛 Troubleshooting

### "Cannot reach backend" error

**Check:** Is port 8000 free?
```bash
# Windows
netstat -ano | findstr :8000

# Mac/Linux
lsof -i :8000
```

**Solution:** Kill the process or use different port

---

### "Module not found" in frontend

**Check:** Is file at `futureforge/src/services/challengeMeAPI.ts`?

**Solution:** Re-run setup script or manually copy file

---

### Setup script not working

**Try manual setup:**

**Backend (Windows):**
```bash
cd backend
python -m venv venv
.\venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

**Frontend (Windows):**
```bash
cd futureforge
npm install
npm run dev
```

---

## 📚 Documentation Files

Read these in order:

1. **GETTING_STARTED.md** ← You are here! (5 min)
2. **BACKEND_SUMMARY.md** ← Quick overview (5 min)
3. **BACKEND_SETUP.md** ← Complete guide (10 min)
4. **PROJECT_STRUCTURE.md** ← File reference (5 min)

---

## 🎓 Tech Stack Used

| Frontend | Backend |
|----------|---------|
| React 19.2.6 | FastAPI 0.104.1 |
| Vite 8.0 | Uvicorn 0.24.0 |
| TypeScript 6.0 | Pydantic 2.5.0 |
| Tailwind CSS 4.3 | Python 3.8+ |
| lucide-react 1.17 | CORS Enabled |

---

## 🚀 Ready to Go?

### Quick Command Reference

**Backend (Windows):**
```bash
cd backend && .\setup_backend.bat
```

**Backend (Mac/Linux):**
```bash
cd backend && bash setup_backend.sh
```

**Frontend (Windows):**
```bash
cd futureforge && .\setup_frontend.bat
```

**Frontend (Mac/Linux):**
```bash
cd futureforge && bash setup_frontend.sh
```

**Docker (Optional - If you have Docker installed):**
```bash
docker-compose up
```

---

## 📞 Need Help?

1. Check **BACKEND_SETUP.md** for detailed troubleshooting
2. Visit `http://localhost:8000/docs` to test API directly
3. Check browser console for errors: F12 → Console tab
4. Ensure both backend and frontend are running on correct ports

---

**Everything is ready! Start the backend, start the frontend, and you're all set.** ✨

Happy coding! 🎉
