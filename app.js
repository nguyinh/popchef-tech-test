require('dotenv').config();
const express = require('express');
const app = express();

const routes = require('./routes');

routes(app);

const port = process.env.PORT || 4000;
app.listen(port);
console.log(`Listening to ${port} ✅`)