#!/bin/bash

# Get the repository name from the current directory
REPO_NAME=$(basename "$(pwd)")

# Convert kebab-case to Title Case with spaces for README
TITLE_CASE_NAME=$(echo "$REPO_NAME" | sed 's/-/ /g' | awk '{for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1)) substr($i,2)} 1')

echo "🚀 Setting up $TITLE_CASE_NAME..."

# Replace template references in package.json and package-lock.json
echo "📝 Updating project configuration..."
sed -i "s/typescript-express-template/$REPO_NAME/g" package.json
sed -i "s/typescript-express-template/$REPO_NAME/g" package-lock.json

# Remove template-specific files and folders
echo "🧹 Cleaning up template files..."
rm -rf .github

# Create a simple README with just the project name
echo "📝 Creating project README..."
echo "# $TITLE_CASE_NAME" > README.md
echo "" >> README.md
echo "This project was created from the [TypeScript Express Template](https://github.com/your-username/typescript-express-template)." >> README.md

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

# Delete the setup script itself
echo "🗑️ Cleaning up setup script..."
rm -- "$0"