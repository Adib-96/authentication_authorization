# Authentication and Authorization

This project demonstrates how to implement authentication and authorization in a Node.js application using JWT (JSON Web Tokens) and middleware.

## Features

- User registration
- User login
- JWT-based authentication
- Role-based authorization

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- bcrypt
- jsonwebtoken

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/authentication_authorization.git
   cd authentication_authorization
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables:

   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/auth
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=**********
   CLOUDINARY_API_KEY=**********
   CLOUDINARY_API_SECRET=**********
   ```

1. Start the development server:

   ```bash
   npm run dev
   ```

## API Endpoints

### User Registration

- **URL:** `/api/auth/register`
- **Method:** `POST`
- **Request Body:**

  ```json
  {
    "username": "user1",
    "password": "password123"
  }
  ```

### User Login

- **URL:** `/api/auth/login`
- **Method:** `POST`
- **Request Body:**

  ```json
  {
    "username": "user1",
    "password": "password123"
  }
  ```

### Protected Route

- **URL:** `/api/protected`
- **Method:** `GET`
- **Headers:**

  ```
  Authorization: Bearer <token>
  ```

## Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.