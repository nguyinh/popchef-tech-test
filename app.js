require("dotenv").config();
const express = require("express");
const app = express();

const { logger } = require("./middlewares");
const routes = require("./routes");

routes(app);

const port = process.env.PORT || 4000;
app.listen(port);
logger.info(`[EXPRESS] Listening to ${port} ✅`);
