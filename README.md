# Demo Bank

## Description
This is a web application developed using React for the client-side and Django for the server-side.

## Prerequisites
- Node.js and npm installed on your machine
- Python and pip installed on your machine
- Docker installed on your machine

## Running the Application

### Method 1: Manual Setup
1. **Client Setup:**
   - Navigate to the `client` directory:
     ```bash
     cd client
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the client:
     ```bash
     npm start
     ```
   The client will run on http://localhost:3000 by default.

2. **Server Setup:**
   - Navigate to the `server` directory:
     ```bash
     cd server
     ```
   - Create a virtual environment (optional but recommended):
     ```bash
     python3 -m venv env
     ```
   - Activate the virtual environment:
     ```bash
     source env/bin/activate
     ```
   - Install Python dependencies:
     ```bash
     pip install -r requirements.txt
     ```
   - Run migrations:
     ```bash
     python manage.py makemigrations
     python manage.py migrate
     ```
   - Start the server:
     ```bash
     python manage.py runserver
     ```
   The server will run on http://localhost:8000 by default.

### Method 2: Docker Setup
1. **Build and Run Docker Containers:**
   - Ensure you are in the project root directory.
   - Build the Docker images:
     ```bash
     docker-compose build
     ```
   - Start the Docker containers:
     ```bash
     docker-compose up
     ```
   The client will run on http://localhost:3000 and the server will run on http://localhost:8000.

## Accessing the Application
- Once the client and server are running, you can access the application by opening a web browser and navigating to http://localhost:3000.

## Additional Notes
- Make sure to replace any placeholder URLs or configurations with your actual project details.
- For more detailed instructions or troubleshooting, refer to the documentation in the `client` and `server` directories.

