# 🔐 Login_App - Full Stack Login System

A full-stack user authentication system built with **React (frontend)** and **FastAPI (backend)**, connected to **MongoDB** for secure user data storage.  
This project follows modern web dev practices using `bcrypt` password hashing, CORS, and a clear modular structure.

---

## 📁 Project Structure

Login_App/
├── client/ # React frontend
│ ├── src/
│ ├── public/
│ └── package.json
│
├── server/ # FastAPI backend
│ ├── main.py
│ ├── db.py
│ ├── auth.py
│ ├── model/
│ │ ├── login.py
│ │ └── register.py
│ └── requirements.txt
│
├── README.md # You're reading this file
└── .gitignore

yaml
Copy
Edit

---

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js
- Python 3.10+
- MongoDB (Atlas)
- Git

---

## 🖥 Frontend Setup (React + Tailwind)

```bash
cd client
npm install
npm run dev
Runs on: http://localhost:5173/

Technologies:

React with TypeScript

Tailwind CSS

Axios for API requests

Bootstrap Icons

🧠 Backend Setup (FastAPI + MongoDB)
bash
Copy
Edit
cd server
pip install -r requirements.txt
uvicorn main:app --reload
Runs on: http://127.0.0.1:8000/

Technologies:

FastAPI

Motor (MongoDB async client)

Passlib + bcrypt for password hashing

Pydantic for validation

Email-validator for proper email format

✅ requirements.txt contents
txt
Copy
Edit
fastapi
uvicorn
motor
pydantic
python-multipart
email-validator
passlib[bcrypt]
🔐 Features
User Registration with:

Email validation

Password hashing (bcrypt)

Password Confirmation on frontend

MongoDB user data storage

Fully functional CORS communication between React and FastAPI

Error handling (like "email already exists")

🌐 API Endpoints
Method	Route	Description
POST	/register	Register new user
POST	/login	Login existing user
GET	/	Root route (test ping)

💡 Tips
If you're using a port other than 3000, update CORS in main.py:

py
Copy
Edit
allow_origins=["http://localhost:5173"]
Always hash passwords before saving:

py
Copy
Edit
from auth import hash_password
hashed_pw = hash_password(plain_pw)
🔧 Improvements You Can Add
JWT authentication

User sessions

Role-based access

Reset password via email

Deploy on Render (backend) + Netlify/Vercel (frontend)

👨‍💻 Author
Mahi M
📧 mahi.m.stack@gmail.com
🌐 github.com/mahi-m-stack

🪪 License
This project is open-source and available under the MIT License.

yaml
Copy
Edit

---

Would you also like:
- A `LICENSE` file?
- A `.gitignore` template for Python + Node?
- A sample `.env` usage setup?

Let me know and I’ll generate those too for you ⚙️








