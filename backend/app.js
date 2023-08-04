const express = require("express");
const errorMiddleWare = require("./middleware/error");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileupload = require("express-fileupload");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();
app.use(cors());
dotenv.config({ path: "backend/config/config.env" });
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileupload());
const productRoutes = require("./routes/ProductRoutes");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/OrderRoute");
const paymentRoutes = require("./routes/paymentroutes");

app.use("/api/v1", productRoutes);
app.use("/api/v1", userRoutes);
app.use("/api/v1", orderRoutes);
app.use("/api/v1", paymentRoutes);
app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

app.use(errorMiddleWare);

module.exports = app;
