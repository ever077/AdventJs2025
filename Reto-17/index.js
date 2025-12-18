/**
 * @param {string[][]} board
 * @returns {boolean}
 */
function hasFourLights(board) {
  const hasLine = ((e, row, col) => {
    let notFound = false;
    
    for (let pos = 1; pos < 4; pos++) {
      if (
        col + pos >= board[row].length ||
        e !== board[row][col + pos]
      ) {
        notFound = true;
      }
    }

    if (notFound) {
      for (let pos = 1; pos < 4; pos++) {
        if (
          row + pos >= board.length ||
          e !== board[row + pos][col]
        ) {
          return false;
        }
      }
    }

    return true;
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

console.log(hasFourLights([
  ['.', '.', '.', '.', '.'],
  ['R', 'R', 'R', 'R', '.'],
  ['G', 'G', '.', '.', '.']
]));
// true → hay 4 luces rojas en horizontal

console.log(hasFourLights([
  ['.', 'G', '.', '.'],
  ['.', 'G', '.', '.'],
  ['.', 'G', '.', '.'],
  ['.', 'G', '.', '.']
]));
// true → hay 4 luces verdes en vertical

console.log(hasFourLights([
  ['R', 'G', 'R'],
  ['G', 'R', 'G'],
  ['G', 'R', 'G']
]));
// false → no hay 4 luces del mismo color seguidas

console.log(hasFourLights([
  ['.', 'G', '.', '.'],
  ['.', 'R', '.', '.'],
  ['G', 'R', 'R', 'R'],
  ['.', 'G', '.', '.'],
  ['.', 'G', '.', '.'],
  ['R', 'G', 'R', 'R'],
  ['.', '.', '.', '.']
]));
// false → no hay 4 luces del mismo color seguidas

console.log(hasFourLights([
  ['.', 'G', '.', '.'],
  ['.', 'R', '.', '.'],
  ['G', 'R', 'R', 'R'],
  ['.', 'G', '.', '.'],
  ['.', 'G', '.', '.'],
  ['R', 'G', 'R', 'R'],
  ['.', 'G', '.', '.']
]));
// true → hay 4 luces del mismo color seguidas
