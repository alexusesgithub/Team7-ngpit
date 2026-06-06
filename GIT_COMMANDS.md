# Git Commands for Module 3: Challenge Me

## 🚀 Quick Method: Run the Script

### Windows (PowerShell)
```powershell
cd c:\Users\sarathy\Desktop\m3\Team7-ngpit
Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process
.\push_to_github.ps1
```

### macOS/Linux (Terminal)
```bash
cd ~/Desktop/m3/Team7-ngpit
chmod +x push_to_github.sh
./push_to_github.sh
```

---

## 📝 Manual Method: Step-by-Step Commands

If you prefer to run commands manually, execute these in order:

### Step 1: Navigate to Project
```bash
cd c:\Users\sarathy\Desktop\m3\Team7-ngpit
```

### Step 2: Create New Branch
```bash
git checkout -b feature/challenge-me-module
```

### Step 3: Check Status (Optional)
```bash
git status
```

### Step 4: Stage All Changes
```bash
git add -A
```

### Step 5: Commit Changes
```bash
git commit -m "feat: Implement Module 3 - Challenge Me with full-stack backend"
```

### Step 6: Push to GitHub
```bash
git push -u origin feature/challenge-me-module
```

---

## ✅ Expected Output

When you run the script or commands, you should see:

```
On branch feature/challenge-me-module
Your branch is ahead of 'origin/main' by 1 commit.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean
```

Followed by:
```
Enumerating objects: 45, done.
Counting objects: 100% (45/45), done.
Delta compression using up to 8 threads
Compressing objects: 100% (38/38), done.
Writing objects: 100% (40/40), 125.43 KiB | 2.54 MiB/s, done.
Total 40 (delta 10), reused 0 (delta 0), reused pack 0 (delta 0)
remote: Resolving deltas: 100% (10/10), done.
remote: 
remote: Create a pull request for 'feature/challenge-me-module' on GitHub by visiting:
remote:      https://github.com/alexusesgithub/Team7-ngpit/pull/new/feature/challenge-me-module
remote: 
To https://github.com/alexusesgithub/Team7-ngpit.git
 * [new branch]      feature/challenge-me-module -> feature/challenge-me-module
Branch 'feature/challenge-me-module' set up to track remote branch 'feature/challenge-me-module' from 'origin'.
```

---

## 📊 What's Being Committed

### Modified Files (2)
- `futureforge/src/App.tsx` - Added Module 3 routing
- `futureforge/src/Home.tsx` - Module 3 button integration

### New Files (14+)
- `futureforge/src/ChallengeMe.tsx` - Full Module 3 component
- `futureforge/src/services/challengeMeAPI.ts` - API service layer
- `backend/main.py` - FastAPI backend with 21 endpoints
- `backend/requirements.txt` - Python dependencies
- `backend/.env.example` - Backend configuration
- `backend/Dockerfile` - Docker configuration
- `backend/setup_backend.bat` - Windows setup script
- `backend/setup_backend.sh` - macOS/Linux setup script
- `futureforge/.env.example` - Frontend configuration
- `futureforge/Dockerfile` - Frontend Docker
- `futureforge/setup_frontend.bat` - Frontend Windows setup
- `futureforge/setup_frontend.sh` - Frontend macOS/Linux setup
- `GETTING_STARTED.md` - Quick start guide
- `BACKEND_SETUP.md` - Full setup guide
- `BACKEND_SUMMARY.md` - Backend reference
- `PROJECT_STRUCTURE.md` - Project structure
- `docker-compose.yml` - Docker composition

---

## 🔗 Next Steps After Push

1. **View on GitHub:**
   ```
   https://github.com/alexusesgithub/Team7-ngpit/tree/feature/challenge-me-module
   ```

2. **Create Pull Request:**
   - Go to: https://github.com/alexusesgithub/Team7-ngpit
   - Click "Compare & pull request" (GitHub will show this automatically)
   - Or click "Pull requests" tab → "New pull request"
   - Select base: `main` ← compare: `feature/challenge-me-module`

3. **Add PR Description:**
   ```markdown
   ## Module 3: Challenge Me - Complete Implementation
   
   ### Changes
   - ✅ Frontend: ChallengeMe component with 5 tabs (Projects, Teams, Learning, Mentors, Internships)
   - ✅ Backend: FastAPI with 21 REST API endpoints
   - ✅ API Service: TypeScript API client for frontend
   - ✅ Setup: Automated setup scripts for Windows/macOS/Linux
   - ✅ Docker: Docker Compose + Dockerfiles for easy deployment
   - ✅ Documentation: Complete guides (GETTING_STARTED.md, BACKEND_SETUP.md, etc.)
   
   ### Features
   - Industry Projects with progress tracking
   - Team Formation and joining
   - Peer Learning discussion board
   - Mentor Guidance and matching
   - Mini Internships portal
   - Mock data pre-populated
   - CORS enabled for development
   
   ### Testing
   - Backend: http://localhost:8000 (Swagger UI at /docs)
   - Frontend: http://localhost:5173
   - All endpoints tested and working
   
   ### Technical Details
   - Frontend: React + Vite + TypeScript + Tailwind
   - Backend: FastAPI + Pydantic + Uvicorn
   - No breaking changes, seamlessly integrated
   ```

4. **Request Review:**
   - Add team members as reviewers
   - Add labels: `feature`, `module-3`, `backend`, `frontend`
   - Add to project board if you have one

---

## 🛠️ Troubleshooting

### Issue: "Permission denied" on shell script
**Solution:**
```bash
chmod +x push_to_github.sh
./push_to_github.sh
```

### Issue: "Permission denied" on PowerShell
**Solution:**
```powershell
Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process
.\push_to_github.ps1
```

### Issue: "fatal: not a git repository"
**Solution:** Make sure you're in the correct directory
```bash
cd c:\Users\sarathy\Desktop\m3\Team7-ngpit
git status
```

### Issue: "Authentication failed"
**Solution:** Check your GitHub credentials
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Issue: "Branch already exists"
**Solution:** The script will handle this automatically by checking out the existing branch

---

## 📋 Git Workflow Summary

```
main (origin)
     ↓ (git checkout -b)
feature/challenge-me-module (local)
     ↓ (git add -A)
Changes staged
     ↓ (git commit -m)
Committed
     ↓ (git push -u origin)
Pushed to GitHub
     ↓ (Create Pull Request)
Ready for review and merge
```

---

## 💡 Pro Tips

1. **Check branch before pushing:**
   ```bash
   git branch -vv
   ```

2. **See what changed:**
   ```bash
   git diff HEAD~1
   ```

3. **Cancel if needed:**
   ```bash
   git reset --soft HEAD~1  # Undo last commit (keeps changes)
   git checkout main         # Switch back to main
   ```

4. **View your commits:**
   ```bash
   git log --oneline -10
   ```

---

## ✨ You're all set!

Choose either:
- **Quick:** Run `.\push_to_github.ps1` (Windows) or `./push_to_github.sh` (Mac/Linux)
- **Manual:** Follow the step-by-step commands above

Then create a Pull Request on GitHub! 🚀
