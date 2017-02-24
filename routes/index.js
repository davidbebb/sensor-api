
module.exports = function(config, app, route){

  app.get(route, function(req, res, next) {
    res.status(200).json({foo:'bar'});
    next();
  });

  app.post(route, function(req, res, next) {
    console.log(req.query)

    console.log(req.body)
    if (req.body.station_time){
      console.log(Date.parse(req.body.station_time)/1000);
    }
    res.status(200).send();
    next();
  });

}
