/**
 * @param {string[][]} warehouse
 * @param {number[]} drops
 * @returns {string[][]}
 */
function clearGifts(warehouse, drops) {
  const clean = (wh) => {
    for (let i = 0; i < wh.length; i++) {
      const row = wh[i];

      const isFullRow = row.every(item => {
        return item !== '.';
      });
      
      if (isFullRow) {
        wh.splice(i, 1);
        wh.unshift(Array(row.length).fill('.'));
      }
    }

    return wh;
  }

  const numberOfRows = warehouse.length;
  let currentWarehouse = warehouse;

  for (const col of drops) {
    for (let row = (numberOfRows - 1); row >= 0 ; row--) {
      const item = currentWarehouse[row][col];
      
      if (item === '.') {
        currentWarehouse[row][col] = '#';
        break;
      }
    }

    currentWarehouse = clean(currentWarehouse);
  }

  return currentWarehouse;
}

// Ejemplos:

console.log(clearGifts(
  [
    ['.', '.', '.'],
    ['.', '.', '.'],
    ['#', '.', '#']
  ],
  [1]
));

/*
1. El regalo cae en la columna 1
2. La fila 2 se convierte en [# # #].
3. La fila 2 está completa, el robot la limpia.
6. Se añade una nueva fila vacía en la posición 0.

Resultado:
[
  ['.', '.', '.'],
  ['.', '.', '.'],
  ['.', '.', '.']
]
*/

console.log(clearGifts(
  [
    ['.', '.', '#'],
    ['#', '.', '#'],
    ['#', '.', '#']
  ],
  [0, 1, 2]
));

/*
1. El regalo cae en la columna 0
2. El regalo cae en la columna 1
3. La fila 2 se convierte en [# # #]
4. La fila 2 está completa, el robot la limpia

Por ahora queda así:
[
  ['.', '.', '.']
  ['#', '.', '#'],
  ['#', '.', '#'],
]

5. El regalo cae en la columna 2

Resultado:
[
  ['.', '.', '#'],
  ['#', '.', '#'],
  ['#', '.', '#']
]
*/
