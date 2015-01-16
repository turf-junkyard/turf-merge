var clone = require('clone');
var union = require('turf-union');

/**
 * Takes a {@link FeatureCollection} of {@link Polygon} features and outputs a single merged
 * polygon feature.
 * @module turf/merge
 * @param {FeatureCollection} fc - a FeatureCollection of Polygon features
 * @return {Feature} a {@link Polygon} feature
 * @example
 * var a = turf.polygon([[[10,0],[20,10],[20,0],[10,0]]]);
 * a.properties.fill = '#0f0';
 * var b = turf.polygon([[[10+5,0+5],[20+5,10+5],[20+5,0+5],[10+5,0+5]]]);
 * b.properties.fill = '#00f';
 * var erased = turf.erase(JSON.parse(JSON.stringify(a)), b);
 * var a = turf.polygon([[[10,0],[20,10],[20,0],[10,0]]]);
 * a.properties.fill = '#0f0';
 * var b = turf.polygon([[[10+5,0+5],[20+5,10+5],[20+5,0+5],[10+5,0+5]]]);
 * b.properties.fill = '#00f';
 * var merged = turf.merge(turf.featurecollection([a, b]));
 * //=a
 * //=b
 * //=merged
 */
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
};
