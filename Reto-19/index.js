/**
 * @param {string[][]} routes - Array of [origin, destination] pairs
 * @returns {string[]} The reconstructed route
 */
function revealSantaRoute(routes) {
  const mapRoutes = new Map(routes);
  
  let current = routes[0][0];
  
  const result = [current];

  while (mapRoutes.has(current)) {
    const next = mapRoutes.get(current);

    result.push(next);

    current = next;
  }

  return result;
}

// Ejemplos:

console.log(revealSantaRoute([
  ['MEX', 'CAN'],
  ['UK', 'GER'],
  ['CAN', 'UK']
]));
// → ['MEX', 'CAN', 'UK', 'GER']

console.log(revealSantaRoute([
  ['USA', 'BRA'],
  ['JPN', 'PHL'],
  ['BRA', 'UAE'],
  ['UAE', 'JPN'],
  ['CMX', 'HKN']
]));
// → ['USA', 'BRA', 'UAE', 'JPN', 'PHL']

console.log(revealSantaRoute([
  ['STA', 'HYD'],
  ['ESP', 'CHN']
]));
// → ['STA', 'HYD']
