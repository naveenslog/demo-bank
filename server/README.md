# Demo Bank - Server

## Description

This is the server-side codebase for the [Project Name] project. It is built using Django, a high-level Python web framework, and provides the backend functionality for the application.

## Prerequisites

Before running the server, ensure you have the following installed on your machine:

- Python (version X.X)
- pip (Python package manager)
- virtualenv (optional, but recommended for managing Python dependencies)

## Installation

### Setting up Virtual Environment (Optional but recommended)

1. Create a virtual environment for the project:

    ```bash
    virtualenv venv
    ```

2. Activate the virtual environment:

    On Windows:
    ```bash
    venv\Scripts\activate
    ```

    On macOS and Linux:
    ```bash
    source venv/bin/activate
    ```

### Installing Dependencies

Install the required Python packages using pip:

```bash
pip install -r requirements.txt
```

### Database Setup
Run migrations to create the necessary database schema:

```bash
python manage.py makemigrations
python manage.py migrate
```

### Running the Server
Start the Django development server:

```bash
python manage.py runserver
```
By default, the server will run on http://localhost:8000.