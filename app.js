require('dotenv').config();
const express = require('express');
const app = express();

require('./services');

app.get('/', (req, res, next) => res.send('ok'));

const port = process.env.PORT || 4000;
app.listen(port);
console.log(`Listening to ${port} ✅`)