const routes = [
  ['Delhi', 'Nagpur', 500],
  ['Nagpur', 'Chennai', 400],
  ['Hyderabad', 'Nagpur', 250],
  ['Banglore', 'Hyderabad', 300]
];

const cities = new Set();
routes.forEach((route) => {
  cities.add(route[0]);
  cities.add(route[1]);
});

module.exports = { routes, cities };