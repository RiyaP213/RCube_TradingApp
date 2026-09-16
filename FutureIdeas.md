# RCube Trading App — Future Ideas

This document contains ideas for possible future versions of RCube Trading App.

The current project already demonstrates a working full-stack trading application with authentication, portfolio views, simulated orders, database integration, and cloud deployment.

The ideas below are intentionally separated from the main `README.md` because they have **not yet been implemented**.

The long-term direction would be to evolve RCube from a basic trading-platform application into a more realistic trading system and eventually into a quantitative research environment.

---

# Roadmap

```text
Current Project
Full-Stack Trading Application

        ↓

Version 2
Trading System + Better Engineering

        ↓

Version 3
Quantitative Research + Systematic Trading
```

---

# Version 2 — Trading System and Engineering Improvements

Version 2 would focus on making RCube behave more like a realistic trading system rather than a basic CRUD application.

The emphasis would be on order management, portfolio accounting, real-time data, architecture, testing, and production-quality engineering.

## Trading Engine

Possible features:

- Market buy orders
- Market sell orders
- Limit orders
- Stop-loss orders
- Order validation
- Order cancellation
- Order execution logic
- Order status management

Possible order states:

```text
PENDING
OPEN
EXECUTED
CANCELLED
REJECTED
```

A more realistic order flow could look like:

```text
User submits order
        ↓
Validate order
        ↓
Check available balance / holdings
        ↓
Create order
        ↓
Simulate execution
        ↓
Update portfolio
        ↓
Store transaction
        ↓
Return updated state
```

---

## Portfolio Accounting

A future version could maintain more realistic portfolio information.

Possible features:

- Cash balance
- Available buying power
- Average purchase price
- Realised profit and loss
- Unrealised profit and loss
- Portfolio market value
- Transaction history
- Cost basis
- Portfolio return
- Exposure by asset

Example:

```text
Portfolio

Cash
Holdings
Positions
Open Orders
Realised P&L
Unrealised P&L
Total Equity
```

---

## User-Specific Portfolios

The current project could be extended so that every authenticated user has their own:

- Holdings
- Positions
- Orders
- Watchlist
- Cash balance
- Transaction history

Database relationships could be based on a user identifier.

For example:

```text
User
 |
 ├── Holdings
 ├── Positions
 ├── Orders
 ├── Watchlist
 └── Transactions
```

---

# Real-Time Market Data

A future version could connect to market-data APIs rather than relying on static or simulated values.

Possible data:

- Current prices
- Bid and ask prices
- Daily price changes
- Historical prices
- Volume
- Company information
- Market indices

Possible technologies:

- REST APIs
- WebSockets
- Streaming market-data APIs

Real-time architecture could look like:

```text
Market Data Provider
        ↓
Backend
        ↓
WebSocket connection
        ↓
React Dashboard
        ↓
Live price updates
```

---

# Watchlist Improvements

The watchlist could eventually support:

- Add stock
- Remove stock
- Search securities
- Live prices
- Percentage price change
- Daily high / low
- Volume
- Quick buy / sell actions

Possible display:

```text
Symbol
Price
Change
Change %
Volume
Bid
Ask
```

---

# Charts and Visualisation

Future versions could contain more detailed financial visualisation.

Possible charts:

- Historical stock prices
- Portfolio value over time
- Daily profit and loss
- Holdings allocation
- Drawdown
- Return distribution
- Rolling volatility
- Strategy performance

Possible tools:

- Chart.js
- Plotly
- Lightweight Charts
- Python visualisation tools for research

---

# Better Backend Architecture

As the backend grows, it could be reorganised into clearer application layers.

```text
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
```

Possible improvements:

- Controllers
- Services
- Authentication middleware
- Request validation
- Centralised error handling
- Logging
- Configuration management
- Cleaner separation of business logic
- API versioning

---

# Performance and Infrastructure

Possible engineering improvements:

- Redis
- Caching
- Database indexes
- Query optimisation
- API performance monitoring
- Background jobs
- Message queues
- Rate limiting

