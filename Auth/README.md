# 🔐 Auth Module

This project implements a **complete authentication system** using cookies, JWT, bcrypt, and MongoDB.

All features were planned and tracked using **GitHub Issues** to follow a real development workflow.

### 📌 Head Issue
- 🔗 Auth Module Tracking: [Issue #4](https://github.com/resel143/reshul-backend/issues/4)

---

### ✅ Features & Sub-Issues

#### Backend (Core Auth)
- [x] Set up Mongoose for database storage  
  → [#11](https://github.com/resel143/reshul-backend/issues/11)

- [x] Password encryption & verification using bcrypt  
  → [#6](https://github.com/resel143/reshul-backend/issues/6)

- [x] JWT authentication  
  → [#7](https://github.com/resel143/reshul-backend/issues/7)

- [x] Cookies for storing JWT  
  → [#8](https://github.com/resel143/reshul-backend/issues/8)

- [x] Setup create user flow (signup)  
  → [#16](https://github.com/resel143/reshul-backend/issues/16)

- [x] Setup login flow  
  → [#13](https://github.com/resel143/reshul-backend/issues/13)

- [x] Setup JWT after login  
  → [#19](https://github.com/resel143/reshul-backend/issues/19)

- [x] Logout flow (clear JWT cookie)  
  → [#20](https://github.com/resel143/reshul-backend/issues/20)

- [x] Complete end-to-end authentication flow  
  → [#23](https://github.com/resel143/reshul-backend/issues/23)

---

#### Frontend (Basic UI)
- [x] Create user (signup) frontend using Tailwind CSS  
  → [#12](https://github.com/resel143/reshul-backend/issues/12)

- [x] Login user frontend using Tailwind CSS  
  → [#15](https://github.com/resel143/reshul-backend/issues/15)

---

#### Demo
- [x] Demo of complete auth flow  
  → [#25](https://github.com/resel143/reshul-backend/issues/25)

---

## 🧠 Concepts Learned
- Secure password storage with bcrypt
- Stateless authentication using JWT
- Cookie-based authentication
- Auth flow design (signup → login → protected routes → logout)
- MongoDB & Mongoose integration
- Structuring a project using GitHub Issues

---

## 🛠 Tech Stack
- Node.js
- Express.js
- MongoDB & Mongoose
- bcrypt
- JSON Web Tokens (JWT)
- Cookie-parser
- Tailwind CSS (basic frontend)

---

## 📈 Workflow
This project follows a **real-world development approach**:
- Features planned as GitHub Issues
- One issue per feature
- Head issue used to track module progress
- Issues closed via implementation

---

## 🚀 Future Improvements
- Token expiration & refresh tokens
- Role-based authentication
- Protected routes middleware
- Improved frontend validation
