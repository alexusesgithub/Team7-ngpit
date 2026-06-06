# FutureForge AI – The AI Employability Ecosystem for 2030

## 📌 Project Overview

By 2030, artificial intelligence will automate traditional entry-level technical tasks such as basic coding, content creation, UI design, customer support, and data processing.

**FutureForge AI** is an AI-powered employability ecosystem designed to bridge the widening gap between traditional education and future corporate readiness. Instead of asking "What course should I take?", FutureForge AI evaluates a student's core human strengths, maps their hobbies to professional skills, and provides an AI-driven growth roadmap filled with real-world industry projects and human mentorship.

---

## 🌀 SDLC Framework Alignment

We have approached the development of FutureForge AI using the **Agile-Waterfall Hybrid SDLC** model to ensure structured planning while allowing iterative AI feature enhancements during development iterations.

### 1. Requirement Analysis & Problem Definition

* **The Problem:** Students lack direction on how to remain employable in an AI-dominated market, while colleges struggle to prepare students for jobs that don't exist today. Current platforms focus too heavily on static certificates rather than real-world adaptability.
* **Target Audience (User Personas):**
* **Rahul (The Confused Student):** 2nd Year Engineering Student. Completes online courses but worries AI will replace his future role. (Need: Clear direction and personalized career guidance).
* **Priya (The Skilled Student):** Final Year Student. Has technical skills but lacks real-world projects and industry exposure. (Need: Practical experience, mentorship, and portfolio building).
* **Industry Mentor:** Working professional looking to guide next-gen talent efficiently. (Need: A streamlined platform to provide insights and feedback).
* **Recruiter:** Looking for job-ready candidates. (Need: Transparent, verified evidence of practical skills and soft skills over text-based resumes).



### 2. System Design & Architecture

FutureForge AI operates on a decoupled, modular architecture leveraging an AI Orchestration layer.

* Frontend Layer: React + Tailwind CSS
* Backend API Layer: FastAPI Service Engine
* Database Layer: PostgreSQL hosted via Supabase
* AI Core Layer: Gemini API Prompt Engine

### 3. Implementation (MVP Modules)

The core platform is built into four distinct operational modules:

#### 📋 Module 1: Discover Me (Assessment Engine)

* **Behavioral Assessment:** Evaluates Leadership, Communication, Creativity, Adaptability, Teamwork, and Problem Solving.
* **Interests & Hobbies Analysis:** AI maps casual activities to workplace strengths (Example: Chess maps to Strategic Thinking, Sports maps to Teamwork, Photography maps to Visual Creativity).
* **Output Profile:** Generates a structured personality type (Example: "Future Builder"), listing key strengths and emerging recommended career paths like AI Product Manager or Innovation Consultant.

#### 📈 Module 2: Grow Me (AI Career Coach)

* **Skill Gap Analysis:** Compares current user metrics against targeted future roles.
* **Roadmap Generation:** Outputs a monthly actionable learning roadmap (Example: Month 1: Product Thinking, Month 2: AI Fundamentals, Month 3: Industry Project).

#### ⚔️ Module 3: Challenge Me (Project & Peer Lab)

* **Industry Projects:** Replaces passive video consumption with hands-on development by tackling challenges like building an AI Resume Analyzer.
* **Team & Mentor Matching:** Forms optimized peer teams of 4 alongside an industry professional to mimic real agile work environments.

#### 🎓 Module 4: Showcase Me (The Employability Passport)

* **Dynamic Portfolio:** Replaces the text resume with an Employability Passport displaying real-time data visualizers for verified metrics (Example: Leadership: 82%, Problem Solving: 91%).

---

## 🛠️ Technology Stack

* Frontend: React, Tailwind CSS (High-performance single-page interface)
* Backend: FastAPI (High-speed, asynchronous Python REST API handling)
* Database: Supabase / PostgreSQL (Relational data persistence and profile tracking)
* AI Layer: Gemini API (Core intelligence for behavior-to-strength mapping and roadmap curation)
* Authentication: Supabase Auth (Secure, token-based user login sessions)

---

## 🚀 Testing, Installation & Setup

### 4. Testing & Validation (SDLC Phase 4)

* **API Testing:** Backend endpoints validated using FastAPI's built-in Interactive Swagger documentation tools.
* **Prompt Validation:** AI output schemas enforced using strict JSON formatting to ensure reliability and clean application parsing.

### 5. Deployment & Execution Guide (SDLC Phase 5)

Follow these exact steps to clone and spin up the ecosystem locally from this repository:

#### Prerequisites

* Python 3.10+
* Node.js v18+
* Supabase Account & Gemini API Key

#### Project Cloning