These would become more useful if the application handled larger amounts of data or real-time information.

---

# Testing

Testing could be expanded considerably.

Possible areas:

- Unit tests
- API tests
- Integration tests
- Authentication tests
- Order validation tests
- Portfolio calculation tests
- Trading-engine tests
- End-to-end tests

Important financial calculations should eventually have deterministic automated tests.

---

# DevOps and Deployment

Possible future infrastructure improvements:

- Docker
- Docker Compose
- CI/CD
- GitHub Actions
- Automated testing before deployment
- Development / staging / production environments
- Logging
- Monitoring
- Health checks
- Secrets management
- Infrastructure as code

---

# Version 3 — Quantitative Research Platform

A longer-term version of RCube could move beyond brokerage-style functionality and become a quantitative research and systematic trading environment.

The goal would be to combine:

```text
Mathematics
+
Statistics
+
Finance
+
Market Data
+
Software Engineering
+
Research
```

---

# Quantitative Research Workflow

A research system could follow a process such as:

```text
Research Question
        ↓
Market / Economic Hypothesis
        ↓
Collect Data
        ↓
Clean Data
        ↓
Explore Data
        ↓
Build Signal
        ↓
Backtest
        ↓
Transaction Costs
        ↓
Risk Analysis
        ↓
Robustness Testing
        ↓
Performance Evaluation
```

The objective would not simply be to produce profitable historical backtests, but to understand whether an observed relationship is statistically and economically meaningful.

---

# Portfolio Analytics

Possible analytics include:

- Daily returns
- Cumulative returns
- Annualised return
- Annualised volatility
- Sharpe ratio
- Sortino ratio
- Maximum drawdown
- Beta
- Correlation
- Portfolio exposure
- Turnover
- Risk-adjusted returns

Example strategy report:

```text
Annual Return
Annualised Volatility
Sharpe Ratio
Sortino Ratio
Maximum Drawdown
Turnover
Win Rate
Transaction Costs
```

---

# Statistical Analysis

Possible research tools:

- Mean
- Variance
- Standard deviation
- Covariance
- Correlation matrices
- Linear regression
- Rolling statistics
- Z-scores
- Hypothesis testing
- Confidence intervals
- Stationarity testing
- Cointegration analysis

More advanced work could later include:

- Time-series modelling
- Bayesian methods
- Principal component analysis
- Factor modelling
- Machine learning

---

# Backtesting Engine

A future backtesting system could evaluate trading strategies using historical data.

```text
Historical Data
      ↓
Strategy
      ↓
Signal Generation
      ↓
Portfolio Construction
      ↓
Order Simulation
      ↓
Transaction Costs
      ↓
Portfolio Update
      ↓
Performance Analysis
```

Possible functionality:

- Historical market data
- Strategy rules
- Signal generation
- Position sizing
- Buy / sell signals
- Portfolio simulation
- Transaction costs
- Slippage
- Benchmark comparison
- Performance reporting

---

# Strategy Research

Possible strategies to investigate:

- Momentum
- Mean reversion
- Moving-average strategies
- Pairs trading
- Statistical arbitrage
- Factor strategies
- Volatility strategies
- Cross-sectional strategies
- Cross-exchange arbitrage

The objective would be to study:

- Why the strategy might work
- Whether the effect is statistically significant
- Whether it survives transaction costs
- Whether it remains stable across different periods
- Whether performance depends on particular market regimes

---

# Crypto Arbitrage Research

One possible specialised research project could examine crypto-market arbitrage.

Questions could include:

- How large are cross-exchange price differences?
- How long do price discrepancies persist?
- Which exchanges lead price discovery?
- How much apparent arbitrage disappears after fees?
- How important are transfer times?
- How does volatility affect spreads?
- How does liquidity affect execution?
- How much capital can realistically be deployed?

Possible architecture:

```text
Exchange A ─┐
Exchange B ─┼── Market Data Collector
Exchange C ─┘
               ↓
          Normalised Data
               ↓
          Spread Detection
               ↓
        Opportunity Analysis
               ↓
        Fees + Slippage
               ↓
        Execution Decision
```

