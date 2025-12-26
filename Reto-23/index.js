/**
 * @param {string[][]} map - The town map.
 * @returns {number} - Minimum steps to deliver all gifts.
 */
function minStepsToDeliver(map) {
  const isValid = (row, col, map) => {
    return (
      row >= 0 &&
      row < map.length &&
      col >= 0 &&
      col < map[0].length &&
      (map[row][col] === '.' || map[row][col] === 'G')
    );
  }

  const getNeighbors = ([i, j], map) => {
    const movements = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0]
    ];

    const neighbors = [];

    for (const [row, col] of movements) {
      const newPosRow = row + i;
      const newPosCol = col + j;
      
      if (isValid(newPosRow, newPosCol, map)) {
        neighbors.push([newPosRow, newPosCol]);
      }
    }

    return neighbors;
  }

  const getStartPosition = (map) => {
    for (let indexRow = 0; indexRow < map.length; indexRow++) {
      const row = map[indexRow];
      const indexCol = row.indexOf('S');

      if (indexCol !== -1) return [indexRow, indexCol];
    }

    return null;
  }

  const getNumberOfGoals = (map) => {
    let goals = 0;

    for (const row of map) {
      for (const cell of row) {
        if (cell === 'G') goals++;
      }
    }

    return goals;
  }

  const start = getStartPosition(map);
  if (!start) return -1;

  const visited = new Set();
  let queue = [[...start, 0]];
  visited.add(`${start[0]},${start[1]}`);

  let totalSteps = 0;
  let goalsFound = 0;
  
  while (queue.length !== 0) {
    const [r, c, distance] = queue.shift();
    
    if (map[r][c] === 'G') {
      totalSteps += distance;
      goalsFound++;
    }

    const neighbors = getNeighbors([r, c], map);

    for (const [nr, nc] of neighbors) {
      const key = `${nr},${nc}`;

      if (!visited.has(key)) {
        visited.add(key);
        queue.push([nr, nc, distance + 1]);
      }
    }
  }

  return (goalsFound === getNumberOfGoals(map)) ? totalSteps : -1;
}

// Ejemplos:

console.log(minStepsToDeliver([
  ['S', '.', 'G'],
  ['.', '#', '.'],
  ['G', '.', '.']
]));
// Resultado: 4
/* 
Explicación:
- Distancia mínima de S (0,0) a G (0,2): 2 pasos
- Distancia mínima de S (0,0) a G (2,0): 2 pasos
- Total: 2 + 2 = 4
*/

console.log(minStepsToDeliver([
  ['S', '#', 'G'],
  ['#', '#', '.'],
  ['G', '.', '.']
]));
// Resultado: -1
// (La casa en (0,2) es inalcanzable por los obstáculos)

console.log(minStepsToDeliver([['S', 'G']]));
// Resultado: 1

console.log(minStepsToDeliver([
  ['S', '.', 'G'],
  ['.', '.', '.'],
  ['G', '#', 'G']
]));
// Resultado: 8

console.log(minStepsToDeliver([
  ['S', 'G', 'G'],
  ['.', '.', '.'],
  ['G', '#', 'G']
]));
// Resultado: 9

console.log(minStepsToDeliver([
  ['S', 'G', 'G', '#'],
  ['.', '.', '.', '.'],
  ['G', '#', '#', '.'],
  ['.', '#', '.', 'G']
]));
// Resultado: 11

console.log(minStepsToDeliver([
  ['S', 'G', 'G', 'G', 'G', 'G', 'G']
]));
// Resultado: 21
