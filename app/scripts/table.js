'use strict';
/* global d3 */

if(!d3.chart) {d3.chart = {};}

d3.chart.table = function(){
	var data;
	function chart(svg){
	}

	chart.data = function(d) {data = d; return chart;};
	return chart;
};

