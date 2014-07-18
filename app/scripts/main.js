'use strict';
/* global d3 */
d3.json('http://www.reddit.com/r/pics.json', function(error, json){
	var data = json.data.children
	.sort(function(a,b){return b.data.score - a.data.score;});
	data.forEach(function(d){d.data.created *=1000;});

	var display = d3.select('#display');

	var tdiv = display.append('div').classed('table', true);

	var table = d3.chart.table();
    table.data(data);
    table(tdiv);

});