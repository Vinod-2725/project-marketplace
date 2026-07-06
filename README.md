# 🚀 Project Marketplace

A full-stack web application that enables students to discover research projects, apply to them, and allows professors or project creators to manage applications efficiently.

🔗 **Live Demo:** https://project-marketplace-frontend-hazel.vercel.app/

🔗 **Backend API:** https://project-marketplace-backend-d3dt.onrender.com/

---

## 📖 Overview

Project Marketplace is a centralized platform where users can:

- Browse available projects
- Search projects by title
- Create and manage research projects
- Apply to projects
- View submitted applications
- Manage personal profile

The application uses JWT-based authentication to provide secure access to protected routes.

---

## ✨ Features

### 👤 Authentication
- User Signup
- User Login
- JWT Authentication
- Protected Routes
- Logout

### 📚 Projects
- Create Project
- View All Projects
- Search Projects
- View My Projects
- Apply to Projects

### 📄 Applications
- View Applied Projects
- View Applicants for Created Projects

### 👤 Profile
- View User Information
- Update Profile Details

---

## 🛠 Tech Stack

### Frontend
- React
- TypeScript
- Tailwind CSS
- React Router
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt.js

### Deployment
- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

---

## 📂 Project Structure

```
project-marketplace
│
├── backend
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
└── react-app
    ├── src
    │   ├── api
    │   ├── components
    │   ├── pages
    │   └── assets
    ├── package.json
    └── vite.config.ts
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/Vinod-2725/project-marketplace.git
```

Move into the project directory

```bash
cd project-marketplace
```

---

## Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

Run backend

```bash
npm start
```

---

## Frontend Setup

```bash
cd react-app
npm install
npm run dev
```

---

## 🔒 Authentication

The application uses:

- JSON Web Tokens (JWT)
- Password hashing using bcrypt
- Protected API routes
- Persistent login using Local Storage




## 👨‍💻 Author

**Vinod Chandra Kumar**

GitHub:
https://github.com/Vinod-2725

---

## 📄 License

This project is intended for educational and portfolio purposes.