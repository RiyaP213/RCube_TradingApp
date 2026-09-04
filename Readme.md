**# R3 Trading**

Hi! This is **\*\*R3 Trading\*\***, my full-stack stock trading platform.

The name **\*\*R3\*\*** represents **\*\*Riya, Reyna, and Rini\*\*** — me and my sisters.

I am building this project to understand how a real-world trading application works from end to end, including the frontend, backend APIs, authentication, databases, portfolio data, stock charts, testing, deployment, and eventually more advanced trading and quantitative features.

The project is inspired by modern trading platforms such as Zerodha, but the goal is to build and understand my own implementation rather than simply reproduce an existing application.

This project is currently under development.

**---**

**# Project Goal**

The main goal of R3 Trading is to build a complete trading platform step by step while learning how different software engineering concepts work together inside one application.

Instead of learning frontend development, backend development, databases, APIs, authentication, and deployment separately, this project combines them into one end-to-end system.

At a high level, the application will work like this:

\`\`\`text

User

  ↓

React Frontend

  ↓

HTTP / REST API

  ↓

Node.js + Express Backend

  ↓

Application Logic

  ↓

Mongoose

  ↓

MongoDB

  ↓

Response

  ↓

React Dashboard

\`\`\`

The project will be developed across three major versions.

**---**

**# Development Plan**

\`\`\`text

Version 1

Full-Stack Trading Platform

        ↓

Version 2

Trading System + Better Engineering

        ↓

Version 3

Quantitative Research + Systematic Trading

\`\`\`

Each version builds on the previous one.

**---**

**# Version 1 — Full-Stack Trading Platform**

The goal of Version 1 is to build a complete working full-stack stock trading web application.

This version focuses on understanding the basic architecture of a modern web application and connecting the frontend, backend, database, APIs, authentication, charts, testing, and deployment.

**## Frontend**

The frontend will be built using React.

Main tasks:

\- [ ] Create React application

\- [ ] Set up project folders and files

\- [ ] Identify major components

\- [ ] Build reusable React components

\- [ ] Add styling using CSS and Bootstrap

\- [ ] Set up React Router

**## Public Website**

The application will have a public-facing website before the user enters the trading dashboard.

Pages will include:

\- [ ] Home

\- [ ] Navbar

\- [ ] Footer

\- [ ] Open Account

\- [ ] About

\- [ ] Products

\- [ ] Pricing

\- [ ] Support

React Router will be used for navigation between pages.

**## Trading Dashboard**

After authentication, users will be able to access a trading dashboard.

The dashboard will contain:

\- [ ] Watchlist

\- [ ] Holdings

\- [ ] Positions

\- [ ] Orders

\- [ ] Portfolio information

\- [ ] Stock charts

\- [ ] Market information

Example dashboard structure:

\`\`\`text

Dashboard

│

├── Watchlist

├── Holdings

├── Positions

├── Orders

└── Portfolio Summary

\`\`\`

**## Watchlist**

Users will be able to keep track of stocks they are interested in.

The watchlist may display:

\`\`\`text

Symbol

Current Price

Price Change

Percentage Change

\`\`\`

Later, the watchlist can update using live market data.

**## Holdings**

The holdings section will display stocks currently owned by the user.

Possible fields include:

\`\`\`text

Symbol

Quantity

Average Purchase Price

Current Price

Investment Value

Current Market Value

Profit / Loss

Profit / Loss %

\`\`\`

**## Positions**

The positions section will display active trading positions.

**## Orders**

Users will eventually be able to place simulated buy and sell orders.

Order information may include:

\`\`\`text

Stock Symbol

Buy / Sell

Quantity

Price

Order Type

Order Status

Timestamp

\`\`\`

Possible order states:

\`\`\`text

PENDING

OPEN

EXECUTED

CANCELLED

REJECTED

\`\`\`

**---**

**# Backend**

The backend will be built using:

\- Node.js

\- Express.js

The backend will handle:

\- API requests

\- Authentication

\- Business logic

\- Database access

\- Trading operations

\- Portfolio data

\- Market-data integration

**---**

**# Database**

MongoDB will be used as the database.

Mongoose will be used to define schemas and models and communicate with MongoDB.

Possible collections include:

\`\`\`text

users

holdings

positions

orders

watchlists

transactions

\`\`\`

**---**

**# Initial Data Models**

**## User**

\`\`\`text

name

email

password

cashBalance

createdAt

updatedAt

\`\`\`

**## Holding**

\`\`\`text

userId

symbol

quantity

averagePrice

\`\`\`

**## Position**

\`\`\`text

userId

symbol

quantity

averagePrice

\`\`\`

**## Order**

\`\`\`text

userId

symbol

side

quantity

price

orderType

status

createdAt

\`\`\`

**## Watchlist**

\`\`\`text

userId

stocks[]

\`\`\`

**---**

**# REST APIs**

The React frontend will communicate with the Express backend using REST APIs.

Example:

\`\`\`text

React Dashboard

      ↓

GET /api/holdings

      ↓

Express Route

      ↓

Application Logic

      ↓

Mongoose

      ↓

MongoDB

      ↓

JSON Response

      ↓

React State

      ↓

Updated UI

\`\`\`

**---**

**# Example API Endpoints**

**## Authentication**

\`\`\`http

POST /api/auth/register

POST /api/auth/login

GET  /api/auth/me

\`\`\`

**## Holdings**

\`\`\`http

GET /api/holdings

\`\`\`

**## Positions**

\`\`\`http

GET /api/positions

\`\`\`

**## Orders**

\`\`\`http

GET  /api/orders

POST /api/orders

\`\`\`

**## Watchlist**

\`\`\`http

GET    /api/watchlist

POST   /api/watchlist

DELETE /api/watchlist/\:symbol

\`\`\`

**## Portfolio**

\`\`\`http

GET /api/portfolio

\`\`\`

**---**

**# CRUD Operations**

The application will use CRUD operations throughout the project.

CRUD stands for:

\`\`\`text

Create

Read

Update

Delete

\`\`\`

For example, a watchlist may use:

\`\`\`text

Create → Add a stock

Read   → View the watchlist

Update → Modify stored information

Delete → Remove a stock

\`\`\`

This will help me understand how frontend actions translate into backend API requests and database operations.

**---**

**# Authentication**

The application will include user authentication.

Users will eventually be able to:

\- [ ] Register

\- [ ] Log in

\- [ ] Log out

\- [ ] Access protected routes

\- [ ] Maintain their own portfolio

\- [ ] Maintain their own watchlist

\- [ ] View their own orders and holdings

Authentication may include:

\- Password hashing

\- JWT authentication

\- Authentication middleware

\- Protected API routes

**---**

**# Stock Market Data**

The application will integrate external stock-market APIs.

These APIs may provide:

\- Current stock prices

\- Daily price changes

\- Company information

\- Historical prices

\- Market data

This data will later be used across the dashboard, watchlist, charts, and portfolio calculations.

**---**

**# Charts**

Chart.js will initially be used for financial visualisation.

Possible charts include:

\- Stock-price charts

\- Portfolio-value charts

\- Holdings distribution

\- Profit and loss

\- Historical portfolio performance

**---**

**# Testing**

Version 1 will also introduce software testing.

The project will use Jest for unit testing.

Tasks include:

\- [ ] Understand testing fundamentals

\- [ ] Install Jest

\- [ ] Write basic unit tests

\- [ ] Test backend functions

\- [ ] Test important application logic

**---**

**# Deployment**

The application will eventually be deployed so that it can run outside my local development environment.

Possible deployment tasks:

\- [ ] Prepare the application for production

\- [ ] Deploy backend

\- [ ] Deploy frontend

\- [ ] Deploy MongoDB database

\- [ ] Configure environment variables

\- [ ] Deploy using AWS

**---**

**# Version 1 Architecture**

\`\`\`text

                     R3 TRADING

                         User

                           |

                           v

                    React Frontend

                           |

                     HTTP / REST

                           |

                           v

                    Express Backend

                           |

          \---------------------------------

          \|               |               |

          v               v               v

        Users           Orders         Holdings

          \|               |               |

          \---------------------------------

                           |

                           v

                        Mongoose

                           |

                           v

                        MongoDB

\`\`\`

**---**

**# Version 2 — Trading System and Engineering Improvements**

Version 2 will move beyond a basic CRUD web application.

The goal will be to make R3 Trading behave more like an actual trading system while also improving the architecture and engineering quality of the project.

**## Trading Engine**

Version 2 will introduce more realistic order-management logic.

Planned features:

\- [ ] Market buy orders

\- [ ] Market sell orders

\- [ ] Limit orders

\- [ ] Stop-loss orders

\- [ ] Order validation

\- [ ] Order status management

\- [ ] Order execution logic

\- [ ] Order cancellation

Possible order states:

\`\`\`text

PENDING

OPEN

EXECUTED

CANCELLED

REJECTED

\`\`\`

**## Portfolio Accounting**

The platform will start maintaining proper portfolio-level information.

Features may include:

\- [ ] Cash balance

\- [ ] Available buying power

\- [ ] Average purchase price

\- [ ] Realised P&L

\- [ ] Unrealised P&L

\- [ ] Portfolio market value

\- [ ] Transaction history

**## Real-Time Features**

Version 2 will introduce real-time functionality.

Possible technologies:

\- WebSockets

\- Real-time market APIs

Planned features:

\- [ ] Real-time stock prices

\- [ ] Live watchlist updates

\- [ ] Live portfolio updates

\- [ ] Real-time order status updates

\- [ ] Live charts

**## Improved Backend Architecture**

As the backend becomes larger, the application will be refactored into clearer layers.

\`\`\`text

Request

   ↓

Route

   ↓

Middleware

   ↓

Controller

   ↓

Service

   ↓

Model

   ↓

Database

\`\`\`

This may introduce:

\- Controllers

\- Services

\- Middleware

\- Validation

\- Centralised error handling

\- Logging

\- Configuration files

**## Performance Improvements**

Possible improvements include:

\- [ ] Redis

\- [ ] Caching

\- [ ] Database indexes

\- [ ] Query optimisation

\- [ ] API performance improvements

**## Better Testing**

Version 2 will expand the testing strategy.

Planned testing includes:

\- [ ] Unit tests

\- [ ] API tests

\- [ ] Integration tests

\- [ ] Authentication tests

\- [ ] Trading-engine tests

\- [ ] Portfolio-calculation tests

**## DevOps**

Version 2 will also introduce more software-engineering infrastructure.

Possible additions:

\- [ ] Docker

\- [ ] CI/CD

\- [ ] Automated testing

\- [ ] Environment management

\- [ ] Logging

\- [ ] Monitoring

\- [ ] Production configuration

**---**

**# Version 3 — Quantitative Trading and Research Platform**

Version 3 will extend R3 Trading beyond a brokerage-style trading platform.

The goal will be to use the platform for quantitative research, portfolio analysis, strategy development, backtesting, and systematic trading experiments.

This version will bring together software engineering, mathematics, statistics, finance, and trading.

**## Portfolio Analytics**

Planned analytics include:

\- [ ] Daily returns

\- [ ] Cumulative returns

\- [ ] Annualised returns

\- [ ] Volatility

\- [ ] Sharpe ratio

\- [ ] Sortino ratio

\- [ ] Maximum drawdown

\- [ ] Beta

\- [ ] Correlation

\- [ ] Portfolio exposure

\- [ ] Risk-adjusted returns

**## Statistical Analysis**

The platform may include statistical research tools such as:

\- [ ] Mean

\- [ ] Variance

\- [ ] Standard deviation

\- [ ] Covariance

\- [ ] Correlation matrices

\- [ ] Linear regression

\- [ ] Rolling statistics

\- [ ] Z-scores

\- [ ] Stationarity testing

\- [ ] Cointegration analysis

**## Backtesting Engine**

Version 3 may introduce a backtesting engine for testing trading strategies using historical data.

\`\`\`text

Historical Market Data

        ↓

Trading Strategy

        ↓

Signal Generation

        ↓

Order Simulation

        ↓

Portfolio Update

        ↓

Performance Analysis

\`\`\`

Planned functionality:

\- [ ] Historical market data

\- [ ] Strategy rules

\- [ ] Signal generation

\- [ ] Buy and sell signals

\- [ ] Position sizing

\- [ ] Transaction costs

\- [ ] Slippage

\- [ ] Portfolio simulation

\- [ ] Performance reporting

**## Trading Strategies**

Possible strategies to research include:

\- [ ] Moving-average strategies

\- [ ] Momentum

\- [ ] Mean reversion

\- [ ] Pairs trading

\- [ ] Statistical arbitrage

\- [ ] Factor strategies

\- [ ] Volatility strategies

The goal is not simply to implement strategies, but to understand how they behave statistically and how execution costs affect performance.

**## Risk Management**

Possible risk-management functionality includes:

\- [ ] Position limits

\- [ ] Exposure limits

\- [ ] Portfolio diversification

\- [ ] Volatility targeting

\- [ ] Value at Risk

\- [ ] Drawdown controls

\- [ ] Risk-adjusted performance metrics

**## Market Microstructure**

Later versions may also explore how markets operate at the execution level.

Possible areas include:

\- [ ] Bid/ask spread

\- [ ] Order books

\- [ ] Market depth

\- [ ] Trade execution

\- [ ] Slippage modelling

\- [ ] Transaction-cost analysis

\- [ ] Liquidity

\- [ ] Execution algorithms

**## Quant Research Dashboard**

R3 Trading may eventually include a dedicated research dashboard.

Strategies could be compared using metrics such as:

\`\`\`text

Annual Return

Annualised Volatility

Sharpe Ratio

Sortino Ratio

Maximum Drawdown

Win Rate

Profit Factor

Turnover

Transaction Costs

\`\`\`

**---**

**# Project Structure**

The project may eventually follow a structure similar to:

\`\`\`text

r3-trading/

│

├── frontend/

│   ├── public/

│   └── src/

│       ├── components/

│       ├── pages/

│       ├── services/

│       ├── hooks/

│       ├── utils/

│       ├── assets/

│       ├── App.jsx

│       └── main.jsx

│

├── backend/

│   ├── config/

│   ├── controllers/

│   ├── middleware/

│   ├── models/

│   ├── routes/

│   ├── services/

│   ├── utils/

│   └── server.js

│

├── tests/

├── .gitignore

├── README.md

└── package.json

\`\`\`

The exact project structure will evolve as the application becomes more complex.

**---**

**# Tech Stack**

**## Development Tools**

\- VS Code

\- Git

\- GitHub

\- Google Chrome

\- Chrome DevTools

\- Node.js

**## Frontend**

\- HTML

\- CSS

\- JavaScript

\- React

\- React Router

\- Bootstrap

\- Material UI

\- Material UI Icons

\- Chart.js

**## Backend**

\- Node.js

\- Express.js

**## Database**

\- MongoDB

\- Mongoose

**## Testing**

\- Jest

**## Deployment**

\- AWS

**## Future Technologies**

Later versions may introduce:

\- WebSockets

\- Redis

\- Docker

\- CI/CD

\- Python

\- NumPy

\- pandas

\- SciPy

\- statsmodels

\- scikit-learn

\- More advanced market-data APIs

**---**

**# Learning Objectives**

Through this project, I want to develop a practical understanding of:

\- Frontend development

\- React

\- Component-based architecture

\- Backend development

\- Node.js

\- Express

\- REST APIs

\- MongoDB

\- Mongoose

\- Database design

\- CRUD operations

\- Authentication

\- External APIs

\- Data visualisation

\- Testing

\- Deployment

\- Application architecture

\- Trading-system design

\- Portfolio calculations

\- Real-time systems

\- Quantitative finance

\- Backtesting

\- Statistical analysis

\- Market microstructure

Most importantly, I want to understand how all of these areas connect together inside a complete trading system.

**---**

**# Long-Term Vision**

R3 Trading is intended to evolve gradually.

\`\`\`text

V1

Build a Full-Stack Application

        ↓

V2

Build a More Realistic Trading System

        ↓

V3

Build Quantitative Research and Systematic Trading Tools

\`\`\`

**### Version 1**

Learn how to build the application.

**### Version 2**

Learn how to engineer a more realistic trading platform.

**### Version 3**

Use the platform for quantitative research, backtesting, risk analysis, and systematic trading.

**---**

**# Current Status**

**\*\*Under Development\*\***

Current focus:

\`\`\`text

Version 1

↓

Frontend setup

↓

React components

↓

Landing pages

↓

Trading dashboard

\`\`\`

This README will be updated continuously as the project develops.

**---**

**# Disclaimer**

R3 Trading is an educational software project.

It is not a registered brokerage, financial institution, or investment adviser.

The application is intended for learning, research, and paper-trading purposes only.

It does not provide investment advice and does not execute real-money trades.