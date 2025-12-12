/**
 * @param {string[]} warehouse - The warehouse layout
 * @returns {number} The count of unwatched gifts
 */
function findUnsafeGifts(warehouse) {
  const rows = warehouse.length;
  const cols = warehouse[0].length;

  const directions = [
    // [row, col]
    [0, -1], // izquierda
    [0,  1], // derecha
    [-1, 0], // arriba
    [1,  0]  // abajo
  ];

  const isSafe = (r, c) => {
    return directions.some(([dirRow, dirCol]) => {
      const newDirRow = r + dirRow;
      const newDirCol = c + dirCol;

      if (newDirRow < 0 || newDirRow >= rows || newDirCol < 0 || newDirCol >= cols) return false;

      return (warehouse[newDirRow][newDirCol] === "#");
    })
  }

  let count = 0;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const element = warehouse[r][c];
      
      if (element === "*" && !isSafe(r, c)) {
        count++;
      }
    }
  }
  
  return count;
}

// Ejemplos:

console.log(findUnsafeGifts([
  '.*.',
  '*#*',
  '.*.'
])); // ➞ 0
// Todos los regalos están junto a una cámara

console.log(findUnsafeGifts([
  '...',
  '.*.',
  '...'
])); // ➞ 1
// Este regalo no tiene cámaras alrededor

console.log(findUnsafeGifts([
  '*.*',
  '...',
  '*#*'
])); // ➞ 2
// Los regalos en las esquinas superiores no tienen cámaras alrededor

console.log(findUnsafeGifts([
  '.....',
  '.*.*.',
  '..#..',
  '.*.*.',
  '.....'
])); // ➞ 4
// Los cuatro regalos no tienen cámaras, porque están en diagonal a la cámara

console.log(findUnsafeGifts([
  '.*...',
  '.*.*.',
  '**#**',
  '.*.*.',
  '.....'
])); // ➞ 7
// Los dos regalos que estan a la izquierda y derecha del # tienen cámaras, los demás no
