#!/bin/bash

# Setup script for IFRS Backend Template
echo "🚀 Setting up IFRS Backend..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Check for outdated packages and offer update
echo "🔍 Checking for outdated dependencies..."
npm outdated

echo "✅ Setup complete!"
echo ""
echo "📚 Quick Start:"
echo "   npm run dev     # Start development server"
echo "   npm run build   # Build for production"
echo "   npm start       # Run production server"
echo ""
echo "🔄 To update dependencies to latest versions:"
echo "   npm run update:latest"