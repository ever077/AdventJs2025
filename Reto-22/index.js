/**
 * @param {string[][]} maze
 * @returns {boolean}
 */
function canEscape(maze) {
  const isValid = (row, col, maze) => {
    return (
      row >= 0 &&
      row < maze.length &&
      col >= 0 &&
      col < maze[0].length &&
      (maze[row][col] === '.' || maze[row][col] === 'E')
    );
  }

  const getNeighbors = ([i, j], maze) => {
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
      
      if (isValid(newPosRow, newPosCol, maze)) {
        neighbors.push([newPosRow, newPosCol]);
      }
    }

    return neighbors;
  }

  const getInitialPos = (maze) => {
    for (let indexRow = 0; indexRow < maze.length; indexRow++) {
      const row = maze[indexRow];
      const indexCol = row.indexOf('S');

      if (indexCol !== -1) return [indexRow, indexCol];
    }

    return null;
  }
  
  const start = getInitialPos(maze);
  if (!start) return false;

  const cellsToVisit = [start];
  const visited = new Set();
  visited.add(`${start[0]},${start[1]}`);
  
  while (cellsToVisit.length !== 0) {
    const [i, j] = cellsToVisit.shift();

    if (maze[i][j] === 'E') return true;
    
    const neighbors = getNeighbors([i, j], maze);

    for (const [ni, nj] of neighbors) {
      const key = `${ni},${nj}`;

      if (!visited.has(key)) {
        visited.add(key);
        cellsToVisit.push([ni, nj]);
      }
    }
  }

  return false;
}

// Ejemplos:

console.log(canEscape([
  ['S', '.', '#', '.'],
  ['#', '.', '#', '.'],
  ['.', '.', '.', '.'],
  ['#', '#', '#', 'E']
]));
// → true

console.log(canEscape([
  ['S', '#', '#'],
  ['.', '#', '.'],
  ['.', '#', 'E']
]));
// → false

console.log(canEscape([['S', 'E']]));
// → true

console.log(canEscape([
  ['S', '.', '.', '.', '.'],
  ['#', '#', '#', '#', '.'],
  ['.', '.', '.', '.', '.'],
  ['.', '#', '#', '#', '#'],
  ['.', '.', '.', '.', 'E']
]));
// → true

console.log(canEscape([
  ['S', '.', '.'],
  ['.', '.', '.'],
  ['#', '#', '#'],
  ['.', '.', 'E']
]));
// → false
