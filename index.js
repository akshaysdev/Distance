const CityGraph = require('./graph');
const { cities, routes } = require('./routes');

const graph = new CityGraph(cities, routes);

console.log(graph.calculateDistance('Delhi', 'Chennai'));
console.log(graph.calculateDistance('Banglore', 'Nagpur'));
