# Project Management System (Backend)

## Overview

This is a backend Project Management System developed using Node.js, Express.js, and MongoDB. It provides secure REST APIs for managing users, projects, tasks, comments, file uploads, dashboards, and activities.

## Features

- User Registration and Login
- JWT Authentication
- Role-Based Authorization
- Project Management
- Task Management
- Comments
- File Upload
- Dashboard APIs
- Activity Tracking
- Socket.IO Integration
- Swagger API Documentation
- Error Handling
- Input Validation

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- Multer
- Socket.IO
- Swagger UI

## Installation

Clone the repository:

```bash
git clone https://github.com/kairamkondalakshitha/Project-Management-System.git
```

Install dependencies:

```bash
npm install
```

Create a `.env` file and add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
EMAIL_USER=your_email
EMAIL_PASS=your_password
```

Run the server:

```bash
npm start
```

Server URL:

```
http://localhost:5000
```

Swagger Documentation:

```
http://localhost:5000/api-docs
```

## API Modules

- Authentication
- Users
- Projects
- Tasks
- Comments
- File Uploads
- Dashboard
- Activities

## Folder Structure

```
backend/
├── config/
├── controllers/
├── docs/
├── middleware/
├── models/
├── routes/
├── socket/
├── uploads/
├── utils/
├── validations/
├── server.js
├── package.json
└── README.md
```
