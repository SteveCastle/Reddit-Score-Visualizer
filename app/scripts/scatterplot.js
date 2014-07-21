'use strict';
/* global d3 */

if(!d3.chart) {d3.chart = {};}

d3.chart.scatterplot = function(){
	var data;
    var g;
    function chart(container){
        g = container;
        chart.update();
    }
    
	chart.update = function update(){
		console.log(data);
		console.log(g);
        var maxScore = d3.max(data, function(d){return d.data.score;});
        console.log(maxScore);

        var yScale = d3.scale.linear()
        .domain([0,maxScore])
        .range([380,20]);
        console.log(yScale);

        var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient('right')
        .ticks(5);

        var xScale = d3.time.scale()
        .domain(d3.extent(data, function(d){return d.data.created;}))
        .range([60,580]);

        var xAxis = d3.svg.axis()
        .scale(xScale)
        .orient('right')
        .ticks(2)
        .tickFormat(d3.time.format('%x %H : %M'));

        var yg =g.select('.yaxis')
        .transition()
        .call(yAxis);

        g.attr('transform', 'translate(0,0)');
        var circles = g.selectAll('circle')
        .data(data);

        circles.enter()
        .append('circle');

       circles
       .transition()
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

        yAxis(g);
	}

	chart.data = function(d) {data = d; return chart;};
	return chart;
};

