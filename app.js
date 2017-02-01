var app = {};

app.drivers = {};
app.drivers.express = require('./drivers/express');
app.drivers.mysql = require('./drivers/mysql');
app.drivers.express.init();

app.models = {};
app.models.candidate = require('./models/candidate');
app.models.votant = require('./models/votant');
app.models.vote = require('./models/vote');
app.controllers = {};
app.controllers.routes = require('./controllers/routes')(app);