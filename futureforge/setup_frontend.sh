#!/bin/bash

# Frontend Setup Script for macOS/Linux

echo "===================================="
echo "Module 3: Challenge Me - Frontend Setup"
echo "===================================="

cd futureforge

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "Installing npm dependencies..."
    npm install
else
    echo "Dependencies already installed."
fi

# Check if .env exists
if [ ! -f ".env" ]; then
    echo "Creating .env file from .env.example..."
    cp .env.example .env
    echo ".env file created! Update it with your settings if needed."
else
    echo ".env file already exists."
fi

echo ""
echo "===================================="
echo "Frontend setup complete!"
echo "===================================="
echo ""
echo "Starting Vite development server..."
echo "Frontend will be available at: http://localhost:5173"
echo ""
npm run dev
