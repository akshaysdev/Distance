module.exports = class CityGraph {
  constructor(cities, routes) {
    this.adjacencyList = new Map();
    // add cities as nodes or vertex
    cities.forEach(this.addNode);
    // add routes as edge
    routes.forEach((route) => {
      this.addEdge(route[0], route[1]);
    });
  }

  addNode(city) {
    this.adjacencyList.set(city, []);
  }

  addEdge(start, end) {
    this.adjacencyList.get(start).push(end);
    this.adjacencyList.get(end).push(start);
  }
};
