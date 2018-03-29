var width  = 200;
var height = 150;

var svgChina = d3.select("#china").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(0,0)");

var projectionChina = d3.geo.mercator()
    // .center([450, 10])
    .scale(100)
    .translate([width/2, height/2]);

var pathChina = d3.geo.path()
    .projection(projectionChina);

var colorChina = d3.scale.category20();

d3.json("json/china.geojson", function(error, root) {
    if (error)
        return console.error(error);
    console.log(root.features);

    svgChina.selectAll("path")
        .data( root.features )
        .enter()
        .append("path")
        .attr("stroke","#000")
        .attr("stroke-width",1)
        .attr("fill", function(d,i){
            return colorChina(i);
        })
        .attr("d", pathChina )
        .on("mouseover",function(d,i){
            d3.select(this)
                .attr("fill","yellow");
        })
        .on("mouseout",function(d,i){
            d3.select(this)
                .attr("fill",colorChina(i));
        });
});