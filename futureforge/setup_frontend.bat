@echo off
REM Frontend Setup Script for Windows

echo ====================================
echo Module 3: Challenge Me - Frontend Setup
echo ====================================

cd futureforge

REM Check if node_modules exists
if not exist "node_modules" (
    echo Installing npm dependencies...
    call npm install
) else (
    echo Dependencies already installed.
)

REM Check if .env exists
if not exist ".env" (
    echo Creating .env file from .env.example...
    copy .env.example .env
    echo .env file created! Update it with your settings if needed.
) else (
    echo .env file already exists.
)

echo.
echo ====================================
echo Frontend setup complete!
echo ====================================
echo.
echo Starting Vite development server...
echo Frontend will be available at: http://localhost:5173
echo.
call npm run dev

pause
