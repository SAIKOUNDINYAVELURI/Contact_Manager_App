
# Contact Manager App

A full-stack web application for managing contacts with user authentication and CRUD operations.

## Project Structure

### Backend
- **server.js** - Express server entry point
- **constants.js** - Configuration constants
- **config/dbConnection.js** - Database connection setup
- **controllers/** - Business logic (contactController, userController)
- **models/** - Database schemas (contactModel, userModel)
- **routes/** - API endpoints (contactRoutes, userRoutes)
- **middleware/** - Auth & error handling (validateTokenHandler, errorHandler)

### Frontend
- **src/main.jsx** - React entry point
- **src/App.jsx** - Main component
- **pages/** - Page components (Login, Register, Dashboard, Profile, NotFound)
- **components/** - Reusable UI components (Button, InputField, Modal, ContactCard, ProtectedRoute)
- **context/AuthContext.jsx** - Authentication state management
- **services/** - API calls (authService, contactService)
- **api/axios.js** - Axios instance configuration

## Installation

```bash
# Backend
cd backend
npm install

# Frontend
cd contact-app
npm install
```

## Usage

```bash
# Start backend
npm start

# Start frontend
npm run dev
```

## Environment Variables

Configure `.env` in the backend folder with database and API settings.
