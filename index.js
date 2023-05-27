const CityGraph = require('./graph');
const { cities, routes } = require('./routes');

let graph = new CityGraph(cities, routes);

console.log(graph.calculateDistance('Delhi', 'Chennai'));
console.log(graph.calculateDistance('Banglore', 'Nagpur'));

// before any connecting routes
console.log(graph.calculateDistance('Banglore', 'Haryana'));

// after updating connecting routes
routes.push(['Delhi', 'Haryana', 500]);
cities.add('Delhi');
cities.add('Haryana');
graph = new CityGraph(cities, routes);
console.log(graph.calculateDistance('Banglore', 'Haryana'));

console.log(graph.calculateDistance('Chennai', 'Chennai'));
