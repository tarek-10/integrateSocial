const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const connection = require("./configration/config");

const { userRouter, postRouter } = require("./router/app.router");

const app = express();
app.use(cors());

require("dotenv").config();

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use("/uploads", express.static("uploads"));
const port = process.env.PORT;
connection();
app.use(userRouter);
app.use(postRouter);

app.listen(port, () => {
  console.log(`App Listenning Successfully At port ${port}`);
});
