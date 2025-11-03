#!/bin/bash

echo "🩸 Blood Donor Management PWA Setup"
echo "=================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check if PostgreSQL is installed
if ! command -v psql &> /dev/null; then
    echo "❌ PostgreSQL is not installed. Please install PostgreSQL first."
    exit 1
fi

echo "✅ Prerequisites check passed"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Check if .env.local exists
if [ ! -f .env.local ]; then
    echo "⚠️  Please configure your .env.local file with database credentials"
    echo "   Copy the example and update with your PostgreSQL details"
else
    echo "✅ Environment file found"
fi

echo ""
echo "🚀 Setup complete! Next steps:"
echo "1. Configure your .env.local file with database credentials"
echo "2. Run: psql -U postgres -f scripts/init-db.sql"
echo "3. Run: npm run dev"
echo "4. Visit http://localhost:3000"
echo ""
echo "📱 To install as PWA: Open in browser and look for 'Add to Home Screen'"