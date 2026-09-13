require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const authRoute = require("./routes/AuthRoutes");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

// ----------------------------------
// MIDDLEWARE
// ----------------------------------

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
    ],
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(cookieParser());
app.use("/auth", authRoute);

app.use(express.json());
app.use(cookieParser());

// ----------------------------------
// AUTH ROUTES
// ----------------------------------

app.use("/auth", authRoute);

// ----------------------------------
// ADD HOLDINGS DUMMY DATA
// ----------------------------------

app.get("/addHoldings", async (req, res) => {
  try {
    const tempHoldings = [
      {
        name: "BHARTIARTL",
        qty: 2,
        avg: 538.05,
        price: 541.15,
        net: "+0.58%",
        day: "+2.99%",
      },
      {
        name: "HDFCBANK",
        qty: 2,
        avg: 1383.4,
        price: 1522.35,
        net: "+10.04%",
        day: "+0.11%",
      },
      {
        name: "HINDUNILVR",
        qty: 1,
        avg: 2335.85,
        price: 2417.4,
        net: "+3.49%",
        day: "+0.21%",
      },
      {
        name: "INFY",
        qty: 1,
        avg: 1350.5,
        price: 1555.45,
        net: "+15.18%",
        day: "-1.60%",
      },
      {
        name: "ITC",
        qty: 5,
        avg: 202,
        price: 207.9,
        net: "+2.92%",
        day: "+0.80%",
      },
      {
        name: "KPITTECH",
        qty: 5,
        avg: 250.3,
        price: 266.45,
        net: "+6.45%",
        day: "+3.54%",
      },
      {
        name: "M&M",
        qty: 2,
        avg: 809.9,
        price: 779.8,
        net: "-3.72%",
        day: "-0.01%",
      },
      {
        name: "RELIANCE",
        qty: 1,
        avg: 2193.7,
        price: 2112.4,
        net: "-3.71%",
        day: "+1.44%",
      },
      {
        name: "SBIN",
        qty: 4,
        avg: 324.35,
        price: 430.2,
        net: "+32.63%",
        day: "-0.34%",
      },
      {
        name: "SGBMAY29",
        qty: 2,
        avg: 4727,
        price: 4719,
        net: "-0.17%",
        day: "+0.15%",
      },
      {
        name: "TATAPOWER",
        qty: 5,
        avg: 104.2,
        price: 124.15,
        net: "+19.15%",
        day: "-0.24%",
      },
      {
        name: "TCS",
        qty: 1,
        avg: 3041.7,
        price: 3194.8,
        net: "+5.03%",
        day: "-0.25%",
      },
      {
        name: "WIPRO",
        qty: 4,
        avg: 489.3,
        price: 577.75,
        net: "+18.08%",
        day: "+0.32%",
      },
    ];

    await HoldingsModel.insertMany(tempHoldings);

    res.send("Holdings added!");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error adding holdings");
  }
});

// ----------------------------------
// ADD POSITIONS DUMMY DATA
// ----------------------------------

app.get("/addPositions", async (req, res) => {
  try {
    const tempPositions = [
      {
        product: "CNC",
        name: "EVEREADY",
        qty: 2,
        avg: 316.27,
        price: 312.35,
        net: "-1.24%",
        day: "-0.47%",
        isLoss: true,
      },
      {
        product: "CNC",
        name: "JUBLFOOD",
        qty: 1,
        avg: 3124.75,
        price: 3082.65,
        net: "-1.35%",
        day: "-0.50%",
        isLoss: true,
      },
    ];

    await PositionsModel.insertMany(tempPositions);

    res.send("Positions added!");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error adding positions");
  }
});

// ----------------------------------
// ADD ORDERS DUMMY DATA
// ----------------------------------

app.get("/addOrders", async (req, res) => {
  try {
    const tempOrders = [
      {
        name: "INFY",
        qty: 1,
        price: 1555.45,
        mode: "BUY",
      },
      {
        name: "TCS",
        qty: 1,
        price: 3194.8,
        mode: "BUY",
      },
    ];

    await OrdersModel.insertMany(tempOrders);

    res.send("Orders added!");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error adding orders");
  }
});

// ----------------------------------
// FETCH HOLDINGS
// ----------------------------------

app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error fetching holdings");
  }
});

// ----------------------------------
// FETCH POSITIONS
// ----------------------------------

app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error fetching positions");
  }
});

// ----------------------------------
// FETCH ORDERS
// ----------------------------------

app.get("/allOrders", async (req, res) => {
  try {
    const allOrders = await OrdersModel.find({});
    res.json(allOrders);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error fetching orders");
  }
});

// ----------------------------------
// CREATE NEW ORDER
// ----------------------------------

app.post("/newOrder", async (req, res) => {
  try {
    const newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save();

    res.status(201).json({
      message: "Order saved!",
      order: newOrder,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Error saving order",
    });
  }
});

// ----------------------------------
// TEST ROUTE
// ----------------------------------

app.get("/", (req, res) => {
  res.send("Backend is working");
});

// ----------------------------------
// CONNECT MONGODB + START SERVER
// ----------------------------------

mongoose
  .connect(uri)
  .then(() => {
    console.log("MongoDB connected");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });