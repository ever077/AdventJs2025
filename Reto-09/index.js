/**
 * @param {string} board - Represent the board situation
 * @param {string} moves - Movement direction
 * @returns {'fail' | 'crash' | 'success'}
 */
function moveReno(board, moves) {
  const arrBoard = board.split("\n").slice(1, -1);

  let rowPosition = arrBoard.findIndex(line => line.includes("@"));
  let colPosition = arrBoard[rowPosition].indexOf("@");
  let value;

  for (let i = 0; i < moves.length; i++) {
    switch (moves.charAt(i)) {
      case 'L':
        colPosition--;
        value = arrBoard[rowPosition]?.[colPosition];
        break;
      case 'R':
        colPosition++;
        value = arrBoard[rowPosition]?.[colPosition];
        break;
      case 'U':
        rowPosition--;
        value = arrBoard[rowPosition]?.[colPosition];
        break;
      case 'D':
        rowPosition++;
        value = arrBoard[rowPosition]?.[colPosition];
        break;
      default:
        break;
    }

    if (value == "*") {
      return 'success';
    } else if (value === "#" || value === undefined) {
      return 'crash';
    }
  }
  
  return 'fail';
}

// Ejemplos:

const board = `
.....
.*#.*
.@...
.....
`

console.log(moveReno(board, 'D'));
// ➞ 'fail' -> se mueve pero no recoge nada

console.log(moveReno(board, 'U'));
// ➞ 'success' -> recoge algo (*) justo encima

console.log(moveReno(board, 'RU'));
// ➞ 'crash' -> choca contra un obstáculo (#)

console.log(moveReno(board, 'RRRUU'));
// ➞ 'success' -> recoge algo (*)

console.log(moveReno(board, 'DD'));
// ➞ 'crash' -> se choca con la parte de abajo del tablero

console.log(moveReno(board, 'UUU'));
// ➞ 'success' -> recoge algo del suelo (*) y luego se choca por arriba

console.log(moveReno(board, 'RR'));
// ➞ 'fail' -> se mueve pero no recoge nada

console.log(moveReno(board, 'LUUU'));
// ➞ 'crash' -> se choca con la parte de arriba del tablero

console.log(moveReno(board, 'RRRRR'));
// ➞ 'crash' -> se choca con la parte de la derecha del tablero

console.log(moveReno(board, 'LLL'));
// ➞ 'crash' -> se choca con la parte de la izquierda del tablero
