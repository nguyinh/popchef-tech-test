require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const path = require('path');

const { logger, errorHandler } = require("./middlewares");;
const routes = require("./routes");

app.use(cors());

app.use(express.static(path.join(__dirname, "frontend/build")));

routes(app);

app.use(errorHandler);

const port = process.env.PORT || 4000;
app.listen(port);
logger.info(`[EXPRESS] Listening to ${port} ✅`);
