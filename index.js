const CityGraph = require("./graph");
const { cities, routes } = require("./routes");

const graph = new CityGraph(cities, routes);

console.log(graph.adjacencyList);
