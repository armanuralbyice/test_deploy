const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const userRouter = require("../server/router/userRouter");
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "https://test-deploy-z697.vercel.app/",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Authorization", "Content-Type"],
  })
);

const PORT = process.env.PORT;
const DB = process.env.DB;
mongoose.set("strictQuery", true);
mongoose
  .connect(DB)
  .then(() => console.log("Database connection successfully"))
  .catch((err) => console.log(err));
app.use("/api", userRouter);
app.listen(PORT, () => {
  console.log(`Listening port is ${PORT}`);
});
