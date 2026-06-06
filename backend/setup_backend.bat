@echo off
REM Backend Setup Script for Windows

echo ====================================
echo Module 3: Challenge Me - Backend Setup
echo ====================================

cd backend

REM Check if venv exists
if not exist "venv" (
    echo Creating Python virtual environment...
    python -m venv venv
    echo Virtual environment created!
) else (
    echo Virtual environment already exists.
)

REM Activate venv
echo Activating virtual environment...
call venv\Scripts\activate.bat

REM Check if .env exists
if not exist ".env" (
    echo Creating .env file from .env.example...
    copy .env.example .env
    echo .env file created! Update it with your settings if needed.
) else (
    echo .env file already exists.
)

REM Install requirements
echo Installing dependencies...
pip install -r requirements.txt

echo.
echo ====================================
echo Backend setup complete!
echo ====================================
echo.
echo Starting FastAPI server...
echo API will be available at: http://localhost:8000
echo Swagger UI: http://localhost:8000/docs
echo.
uvicorn main:app --reload --host 0.0.0.0 --port 8000

pause
