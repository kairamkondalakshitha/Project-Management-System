# 🚀 Project Management System

A full-stack **Project Management System** developed using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**. This application helps teams manage projects and tasks efficiently with secure authentication, role-based access control, task tracking, and a responsive user interface.

---

## 📌 Features

### 🔐 Authentication
- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Role-Based Authorization (Admin, Manager, Employee)

### 📁 Project Management
- Create Project
- View Projects
- Update Project
- Delete Project

### ✅ Task Management
- Create Task
- View Tasks
- Update Task
- Delete Task
- Task Progress Tracking
- Task Priority
- Task Status Management

### 📊 Dashboard
- Dashboard Overview
- Task Summary
- Project Summary

### ⚡ Additional Features
- Swagger API Documentation
- File Upload Support
- Email Notifications
- Activity Tracking
- Docker Support
- Responsive React Frontend

---

# 🛠 Tech Stack

## Frontend
- React.js
- Vite
- React Router DOM
- Axios
- Tailwind CSS

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Bcrypt.js
- Socket.IO
- Nodemailer
- Multer
- Swagger

---

# 📂 Folder Structure

```
Project-Management-System
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── socket
│   ├── uploads
│   ├── utils
│   ├── validations
│   ├── server.js
│   └── package.json
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── Dockerfile
├── docker-compose.yml
├── DATABASE_SCHEMA.md
├── README.md
└── ER diagram.png
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/kairamkondalakshitha/Project-Management-System.git
```

```bash
cd Project-Management-System
```

---

## Backend Setup

```bash
cd backend
npm install
npm start
```

Create a `.env` file with:

```
PORT=5000
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
JWT_SECRET=YOUR_SECRET_KEY
EMAIL_USER=YOUR_EMAIL
EMAIL_PASS=YOUR_APP_PASSWORD
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

Backend runs on:

```
http://localhost:5000
```

---

# 📚 API Endpoints

## Authentication
- POST `/api/auth/register`
- POST `/api/auth/login`
- PUT `/api/auth/profile`
- PUT `/api/auth/password`

## Projects
- GET `/api/projects`
- POST `/api/projects`
- PUT `/api/projects/:id`
- DELETE `/api/projects/:id`

## Tasks
- GET `/api/tasks`
- POST `/api/tasks`
- PUT `/api/tasks/:id`
- DELETE `/api/tasks/:id`
- PUT `/api/tasks/:id/progress`

---

# 🔐 Authentication

JWT tokens are used to secure protected routes.

Include the token in request headers:

```
Authorization: Bearer <your_token>
```

---

# 📖 API Documentation

Swagger Documentation:

```
http://localhost:5000/api-docs
```

---

# 🐳 Docker

Run using Docker:

```bash
docker-compose up --build
```

---

# 📸 Screenshots

Include screenshots of:
- Home Page
- Login Page
- Register Page
- Dashboard
- Tasks Page
- Swagger API Documentation

---

# 👩‍💻 Author

**Kairamkonda Lakshitha**

GitHub: https://github.com/kairamkondalakshitha

---

# 🚀 Future Enhancements

- Real-time Notifications
- Team Collaboration
- Calendar Integration
- Task Analytics
- Dark Mode
- Mobile App Support

