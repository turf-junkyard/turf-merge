turf-merge
===========
[![build status](https://secure.travis-ci.org/Turfjs/turf-merge.png)](http://travis-ci.org/Turfjs/turf-merge)

Takes a feature collection of polygons and outputs a single merged polygon feature.

###Install

```sh
npm install turf-merge
```

###Parameters

|name|description|
|---|---|
|fc|a FeatureCollection|

###Usage

```js
merge(fc)
```

###Example

```js
var merge = require('turf-merge')
var fs = require('fs')

var polys = JSON.parse(fs.readFileSync('/path/to/polys.geojson'))

var merged = merge(polys)

console.log(merged)
```

