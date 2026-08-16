#!/bin/bash

# Global Services SARL - Development Scripts

# Start development server
dev() {
  npm run dev
}

# Build for production
build() {
  npm run build
}

# Start production server
start() {
  npm start
}

# Lint code
lint() {
  npm run lint
}

# Install dependencies
install() {
  npm install
}

# Deploy to Vercel
deploy() {
  npm run build && vercel deploy --prod
}

# Clean build artifacts
clean() {
  rm -rf .next node_modules
}

# Show help
help() {
  echo "Global Services SARL - Available Commands:"
  echo "  dev      - Start development server"
  echo "  build    - Build for production"
  echo "  start    - Start production server"
  echo "  lint     - Run linter"
  echo "  install  - Install dependencies"
  echo "  deploy   - Deploy to Vercel"
  echo "  clean    - Remove build artifacts"
  echo "  help     - Show this help message"
}

# Execute command
"$@"