---

# Risk Management

Possible risk-management functionality:

- Position limits
- Exposure limits
- Concentration limits
- Portfolio diversification
- Volatility targeting
- Maximum drawdown limits
- Value at Risk
- Scenario analysis
- Stress testing
- Liquidity constraints

A strategy should eventually be evaluated not only by return, but also by the risks required to generate that return.

---

# Market Microstructure

Future research could explore how markets operate at the execution level.

Possible topics:

- Bid / ask spread
- Order books
- Market depth
- Liquidity
- Order flow
- Slippage
- Price impact
- Transaction costs
- Limit orders
- Market orders
- Execution algorithms
- Price discovery

This would be particularly important for strategies where execution quality significantly affects profitability.

---

# Transaction-Cost Analysis

Backtests can appear profitable before realistic trading costs are included.

Future research could model:

```text
Gross Strategy Return
        ↓
Commissions
        ↓
Bid / Ask Spread
        ↓
Slippage
        ↓
Market Impact
        ↓
Financing / Funding Costs
        ↓
Net Strategy Return
```

This would make research results more realistic.

---

# Research Data Infrastructure

A larger quantitative platform may eventually need a separate research-data layer.

Possible components:

- Raw market data storage
- Cleaned datasets
- Feature datasets
- Strategy results
- Experiment metadata
- Historical portfolio data

Possible future technologies:

- Python
- pandas
- NumPy
- SciPy
- statsmodels
- scikit-learn
- SQL
- PostgreSQL
- Parquet
- DuckDB

A possible research architecture:

```text
Raw Data
   ↓
Cleaning
   ↓
Normalisation
   ↓
Feature Engineering
   ↓
Research Dataset
   ↓
Strategy / Model
   ↓
Backtest
   ↓
Results Database
```

---

# Quant Research Dashboard

A dedicated research interface could eventually allow strategies to be compared.

Possible metrics:

```text
Annual Return
Annualised Volatility
Sharpe Ratio
Sortino Ratio
Maximum Drawdown
Win Rate
Turnover
Transaction Costs
Exposure
Beta
Correlation
```

Possible features:

- Strategy comparison
- Equity curves
- Drawdown charts
- Return distributions
- Parameter experiments
- Portfolio analytics
- Research notes

---

# Potential Future Tech Stack

The existing application is primarily JavaScript-based.

Quantitative research would likely introduce Python alongside the existing stack.

Possible technologies:

## Quant Research

- Python
- NumPy
- pandas
- SciPy
- statsmodels
- scikit-learn
- Jupyter

## Data

- SQL
- PostgreSQL
- Parquet
- DuckDB

## Infrastructure

- Docker
- Redis
- WebSockets
- GitHub Actions
- Cloud infrastructure

These technologies would only be introduced when there is a concrete reason to use them.

---

# Learning Direction

The future development of RCube would increasingly shift away from frontend development and toward:

- Mathematics
- Probability
- Statistics
- Python
- Data analysis
- Market microstructure
- Quantitative research
- Backtesting
- Portfolio construction
- Risk management
- Trading-system engineering

The application would become a practical environment for applying these topics rather than an end in itself.

---

# Long-Term Vision

RCube began as a project for understanding full-stack software development.

A possible long-term evolution is:

```text
Full-Stack Application
        ↓
Trading-System Engineering
        ↓
Market Data Infrastructure
        ↓
Portfolio Analytics
        ↓
Quantitative Research
        ↓
Backtesting
        ↓
Risk Management
        ↓
Systematic Trading Experiments
```

The objective is not to implement every feature listed in this document.

The roadmap will evolve as my understanding of mathematics, statistics, computer science, financial markets, and quantitative research develops.

Future features should be added only when they support a clear research or engineering objective.

---

# Disclaimer

RCube is an educational software and research project.

Any future trading, backtesting, portfolio, or quantitative functionality described here would be intended for learning, research, and simulated trading.

The project does not provide investment advice and is not intended to execute real-money trades without appropriate controls, infrastructure, and regulatory considerations.