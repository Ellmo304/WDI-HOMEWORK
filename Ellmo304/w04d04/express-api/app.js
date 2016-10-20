const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const port = process.env.PORT || 8000;
const router = require("./config/routes");


const app = express();
mongoose.connect("mongodb://localhost/yearbook");

app.use(express.static(`${__dirname}/public`));
app.use(morgan("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/", router);

app.listen(port, () => {
  console.log("Yearbook listening");
});
