const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");
//dot config
dotenv.config();

// mongodb connection
connectDB().then(() => {}).catch(() => {});

// rest object
const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// routs
// 1 test routs
app.use("/api/v1/test", require("./routes/testRouts"));

// register route
app.use("/api/v1/auth", require("./routes/authRoutes"));

// inventory route
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));

// analytics route
app.use("/api/v1/analytics", require("./routes/analyticsRoutes"));

// admin route
app.use("/api/v1/admin", require("./routes/adminRoutes"));

// port
const PORT = process.env.PORT || 8080;

// listen
app.listen(PORT, () => { console.log(`Node server is running In ${process.env.DEV_MODE} Mode on ${process.env.PORT} port`.bgBlue.white);
});
