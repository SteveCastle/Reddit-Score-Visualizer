'use strict';
/* global d3 */

if(!d3.chart) {d3.chart = {};}

d3.chart.brush = function(){
	var data;
	var dispatch = d3.dispatch(chart,'filter');

	function chart(el){
		var extent = d3.extent(data, function(d){
			return d.data.created;
		});
		var scale = d3.time.scale()
		.domain(extent)
		.range([0,600]);

		var brush = d3.svg.brush();
		brush.x(scale);

		var g = el.append('g');
		brush(g);

		g.attr('transform', 'translate(50, 100)');
		g.selectAll('rect').attr('height', 42);
		g.selectAll('.background')
		.style({fill: '#4B9E9E', visibility: 'visible'});
		g.selectAll('.extent')
		.style({fill: '#78C5C5', visibility: 'visible'});
		g.selectAll('.resize rect')
		.style({fill: '#276C86', visibility: 'visible'});

		brush.on('brushend', function(){
            var ext = brush.extent();
            var filtered = data.filter(function(d){
                return (d.data.created > ext[0] && d.data.created < ext[1]);
            });
            dispatch.filter(filtered);
        });

	}





	chart.data = function(d) {data = d; return chart;};
	return d3.rebind (chart, dispatch, 'on');
};