'use strict';
/* global d3 */

if(!d3.chart) {d3.chart = {};}

d3.chart.table = function(){
	var data;
	function chart(el){
		var table = el.append('table').classed('table', true);
		var rows = table.selectAll('tr.rows')
		.data(data);

		var newRows = rows.enter().append('tr');

		newRows.append('td')
		.text(function(d){return d.data.score;});

        newRows.append('td')
		.append('img')
		.attr({src: function(d){return d.data.thumbnail;}});

        newRows.append('td')
		.append('a')
		.attr({href: function(d){return d.data.url;}})
		.text(function(d){return d.data.title;});

        newRows.append('td')
		.text(function(d){return d.data.created;});

	}

	chart.data = function(d) {data = d; return chart;};
	return chart;
};