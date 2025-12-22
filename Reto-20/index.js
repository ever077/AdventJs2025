/**
 * @param {string[][]} warehouse
 * @param {number[]} drops
 * @returns {string[][]}
 */
function dropGifts(warehouse, drops) {
  for (const col of drops) {
    for (let row = (warehouse.length - 1); row >= 0 ; row--) {
      const item = warehouse[row][col];
      
      if (item === '.') {
        warehouse[row][col] = '#';
        break;
      }
    }
  }

  return warehouse;
}

// Ejemplos:

console.log(dropGifts(
  [
    ['.', '.', '.'],
    ['.', '#', '.'],
    ['#', '#', '.']
  ],
  [0]
));
/*
[
  ['.', '.', '.'],
  ['#', '#', '.'],
  ['#', '#', '.']
]
*/

console.log(dropGifts(
  [
    ['.', '.', '.'],
    ['#', '#', '.'],
    ['#', '#', '#']
  ],
  [0, 2]
));
/*
[
  ['#', '.', '.'],
  ['#', '#', '#'],
  ['#', '#', '#']
]
*/

console.log(dropGifts(
  [
    ['.', '.', '.'],
    ['.', '.', '.'],
    ['.', '.', '.']
  ],
  [0, 1, 2]
));
/*
[
  ['.', '.', '.'],
  ['.', '.', '.'],
  ['#', '#', '#']
]
*/

console.log(dropGifts(
  [
    ['#', '#'],
    ['#', '#']
  ],
  [0, 0]
));
/*
[
  ['#', '#']
  ['#', '#']
]
*/

console.log(dropGifts(
  [
    ['.', '#'],
    ['#', '#']
  ],
  [0, 0]
));
/*
[
  ['#', '#']
  ['#', '#']
]
*/
