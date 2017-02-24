

module.exports = function(config, app, route, mongoose){

  var Station = require(config.modelDir + 'station');

  app.get(route, function(req, res, next) {
    Station.find(function(err, stations) {
      if (err){
        res.send(err);
      } else {
        res.json(stations);
      }
    });
    // next();
  });

  app.get(route + '/:station_name', function(req, res, next) {
    Station.findOne({station_name: req.params.station_name}, function(err, stations) {
      if (err){
        res.send(err);
      } else {
        res.json(stations);
      }
    });

  });

  app.post(route, function(req, res, next) {

    var station = new Station();

    station.station_name = req.body.station_name;
    station.save(function(err) {
      if (err){
        res.status(403).send(err);
      } else {
        res.json({ message: 'Station created!' });
      }
    });
  });
}
