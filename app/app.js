const express = require('express');

const app = express();

const bodyParser = require('body-parser');

var routes = require('./routes/routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.get('/', (req, res , next) => {
    res.send("Welcome to the APP Server");
});

app.use('/api', routes.userRoutes);
app.use('/api',routes.complaintRoutes);

module.exports = app;