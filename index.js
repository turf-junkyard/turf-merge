var clone = require('clone');
var union = require('turf-union');

/**
 * Takes a {@link FeatureCollection} of {@link Polygon} features and returns a single merged
 * polygon feature. If the input Polygon features are not contiguous, this function returns a {@link MultiPolygon} feature.
 * @module turf/merge
 * @param {FeatureCollection} fc a FeatureCollection of {@link Polygon} features
 * @return {Feature} a {@link Polygon} or {@link MultiPolygon} feature
 * @example
 * var polygons = turf.featurecollection([
 *  turf.polygon([[
 *    [9.994812, 53.549487],
 *    [10.046997, 53.598209],
 *    [10.117721, 53.531737],
 *    [9.994812, 53.549487]
 *  ]], { fill: '#0f0' }),
 *  turf.polygon([[
 *    [10.000991, 53.50418],
 *    [10.03807, 53.562539],
 *    [9.926834, 53.551731],
 *    [10.000991, 53.50418]
 *  ]], { fill: '#00f' })
 * ]);
 *
 * var merged = turf.merge(polygons);
 *
 * //=polygons
 *
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
