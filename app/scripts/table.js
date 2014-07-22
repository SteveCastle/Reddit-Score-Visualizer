'use strict';
/* global d3 */

if(!d3.chart) {d3.chart = {};}

d3.chart.table = function(){
	var dispatch = d3.dispatch(chart,'hover');
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

		rows.exit().remove();

		newRows.on('mouseover', function(d){
			d3.select(this).style('opacity',.9);
            dispatch.hover(d);
		});
		newRows.on('mouseout', function(d){
			d3.select(this).style('opacity',1);
            dispatch.hover([]);
		});
	}

	chart.data = function(d) {data = d; return chart;};
	return d3.rebind (chart, dispatch, 'on');
};