var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var StationSchema   = new Schema({
    station_name: {type:String , unique: true, required : true},
    station_location: {type:String, unique : false, required : false}
});

module.exports = mongoose.model('Station', StationSchema);
