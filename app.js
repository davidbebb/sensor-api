require('dotenv').config()
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// var Station = require('./models/station');


mongoose.connect(process.env.MONGO);

var config = {
  modelDir: __dirname + '/models/',
  routesDir: __dirname + '/routes/'
}

var routesConfig =
  [
    {
      path:'/',
      routeFile:'index'
    },
    {
      path:'/stations',
      routeFile:'station'
    },
  ];

app.use(function(req, res, next) {
    console.log(req.method, req.url);
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

for (r of routesConfig) {
  require(config.routesDir + r.routeFile)(config, app, r.path, mongoose);
}

app.listen(port);
