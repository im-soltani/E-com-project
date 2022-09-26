/* eslint-disable quotes */
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const config = require("./config");
const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const orderRoute = require("./routes/orderRoute");
const uploadRoute = require("./routes/uploadRoute");
const categoryRoute = require("./routes/categoryRoute");
const articleRoute = require("./routes/articleRoute");

// eslint-disable-next-line quotes
const sendMailRoute = require("./routes/sendMail");

const db = mongoose.connection;
db.once("open", () => console.log("mongo db connection"));
db.on("error", () => console.error.bind(console.log, "error"));

const mongodbUrl = config.MONGODB_URL;

mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((error) => console.log(error.reason));

const app = express();
app.use(bodyParser.json());
app.use("/api/uploads", uploadRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/categories", categoryRoute);
app.use("/api/articles", articleRoute);
app.use("/api/sendMail", sendMailRoute);
app.use("/api/orders", orderRoute);
app.get("/api/config/paypal", (req, res) => {
  res.send(config.PAYPAL_CLIENT_ID);
});
app.use("/uploads", express.static(path.join(__dirname, "./uploads")));
app.use(express.static(path.join(__dirname, "/../app-with-redux/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(`${__dirname}/amz/public/index.html`));
  
  
});

app.listen(config.PORT, () => {
  console.log("Server started at http://localhost:5000");
});
