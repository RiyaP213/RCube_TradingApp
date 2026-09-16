# RCube Trading App

RCube is a full-stack trading platform project inspired by modern online brokerage applications.

The purpose of this project was to understand how a complete web application works end to end — from the frontend interface, to authentication and API communication, to database storage and cloud deployment.

## What the Project Includes

The application contains three main parts:

- A public frontend with landing pages, signup, and login
- A trading dashboard showing holdings, positions, and orders
- A backend API responsible for authentication, database access, and order creation

## Features

- User signup
- User login
- Trading dashboard
- Holdings view
- Positions view
- Orders view
- Simulated buy-order creation
- MongoDB persistence
- REST API communication
- Environment-variable configuration
- Cross-origin frontend/backend communication
- Responsive React interface

## Tech Stack

### Frontend

- React
- Vite
- JavaScript
- React Router
- Axios
- Bootstrap

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Cookie Parser
- CORS

### Deployment

The project was deployed as a full-stack application using:

- AWS Amplify for the frontend
- AWS Amplify for the trading dashboard
- AWS EC2 for the backend
- Nginx as a reverse proxy
- PM2 for Node.js process management
- HTTPS using SSL/TLS
- MongoDB Atlas for the cloud database

The cloud resources were later removed after deployment and testing, so the repository now serves as the permanent record of the project.

## Project Structure

```text
RCube_TradingApp/
│
├── frontend/
│   ├── landing pages
│   ├── signup
│   └── login
│
├── dashboard/
│   ├── holdings
│   ├── positions
│   ├── orders
│   └── buy-order interface
│
├── backend/
│   ├── routes
│   ├── controllers
│   ├── models
│   ├── schemas
│   └── Express server
│
└── README.md
```

## Application Flow

A simplified view of how the application works:

```text
User
  |
  v
React frontend
  |
  | Axios HTTP request
  v
Express API
  |
  v
Mongoose
  |
  v
MongoDB
  |
  v
JSON response
  |
  v
React state
  |
  v
Updated user interface
```

During deployment, the request flow was:

```text
Browser
  |
  v
AWS Amplify
  |
  | HTTPS
  v
Nginx on AWS EC2
  |
  v
Node.js / Express
  |
  v
MongoDB Atlas
```

## API Endpoints

The backend includes endpoints such as:

```text
POST /auth/signup
POST /auth/login

GET /allHoldings
GET /allPositions
GET /allOrders

POST /newOrder
```

## Local Setup

Clone the repository:

```bash
git clone https://github.com/RiyaP213/RCube_TradingApp.git
cd RCube_TradingApp
```

### Backend

```bash
cd backend
npm install
npm start
```

Create a local `.env` file:

```env
MONGO_URL=your_mongodb_connection_string
TOKEN_KEY=your_secret_key
PORT=3002
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Create a local `.env` file:

```env
VITE_API_URL=http://localhost:3002
```

### Dashboard

```bash
cd dashboard
npm install
npm run dev
```

Create a local `.env` file:

```env
VITE_API_URL=http://localhost:3002
```

## What I Learned

This project helped me understand how the major parts of a full-stack application fit together.

Key areas I worked with include:

- React components and routing
- Frontend state management
- HTTP requests with Axios
- REST APIs
- Express middleware and routing
- MongoDB and Mongoose
- User authentication
- Environment variables
- CORS
- Git and GitHub
- Linux shell commands
- AWS EC2
- AWS Amplify
- Nginx
- PM2
- HTTPS configuration
- Debugging a deployed application

One of the main outcomes of the project was developing a clearer understanding of the complete application flow from the browser to the backend and database.

## Current Scope

RCube is an educational trading-platform project.

It does not connect to a real brokerage account, execute real trades, or provide live market-data infrastructure.

The trading functionality is simulated and was built to understand application architecture and full-stack development.

## Future Development

Ideas for a more advanced quantitative trading platform are intentionally kept separate from this README.

Those ideas can be documented in a separate  `FUTURE_IDEAS.md` file.

This keeps the README focused on what has actually been implemented.

## Disclaimer

RCube is an educational software project inspired by online trading platforms.

It is not affiliated with Zerodha or any brokerage firm and does not provide brokerage, investment, or financial services.