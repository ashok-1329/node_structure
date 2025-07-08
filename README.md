# Node.js MySQL API Project

A structured Node.js REST API using:
- Express
- MySQL (promise-based connection)
- Auto table/column creation on startup
- MVC folder structure
- Nodemon for development

---

## 🚀 Features

✅ Clean project structure (controllers, models, routes, config)  
✅ Auto-create `users` table if missing on project start  
✅ Auto-add missing columns defined in config  
✅ JSON API ready for Postman testing  
✅ Easily extendable with additional endpoints

---

## 📁 Project Structure

```
node-mysql-structure/
├── config/
│   ├── db.js
│   └── initializeDB.js
├── controllers/
│   └── userController.js
├── models/
│   └── userModel.js
├── routes/
│   ├── index.js
│   └── userRoutes.js
├── utils/
│   └── ErrorResponse.js
├── middleware/
│   └── errorHandler.js
├── .env
├── index.js
└── package.json
```

---

## ⚙️ Setup Instructions

1️⃣ **Clone the repository**
```bash
git clone <repository_url>
cd node-mysql-structure
```

2️⃣ **Install dependencies**
```bash
npm install
```

3️⃣ **Configure environment variables**

Create a `.env` file:
```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=testdb
```

4️⃣ **Start the server**
```bash
npm run dev
```

Your server will start on:
```
http://localhost:3000
```

---

## 🗂️ API Endpoints

Base URL:
```
http://localhost:3000/api
```

### 1️⃣ Get all users
**GET** `/users`

**Example:**
```bash
curl http://localhost:3000/api/users
```

---

### 2️⃣ Get user by ID
**GET** `/users/:id`

**Example:**
```bash
curl http://localhost:3000/api/users/1
```

---

### 3️⃣ Create a new user
**POST** `/users`

**Body (JSON):**
```json
{
  "name": "Alice",
  "email": "alice@example.com",
  "phone": "1234567890"
}
```

**Example using curl:**
```bash
curl -X POST http://localhost:3000/api/users \
-H "Content-Type: application/json" \
-d '{"name":"Alice","email":"alice@example.com","phone":"1234567890"}'
```

---

## 🛠️ Adding a New Column

To add a new column:
1. Add it to the `columnsToCheck` array in `config/initializeDB.js`:
```js
{ name: 'address', definition: 'TEXT NULL AFTER phone' }
```
2. Restart your server (`npm run dev`), and the column will be auto-added if it doesn't exist.

---

## 🧪 Testing with Postman

✅ Import these endpoints into Postman:
- GET `http://localhost:3000/api/users`
- GET `http://localhost:3000/api/users/1`
- POST `http://localhost:3000/api/users` with JSON body

✅ Ensure `Content-Type: application/json` is set for POST requests.

---

## ✅ To Do / Extend

- Add user update and delete endpoints
- Add pagination for user listing
- Add JWT-based authentication
- Add request validation using Joi or express-validator
- Dockerize for containerized deployment
- Add unit & integration tests

---

## 🤝 Contributing

Pull requests and improvements are welcome to keep the structure clean and scalable.

---

## 📄 License

MIT License
