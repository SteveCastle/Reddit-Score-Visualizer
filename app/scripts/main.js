'use strict';
/* global d3 */
d3.json('http://www.reddit.com/r/pics.json', function(error, json){
	var data = json.data.children;
	data.forEach(function(d){d.data.created *=1000;});

	var display = d3.select('#display');
	var sdiv = display.append('svg').classed('scatter', true);
	var bdiv = display.append('svg').classed('brush', true);
	var tdiv = display.append('div').classed('table', true);

	var table = d3.chart.table();
    table.data(data);
    table(tdiv);

	var scatter = d3.chart.scatterplot();
    scatter.data(data);
    scatter(sdiv);
    
	var brush = d3.chart.brush();
    brush.data(data);
    brush(bdiv);

});