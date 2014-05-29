// 1. run tin on points
// 2. merge the tin
var clone = require('clone')
var union = require('turf-union')

module.exports = function(polygons, done){

  var merged = clone(polygons.features[0]),
    features = polygons.features;

  for (var i = 0, len = features.length; i < len; i++) {
    var poly = features[i];

    if(poly.geometry){
      merged = union(merged, poly);
    }
  }

  return merged;
}
