'use strict';
/* global d3 */
d3.json('http://www.reddit.com/r/pics.json', function(error, json){
	var data = json.data.children;
	data.forEach(function(d){d.data.created *=1000;});

	var display = d3.select('#display');
	var ssvg = display.append('svg').classed('scatter', true).append('g').classed('scatter', true);
	var bsvg = display.append('svg').classed('brush', true);
	var tdiv = display.append('div').classed('table', true);

	var table = d3.chart.table();
    table.data(data);
    table(tdiv);

	var scatter = d3.chart.scatterplot();
    scatter.data(data);
    scatter(ssvg);
	var brush = d3.chart.brush();
    brush.data(data);
    brush(bsvg);

    brush.on('filter', function(filtered){
        console.log('filtered',filtered);
        scatter.data(filtered);
        scatter.update();
    });
    table.on('hover', function(hovered){
        scatter.highlight(hovered);
    });

});