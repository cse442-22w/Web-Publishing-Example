"use strict";     // the code should be executed in "strict mode".
                  // With strict mode, you can not, for example, use undeclared variables

var line_svg;    // used for svg later
var colorSet;    // used for color scheme later
var sunshineArray = [];   // used to store data later

// preparation for our svg
var margin = { top: 50, right: 35, bottom: 50, left: 50 },
w = 650 - (margin.left + margin.right),
h = 520 - (margin.top + margin.bottom);
var legendSpace = 130;

// preparation for our x/y axis
var y = d3.scaleLinear()
          .range([h, 0]);
var x = d3.scaleTime()
          .range([0, w]);
var yAxis = d3.axisLeft(y);
var xAxis = d3.axisBottom(x)
  .tickFormat(d3.timeFormat("%b"));   // %b: abbreviated Month format (Mon, Jun..)

var citySet = [];

// once finish processing data, make a graph!
d3.csv("https://cse442-22w.github.io/Web-Publishing-Example/sunshine.csv").then(function(data) {
  data.forEach(function(d){
    sunshineArray.push(d);
    if (!citySet.includes(d.city)) {
      citySet.push(d.city);
    }
  })
  drawLineD3();
});

function drawLineD3() {

}
