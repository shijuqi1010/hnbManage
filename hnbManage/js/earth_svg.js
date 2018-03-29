var width = 700;
var height = 500;

var svg = d3.select("body").select(".content").select(".center").append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("full", "green")
    .append("g")
    .attr("transform", "translate(0,0)");

var projection = d3.geo.orthographic()
    .scale(200)
    .translate([width / 2, height / 2])
    .clipAngle(90);

var path = d3.geo.path()
    .projection(projection);

var λ = d3.scale.linear()
    .domain([0, width])
    .range([-180, 180]);

var φ = d3.scale.linear()
    .domain([0, height])
    .range([90, -90]);

svg.on("mousemove", function () {
    var p = d3.mouse(this);
    projection.rotate([λ(p[0]), φ(p[1])]);
    svg.selectAll("path").attr("d", path);
});

d3.json("/mbostock/raw/4090846/world-110m.json", function (error, world) {
    if (error) throw error;

    svg.append("path")
        .datum(topojson.feature(world, world.objects.land))
        .attr("class", "land")
        .style("fill", "#0686A9")
        .attr("d", path);
});