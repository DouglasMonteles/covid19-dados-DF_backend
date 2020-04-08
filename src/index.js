const express = require('express');
const cors = require('cors');

const app = express();

const routes = require('./routes');

app.use(cors());
app.use(routes);

app.listen(process.env.PORT || 3333);