var clone = require('clone');
var union = require('turf-union');

/**
 * Takes a {@link FeatureCollection} of {@link Polygon} features and outputs a single merged
 * polygon feature.
 * @module turf/merge
 * @param {FeatureCollection} fc - a FeatureCollection of Polygon features
 * @return {Feature} a {@link Polygon} feature
 * @example
 * var poly1 = turf.polygon([[
 *  [9.994812, 53.549487],
 *  [10.046997, 53.598209],
 *  [10.117721, 53.531737],
 *  [9.994812, 53.549487]
 * ]]);
 * poly1.properties.fill = '#0f0';
 * var poly2 = turf.polygon([[
 *  [10.000991, 53.50418],
 *  [10.03807, 53.562539],
 *  [9.926834, 53.551731],
 *  [10.000991, 53.50418]
 * ]]);
 * poly2.properties.fill = '#00f';
 *
 * var polygons = turf.featurecollection([poly1, poly2]);
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
