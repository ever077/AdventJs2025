/**
 * @param {string[][]} board
 * @returns {boolean}
 */
function hasFourInARow(board) {
  const directions = [
    [0, 1], // Derecha
    [1, 1], // Diagonal Derecha
    [1, 0], // Abajo
    [1, -1] // Diagonal Izquierda
  ]

  const hasLine = ((e, row, col) => {
    let hasLine = false;

    directions.forEach(([i, j], index) => {
      let countEquals = 1;

      let iteratorRow = row;
      let iteratorCol = col;

      for (let pos = 1; pos < 4; pos++) {
        iteratorRow += i;
        iteratorCol += j;

        if (iteratorRow < 0 || iteratorRow >= board.length) break;
        
        let item = board[iteratorRow][iteratorCol];
        
        if (item === e) countEquals++;
      }

      if (countEquals === 4) hasLine = true;
    });
    
    return hasLine;
  });

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (
        board[i][j] !== '.' &&
        hasLine(board[i][j], i, j)
      ) {
        return true;
      }
    }
  }

  return false;
}

// Ejemplos:

console.log(hasFourInARow([
  ['R', '.', '.', '.'],
  ['.', 'R', '.', '.'],
  ['.', '.', 'R', '.'],
  ['.', '.', '.', 'R']
]));
// true → hay 4 luces rojas en diagonal ↘

console.log(hasFourInARow([
  ['.', '.', '.', 'G'],
  ['.', '.', 'G', '.'],
  ['.', 'G', '.', '.'],
  ['G', '.', '.', '.']
]));
// true → hay 4 luces verdes en diagonal ↙

console.log(hasFourInARow([
  ['R', 'R', 'R', 'R'],
  ['G', 'G', '.', '.'],
  ['.', '.', '.', '.'],
  ['.', '.', '.', '.']
]));
// true → hay 4 luces rojas en horizontal

console.log(hasFourInARow([
  ['R', 'G', 'R'],
  ['G', 'R', 'G'],
  ['G', 'R', 'G']
]));
// false → no hay 4 luces del mismo color seguidas

console.log(hasFourInARow([
  ['R', 'R', '.', 'R'],
  ['G', 'G', '.', 'G'],
  ['.', '.', '.', '.'],
  ['.', 'R', 'R', 'R']
]));
// false → no hay 4 luces del mismo color seguidas
