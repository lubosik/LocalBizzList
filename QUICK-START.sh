#!/bin/bash

# LocalBizzList Quick Start Script
# This script helps you get the project running quickly

echo "================================================"
echo "   LocalBizzList - Quick Start Setup"
echo "================================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed!"
    echo "Please install Node.js 18+ from https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo ""

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed!"
    exit 1
fi

echo "✅ npm version: $(npm --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
echo "This may take a few minutes..."
echo ""

npm install

if [ $? -ne 0 ]; then
    echo ""
    echo "❌ Installation failed!"
    echo "Please check the error messages above and try again."
    exit 1
fi

echo ""
echo "✅ Dependencies installed successfully!"
echo ""

# Create placeholder images directory
echo "📁 Setting up images directory..."
mkdir -p public/images/businesses

# Create a simple placeholder image info file
cat > public/images/README.md << 'EOF'
# Images Directory

This directory should contain your project images.

## Required Images for Sample Content

Add these images to test the sample content:

1. `/images/plumber-work.jpg` - For plumber blog post
2. `/images/hvac-installation.jpg` - For HVAC blog post
3. `/images/hurricane-prep.jpg` - For hurricane prep blog post
4. `/images/how-to-hero.jpg` - For category hero
5. `/images/businesses/miami-plumbing-logo.png` - Miami Plumbing logo
6. `/images/businesses/hvac-logo.png` - HVAC business logo

## Placeholder Options

### Option 1: Use External URLs
Update MDX files to use:
```
featuredImage: "https://picsum.photos/800/600"
logo: "https://via.placeholder.com/200x150"
```

### Option 2: Download Free Images
Get free images from:
- https://unsplash.com/
- https://pexels.com/
- https://pixabay.com/

### Option 3: Generate Placeholders
Use placeholder services:
- https://picsum.photos/
- https://placehold.co/
- https://placeholder.com/
EOF

echo "✅ Images directory created!"
echo ""

echo "================================================"
echo "   Setup Complete! 🎉"
echo "================================================"
echo ""
echo "Next steps:"
echo ""
echo "1. Add images (see public/images/README.md for options)"
echo ""
echo "2. Start development server:"
echo "   npm run dev"
echo ""
echo "3. Open your browser:"
echo "   http://localhost:3000"
echo ""
echo "4. Read the documentation:"
echo "   - README.md - Project overview"
echo "   - SETUP-GUIDE.md - Detailed setup"
echo "   - QA-CHECKLIST.md - Quality verification"
echo "   - PROJECT-COMPLETE.md - Completion summary"
echo ""
echo "================================================"
echo "   Ready to build! Happy coding! 💻"
echo "================================================"