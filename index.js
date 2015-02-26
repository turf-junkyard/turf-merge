var clone = require('clone');
var union = require('turf-union');

/**
 * Takes a set of polygons and returns a single merged
 * polygon feature. If the input polygon features are not contiguous, this function returns a {@link MultiPolygon} feature.
 * @module turf/merge
 * @category transformation
 * @param {FeatureCollection<Polygon>} fc input polygons
 * @return {Feature<(Polygon|MultiPolygon)>} merged polygon or multipolygon
 * @example
 * var polygons = {
 *   "type": "FeatureCollection",
 *   "features": [
 *     {
 *       "type": "Feature",
 *       "properties": {
 *         "fill": "#0f0"
 *       },
 *       "geometry": {
 *         "type": "Polygon",
 *         "coordinates": [[
 *           [9.994812, 53.549487],
 *           [10.046997, 53.598209],
 *           [10.117721, 53.531737],
 *           [9.994812, 53.549487]
 *         ]]
 *       }
 *     }, {
 *       "type": "Feature",
 *       "properties": {
 *         "fill": "#00f"
 *       },
 *       "geometry": {
 *         "type": "Polygon",
 *         "coordinates": [[
 *           [10.000991, 53.50418],
 *           [10.03807, 53.562539],
 *           [9.926834, 53.551731],
 *           [10.000991, 53.50418]
 *         ]]
 *       }
 *     }
 *   ]
 * };
 *
 * var merged = turf.merge(polygons);
 *
 * //=polygons
 *
 * //=merged
 */
module.exports = function(polygons){

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
