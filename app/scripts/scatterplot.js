'use strict';
/* global d3 */

if(!d3.chart) {d3.chart = {};}

d3.chart.scatterplot = function(){
	var data;
	function chart(el){
		console.log(data);
		console.log(el);
        var maxScore = d3.max(data, function(d){return d.data.score;});
        console.log(maxScore);

        var yScale = d3.scale.linear()
        .domain([0,maxScore])
        .range([400,0]);

        var xScale = d3.time.scale()
        .domain(d3.extent(data, function(d){return d.data.created;}))
        .range([0,600]);



        var g = el.append('g').
        attr('transform', 'translate(27,50)');

        var circles = g.selectAll('circle')
        .data(data);

        circles.enter()
        .append('circle')
        .attr({
            cx: function(d,i){ return xScale(d.data.created)},
            cy: function(d){ return yScale(d.data.score);},
            r: 5
        });

        circles.exit()
        .remove();

        circles.on('click', function(d){
            console.log(d);
        });
	}

	chart.data = function(d) {data = d; return chart;};
	return chart;
};

