#!/bin/bash

# Backend Setup Script for macOS/Linux

echo "===================================="
echo "Module 3: Challenge Me - Backend Setup"
echo "===================================="

cd backend

# Check if venv exists
if [ ! -d "venv" ]; then
    echo "Creating Python virtual environment..."
    python3 -m venv venv
    echo "Virtual environment created!"
else
    echo "Virtual environment already exists."
fi

# Activate venv
echo "Activating virtual environment..."
source venv/bin/activate

# Check if .env exists
if [ ! -f ".env" ]; then
    echo "Creating .env file from .env.example..."
    cp .env.example .env
    echo ".env file created! Update it with your settings if needed."
else
    echo ".env file already exists."
fi

# Install requirements
echo "Installing dependencies..."
pip install -r requirements.txt

echo ""
echo "===================================="
echo "Backend setup complete!"
echo "===================================="
echo ""
echo "Starting FastAPI server..."
echo "API will be available at: http://localhost:8000"
echo "Swagger UI: http://localhost:8000/docs"
echo ""
uvicorn main:app --reload --host 0.0.0.0 --port 8000
