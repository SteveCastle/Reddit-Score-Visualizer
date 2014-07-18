'use strict';
/* global d3 */

if(!d3.chart) {d3.chart = {};}

d3.chart.table = function(){
	var data;
	function chart(svg){
        var g = svg.append('g').
        attr('transform', 'translate(27,50)');

        var circles = g.selectAll('circle');
	}

	chart.data = function(d) {data = d; return chart;};
	return chart;
};

