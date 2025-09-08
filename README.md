# Authentication and Authorization API

This project demonstrates **authentication and authorization** in a Node.js application using **JWT (JSON Web Tokens)** and middleware.

---

## Features

- User registration
- User login
- JWT-based authentication
- Role-based authorization
- Image upload (via Cloudinary)

---

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- bcrypt
- jsonwebtoken
- Cloudinary (for image uploads)

---

## Prerequisites

- Node.js v18+
- npm v9+
- MongoDB (local or remote)
- Cloudinary account (optional, for image uploads)

---

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/authentication_authorization.git
   cd authentication_authorization
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create a `.env` file in the root directory:**
   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/auth
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. The server should be running at `http://localhost:3000`.

---

## API Endpoints

### 1. User Registration

- **URL:** `/api/auth/register`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "username": "user1",
    "password": "password123",
    "email": "user1@example.com",
    "role": "user"
  }
  ```
- **Response Example:**
  ```json
  {
    "success": true,
    "message": "User registered successfully",
    "token": "<jwt_token>"
  }
  ```

### 2. User Login

- **URL:** `/api/auth/login`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "username": "user1",
    "password": "password123"
  }
  ```
- **Response Example:**
  ```json
  {
    "success": true,
    "message": "Login successful",
    "token": "<jwt_token>"
  }
  ```

### 3. Protected Routes

#### a. User Welcome

- **URL:** `/api/home/welcome`
- **Method:** `GET`
- **Headers:**
  ```http
  Authorization: Bearer <jwt_token>
  ```
- **Access:** Any authenticated user
- **Response Example:**
  ```json
  {
    "message": "Welcome, user!"
  }
  ```

#### b. Admin Welcome

- **URL:** `/api/admin/welcome`
- **Method:** `GET`
- **Headers:**
  ```http
  Authorization: Bearer <jwt_token>
  ```
- **Access:** Admin users only
- **Response Example:**
  ```json
  {
    "message": "Welcome, admin!"
  }
  ```

#### c. Upload Image

- **URL:** `/api/images/upload`
- **Method:** `POST`
- **Headers:**
  ```http
  Authorization: Bearer <jwt_token>
  ```
- **Body:** form-data with a file field named `image`
- **Response Example:**
  ```json
  {
    "success": true,
    "message": "Image uploaded successfully",
    "url": "https://res.cloudinary.com/.../image.jpg"
  }
  ```

---

## Folder Structure

```
.
├── controllers/
├── middleware/
├── models/
├── routes/
├── utils/
├── .env
├── package.json
└── server.js
```

---

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Make your changes
4. Commit your changes (`git commit -m "Add feature"`)
5. Push to the branch (`git push origin feature-name`)
6. Create a Pull Request

---

## License

This project is licensed under the MIT License. See the LICENSE file for details# Authentication and Authorization API

This project demonstrates **authentication and authorization** in a Node.js application using **JWT (JSON Web Tokens)** and middleware.

---

## Features

- User registration
- User login
- JWT-based authentication
- Role-based authorization
- Image upload (via Cloudinary)

---

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- bcrypt
- jsonwebtoken
- Cloudinary (for image uploads)

---

## Prerequisites

- Node.js v18+
- npm v9+
- MongoDB (local or remote)
- Cloudinary account (optional, for image uploads)

---

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/authentication_authorization.git
   cd authentication_authorization
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create a `.env` file in the root directory:**
   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/auth
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. The server should be running at `http://localhost:3000`.

---

## API Endpoints

### 1. User Registration

- **URL:** `/api/auth/register`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "username": "user1",
    "password": "password123",
    "email": "user1@example.com",
    "role": "user"
  }
  ```
- **Response Example:**
  ```json
  {
    "success": true,
    "message": "User registered successfully",
    "token": "<jwt_token>"
  }
  ```

### 2. User Login

- **URL:** `/api/auth/login`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "username": "user1",
    "password": "password123"
  }
  ```
- **Response Example:**
  ```json
  {
    "success": true,
    "message": "Login successful",
    "token": "<jwt_token>"
  }
  ```

### 3. Protected Routes

#### a. User Welcome

- **URL:** `/api/home/welcome`
- **Method:** `GET`
- **Headers:**
  ```http
  Authorization: Bearer <jwt_token>
  ```
- **Access:** Any authenticated user
- **Response Example:**
  ```json
  {
    "message": "Welcome, user!"
  }
  ```

#### b. Admin Welcome

- **URL:** `/api/admin/welcome`
- **Method:** `GET`
- **Headers:**
  ```http
  Authorization: Bearer <jwt_token>
  ```
- **Access:** Admin users only
- **Response Example:**
  ```json
  {
    "message": "Welcome, admin!"
  }
  ```

#### c. Upload Image

- **URL:** `/api/images/upload`
- **Method:** `POST`
- **Headers:**
  ```http
  Authorization: Bearer <jwt_token>
  ```
- **Body:** form-data with a file field named `image`
- **Response Example:**
  ```json
  {
    "success": true,
    "message": "Image uploaded successfully",
    "url": "https://res.cloudinary.com/.../image.jpg"
  }
  ```

---

## Folder Structure

```
.
├── controllers/
├── middleware/
├── models/
├── routes/
├── utils/
├── .env
├── package.json
└── server.js
```

---

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Make your changes
4. Commit your changes (`git commit -m "Add feature"`)
5. Push to the branch (`git push origin feature-name`)
6. Create a Pull Request

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.