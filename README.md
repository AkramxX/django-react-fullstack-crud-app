# Django-React Fullstack CRUD App

This is a fullstack web application built using Django for the backend and React for the frontend. The app demonstrates a CRUD (Create, Read, Update, Delete) functionality for managing football clubs.

## Features

- **Frontend**: Built with React and Material-UI for a modern and responsive user interface.
- **Backend**: Powered by Django REST Framework to handle API requests and database operations.
- **CRUD Operations**:
  - View all football clubs.
  - Create a new football club.
  - Edit existing football club details.
  - Delete a football club.
- **Filtering**: Filter football clubs by country (e.g., England, France, Netherlands).

## Project Structure

### Backend

- Located in the `backend/` directory.
- Key files:
  - `manage.py`: Django's command-line utility.
  - `api/`: Contains models, serializers, views, and URLs for the API.

### Frontend

- Located in the `frontend/` directory.
- Key files:
  - `src/components/`: Contains React components for the app.
  - `Menu.jsx`: Navigation menu with filtering functionality.
  - `Home.jsx`: Displays the list of football clubs.

## Installation

### Prerequisites

- Python 3.8+
- Node.js 16+
- npm or yarn

### Backend Setup

1. Navigate to the `backend/` directory:
   ```bash
   cd backend
   ```
2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Run migrations:
   ```bash
   python manage.py migrate
   ```
5. Start the development server:
   ```bash
   python manage.py runserver
   ```

### Frontend Setup

1. Navigate to the `frontend/` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

- Open the app in your browser at `http://localhost:5173` (frontend) and `http://127.0.0.1:8000` (backend).
- Use the navigation menu to filter football clubs by country or create a new club.

## Technologies Used

- **Frontend**: React, Material-UI, Vite
- **Backend**: Django, Django REST Framework
- **Database**: SQLite
