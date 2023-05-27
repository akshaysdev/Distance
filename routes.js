const routes = [
  ['Delhi', 'Nagpur'],
  ['Nagpur', 'Chennai'],
  ['Hyderabad', 'Nagpur'],
  ['Banglore', 'Hyderabad']
];

const cities = new Set();
routes.forEach((route) => {
  cities.add(route[0]);
  cities.add(route[1]);
});

module.exports = { routes, cities };