# 🎉 College Event Database

A backend system for managing college events — built with **Node.js**, **Express**, and **MongoDB**.  
This project allows colleges to store, update, and view details about various events organized within the institution.

---

## 🚀 Features

- 🗓️ Add, update, delete, and view events
- 👥 Manage event organizers and participants
- 📅 Store event details (name, date, location, description)
- 🔍 Search events by category or name
- 🧾 RESTful API endpoints for event management
- 🧠 Uses MongoDB for persistent data storage

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-------------|----------|
| **Node.js** | Runtime environment |
| **Express.js** | Backend framework |
| **MongoDB** | Database |
| **Mongoose** | ODM (Object Data Modeling) for MongoDB |
| **Postman** | API testing tool |

---

## 📂 Folder Structure
college-event-database/
├── src/
│ ├── models/
│ ├── routes/
│ ├── controllers/
│ └── config/
├── package.json
├── README.md
└── server.js
## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/college-event-database.git
cd college-event-database
2. Install dependencies
npm install
3. Set up environment variables

Create a .env file in the project root and add:

MONGO_URI=your_mongodb_connection_string
PORT=5000

4. Start the server
npm start

5. Visit in your browser
http://localhost:5000

🧪 Example API Endpoints
Method	Endpoint	Description
GET	/api/events	Get all events
POST	/api/events	Add a new event
GET	/api/events/:id	Get details of a single event
PUT	/api/events/:id	Update event
DELETE	/api/events/:id	Delete event
