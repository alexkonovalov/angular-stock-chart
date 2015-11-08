app.directive('lineChart', function ($parse) {
       var directiveDefinitionObject = {
           restrict: 'E',
           replace: false,
           scope: { data: '=chartData' },
           link: function (scope, element, attrs) {

               var drawGraph = function (elem, source) {
                   var existingSvg = d3.select(elem[0]).select("svg");
                   if (existingSvg)
                       existingSvg.remove();


                   // Set the dimensions of the canvas / graph
                   var margin = { top: 30, right: 20, bottom: 30, left: 50 },
                       width = 600 - margin.left - margin.right,
                       height = 270 - margin.top - margin.bottom;

                   // Set the ranges
                   var x = d3.time.scale().range([0, width]);
                   var y = d3.scale.linear().range([height, 0]);

                   // Define the axes
                   var xAxis = d3.svg.axis().scale(x)
                       .orient("bottom").ticks(5);

                   var yAxis = d3.svg.axis().scale(y)
                       .orient("left").ticks(5);


                   // Define the line
                   var valueline = d3.svg.line()
                       .x(function (d) { return x(d.date); })
                       .y(function (d) { return y(d.value); });

                   // Adds the svg canvas
                   var svg = d3.select(elem[0])
                       .append("svg")
                           .attr("width", width + margin.left + margin.right)
                           .attr("height", height + margin.top + margin.bottom)
                       .append("g")
                           .attr("transform",
                                 "translate(" + margin.left + "," + margin.top + ")");


                   // Scale the range of the data
                   x.domain(d3.extent(source, function (d) { return d.date; }));
                   y.domain([0, d3.max(source, function (d) { return d.value; })]);

                   // Add the valueline path.
                   svg.append("path")
                       .attr("class", "line")
                       .attr("d", valueline(source));

                   // Add the X Axis
                   svg.append("g")
                       .attr("class", "x axis")
                       .attr("transform", "translate(0," + height + ")")
                       .call(xAxis);

                   // Add the Y Axis
                   svg.append("g")
                       .attr("class", "y axis")
                   .call(yAxis);
               };

               scope.$watch('data', function (newVal) {
                   if(newVal)
                        drawGraph(element, newVal);
               });

           }
       };
       return directiveDefinitionObject;
   });