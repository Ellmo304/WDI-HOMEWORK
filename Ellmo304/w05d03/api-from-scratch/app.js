const express    = require("express");
const morgan     = require("morgan");
const bodyParser = require("body-parser");
const mongoose   = require("mongoose");
const expressJWT = require("express-jwt");

const app        = express();
const port       = process.env.PORT || 3000;
const router     = require("./config/routes");

mongoose.connect('mongodb://localhost/weaponry');

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));

app.use("/api", router);

app.listen(port, () => console.log(`Express started on port: ${port}`));
