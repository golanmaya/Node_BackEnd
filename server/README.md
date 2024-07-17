## PROJECT NAME: NODE.JS ##
# Description:
-   This project is a backend service built with Node.js,
    Express, and MongoDB. It provides authentication and authorization features, user management, and business card management.

# Features
-   User registration and login with JWT-based authentication.
-   Role-based access control (Admin, Business, User).
-   CRUD operations for users and business cards.
-   Data validation using Joi.

# Technologies Used
- Node.js
- Express
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- bcryptjs
- Joi

# Setup and Installation
- Prerequisites
    - Node.js
    - MongoDB
- Installation
    1. Install dependencies:
        - npm install
    2. Seed the database:
        If you want to seed the database with initial 'data', you can run the script provided in the data folder:
            node data/data.js
    3. Start the server:
         npm start
         - The server will start on the port defined in the '.env' file (default is 3000).
# API Endpoints
1. Authentication
    - Register: 'POST/api/auth/register'
    - Login: 'POST/api/auth/login'
    - My Profile: 'GET/api/auth/my-profile'
2. Users
    - Get All Users: 'GET /api/users'
    - Get User By ID: 'GET /api/users/:id'
    - Create New User: 'POST /api/users'
    - Update User By ID: 'PUT /api/users/:id'
    - Delete User By ID: 'DELETE /api/users/:id'
3. Business Cards
    - Get All Cards: 'GET /api/cards'
    - Get Card By ID: 'GET /api/cards/:id'
    - Create New Card: 'POST /api/cards'
    - Update Card By ID: 'PUT /api/cards/:id'
    - Delete Card By ID: 'DELETE /api/cards/:id'
    - Like/Unlike Card: 'PATCH /api/cards/:id/like'

# Folder Structure

    ├── controllers
    │   ├── authControllers.js
    │   ├── userControllers.js
    │   └── cardsControllers.js
    ├── data
    │   └── data.js
    ├── models
    │   ├── User.js
    │   └── Card.js
    ├── routes
    │   ├── authRoutes.js
    │   ├── userRoutes.js
    │   └── cardRoutes.js
    ├── schemas
    │   ├── usersSchema.js
    │   └── cardsSchema.js
    ├── .env
    ├── app.js
    ├── server.js
    ├── package.json
    └── README.md

# Usage
- Register a New User
    - To register a new user, send a POST request to /api/auth/register with the following JSON body:
    {
  "name": {
    "first": "John",
    "middle": "Doe",
    "last": "Smith"
  },
  "phone": "050-1234567",
  "email": "john@example.com",
  "password": "Password123!",
  "address": {
    "state": "State",
    "country": "Country",
    "city": "City",
    "street": "Street",
    "houseNumber": 1,
    "zip": 12345
  }
}

- Login
    To log in, send a POST request to '/api/auth/login' with the following JSON body:
    {
    "email": "john@example.com",
    "password": "Password123!"
    }

- View Profile
    To view the logged-in user's profile, send a GET request to '/api/auth/my-profile' with the JWT token in the x-auth-token header.







