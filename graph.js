module.exports = class CityGraph {
  constructor(cities, routes) {
    this.adjacencyList = new Map();
    // add cities as vertex
    cities.forEach(this.addNode.bind(this));
    // add routes as edge
    for (let [start, end, distance] of routes) {
      this.addEdge(start, end, distance);
    }
  }

  addNode(city) {
    this.adjacencyList.set(city, []);
  }

  addEdge(start, end, distance) {
    this.adjacencyList.get(start).push([end, distance]);
    this.adjacencyList.get(end).push([start, distance]);
  }

  calculateDistance(start, end, visited = new Set(), answer = 0) {
    visited.add(start);

    const destinations = this.adjacencyList.get(start);

    for (const [city, distance] of destinations) {
      if (city === end) {
        answer += distance;
        return answer;
      }

      if (!visited.has(city)) {
        answer += distance;
        return this.calculateDistance(city, end, visited, answer);
      }
    }

    return 'Invalid route';
  }
};
