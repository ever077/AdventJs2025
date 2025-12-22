/** @param {number} height - Height of the tree
 *  @param {string} ornament - Character to use as ornament
 *  @param {number} frequency - How often ornaments appear
 *  @returns {string} The decorated tree
 */
function drawTree(height, ornament, frequency) {
  let result = "";
  let countFreq = 1;
  let qtyOrnament = 1;

  for (let i = 1; i <= height; i++) {
    let row = " ".repeat(height - i);

    for (let j = 0; j < qtyOrnament; j++) {
      if (countFreq == frequency) {
        // pongo ornament
        row += ornament;
        countFreq = 1;
      } else {
        // pongo *
        row += "*";
        countFreq++;
      }
    }

    qtyOrnament += 2;
    result += (row + "\n");
  }

  return result.concat(" ".repeat(height - 1) + "#");
}

// Ejemplos:

console.log(drawTree(5, 'o', 2));
//     *
//    o*o
//   *o*o*
//  o*o*o*o
// *o*o*o*o*
//     #

console.log(drawTree(3, '@', 3));
//   *
//  *@*
// *@**@
//   #

console.log(drawTree(4, '+', 1));
//    +
//   +++
//  +++++
// +++++++
//    #
