const cors = require("cors");
const express = require("express");
const routes = require("./routes/routes");
const corsOptions = require("./configs/cors");
const { errorHandler } = require("./middlewares/error-handler");

const app = express();

app.disable("x-powered-by");

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

app.use(errorHandler);

module.exports = app;