Run the following command in your terminal:
git clone [https://github.com/alexusesgithub/Team7-ngpit.git](https://www.google.com/search?q=https://github.com/alexusesgithub/Team7-ngpit.git)
cd Team7-ngpit

#### Backend Setup (FastAPI)

1. Navigate to the backend directory:
cd backend
2. Create and activate an isolated Python virtual environment:
python -m venv venv
source venv/bin/activate
(Note: On Windows terminal use: venv\Scripts\activate)
3. Install the project-required application modules:
pip install fastapi uvicorn google-generativeai pydantic python-dotenv
4. Create a configuration environment file named .env in the root backend directory:
GEMINI_API_KEY=your_gemini_api_key_here
SUPABASE_URL=your_supabase_project_url
SUPABASE_KEY=your_supabase_anon_public_key
5. Boot up the local web service engine:
uvicorn main:app --reload

#### Frontend Setup (React)

1. Open a new terminal instance and navigate to the frontend user-interface directory:
cd frontend
2. Build and install the node modular dependencies:
npm install
3. Initialize the development build environment script:
npm run dev

---

## 🔮 6. Maintenance & Future Roadmap (SDLC Phase 6)

* **Web3 Integration:** Transitioning the Employability Passport into non-fungible decentralized badges to prevent educational credential fraud.
* **Real-time Job Market Scraper:** Integrating live global recruitment data streams to adapt the AI skill-gap analyzer dynamically to changing industrial market trends.


BUDGET ALLOCATION:
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│              FUTUREFORGE AI - PROJECT BUDGET                │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌───────────────────────────────────────────────────────┐ │
│  │                   DEVELOPMENT COSTS                    │ │
│  ├───────────────────────────────────────────────────────┤ │
│  │  Discover Me Module      ₹17,000                      │ │
│  │  Grow Me Module          ₹28,000                      │ │
│  │  Challenge Me Module     ₹20,000                      │ │
│  │  Showcase Me Module      ₹20,000                      │ │
│  │  Infrastructure & Setup  ₹ 3,330                      │ │
│  │  Testing & QA            ₹ 3,000                      │ │
│  │  Marketing & Launch      ₹ 2,000                      │ │
│  │  Miscellaneous           ₹ 3,170                      │ │
│  ├───────────────────────────────────────────────────────┤ │
│  │  TOTAL BASE COST         ₹96,500                      │ │
│  └───────────────────────────────────────────────────────┘ │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐ │
│  │              EXTRA FUNDS (BUFFER + CONTINGENCY)        │ │
│  ├───────────────────────────────────────────────────────┤ │
│  │  Buffer (20% for emergencies)    ₹19,300              │ │
│  │  Contingency (15% for surprises) ₹15,000              │ │
│  ├───────────────────────────────────────────────────────┤ │
│  │  TOTAL EXTRA FUNDS               ₹34,300              │ │
│  └───────────────────────────────────────────────────────┘ │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐ │
│  │                      GRAND TOTAL                       │ │
│  ├───────────────────────────────────────────────────────┤ │
│  │                                                       │ │
│  │      Base Cost         ₹96,500                        │ │
│  │      Extra Funds       ₹34,300                        │ │
│  │      ─────────────────────────                        │ │
│  │      TOTAL             ₹1,30,800                      │ │
│  │                                                       │ │
│  │      Rounded           ₹1,31,000                      │ │
│  │      (~$1,600 USD)                                    │ │
│  │                                                       │ │
│  └───────────────────────────────────────────────────────┘ │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐ │
│  │                     MONTHLY COSTS                      │ │
│  ├───────────────────────────────────────────────────────┤ │
│  │  Hosting (Vercel, Render, Supabase)    ₹0             │ │
│  │  Gemini API (Free Tier)                ₹0             │ │
│  │  Authentication (Firebase)             ₹0             │ │
│  │  ─────────────────────────                           │ │
│  │  TOTAL MONTHLY COST                    ₹0             │ │
│  └───────────────────────────────────────────────────────┘ │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐ │
│  │                     WHAT BUFFER COVERS                 │ │
│  ├───────────────────────────────────────────────────────┤ │
│  │  • If Gemini API usage exceeds free limit             │ │
│  │  • If development takes extra time                    │ │
│  │  • If unexpected bugs need fixing                     │ │
│  │  • If additional tools are required                   │ │
│  │  • If marketing needs a paid boost                    │ │
│  └───────────────────────────────────────────────────────┘ │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐ │
│  │                      VERDICT                           │ │
│  ├───────────────────────────────────────────────────────┤ │
│  │                                                       │ │
│  │     ✅ BUDGET APPROVED                                │ │
│  │                                                       │ │
│  │     Reason: ₹1,31,000 is reasonable for an           │ │
│  │     AI-powered platform with 4 complete modules.     │ │
│  │     20% buffer provides safety for emergencies.      │ │
│  │     No monthly costs keep it sustainable.            │ │
│  │                                                       │ │
│  └───────────────────────────────────────────────────────┘ │
│                                                             │
└─────────────────────────────────────────────────────────────┘
