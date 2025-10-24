Here’s a complete and professional README.md file for the first project — the Task Management API — based on the documentation you provided:

---

# 📝 Task Management API

A RESTful API built with Node.js and Express.js to manage tasks with full CRUD functionality. This mini project uses in-memory storage and demonstrates core backend development principles including validation, error handling, and API testing.

## 🚀 Project Overview

This API allows users to create, read, update, and delete tasks. Each task includes metadata such as title, description, status, priority, due date, and tags. The project is designed to help developers master REST architecture, HTTP protocols, and Express.js fundamentals.

## 🧰 Tech Stack

- **Backend:** Node.js 18+, Express.js 4.x
- **Storage:** In-memory JavaScript Array
- **Testing:** Postman (with automated test scripts)
- **Version Control:** Git & GitHub

## 📦 Task Schema

```json
{
  "taskId": "uuid-v4",
  "title": "string (required, max 100)",
  "description": "string (optional, max 500)",
  "status": "enum [pending, in-progress, completed]",
  "priority": "enum [low, medium, high]",
  "dueDate": "ISO 8601 datetime (optional)",
  "tags": ["string"],
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

## 📡 API Endpoints

| Method | Endpoint                | Description                          |
|--------|-------------------------|--------------------------------------|
| GET    | `/api/tasks`            | Get all tasks (with filters & sort) |
| GET    | `/api/tasks/:taskId`    | Get a single task by ID              |
| POST   | `/api/tasks`            | Create a new task                    |
| PUT    | `/api/tasks/:taskId`    | Replace an existing task             |
| PATCH  | `/api/tasks/:taskId`    | Partially update a task              |
| DELETE | `/api/tasks/:taskId`    | Delete a task                        |

## ✅ Implementation Guidelines

- Use proper HTTP status codes: `200`, `201`, `400`, `404`, `500`
- Validate inputs and return meaningful error messages
- Use `morgan` for logging requests
- Handle edge cases (e.g., duplicates, invalid data)
- Generate unique IDs using `uuid`

## 📁 Project Structure

```
src/
├── controllers/
├── routes/
├── models/
├── utils/
├── app.js
├── server.js
```

## 🧪 Postman Testing

- Includes a Postman collection with environment variables:
  - `baseURL`, `taskId`, etc.
- Sample test script:
  ```js
  pm.environment.set("taskId", pm.response.json().taskId);
  pm.test("Status is 201", () => {
    pm.response.to.have.status(201);
  });
  ```

## 📄 Deliverables

- ✅ GitHub Repository with organized codebase
- ✅ README.md with setup and API documentation
- ✅ Postman Collection with test cases
- ✅ Sample Data JSON file (15+ tasks)
- ✅ `.gitignore` excluding `node_modules`

## 🛠 Setup Instructions

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/task-management-api.git
   cd task-management-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the server:
   ```bash
   npm start
   ```

4. Import Postman collection and start testing!
