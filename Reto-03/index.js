/**
 * @param {number} size - The size of the gift
 * @param {string} symbol - The symbol to draw
 * @returns {string} The gift drawn
 */
function drawGift(size, symbol) {
  if (!Number.isInteger(size) || typeof symbol !== "string" || size < 2 || symbol.length != 1) {
    return "";
  }

  let result = "";

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (i == 0 || i == (size-1) || j == 0 || j == (size-1)) {
        result += symbol;
      } else {
        result += " ";
      }
    }

    if (i != (size-1)) {
      result += "\n";
    }
  }

  return result;
}

// Ejemplos:

const result = drawGift(2, "#");
console.log(result);

const result2 = drawGift(3, "*");
console.log(result2);

const result3 = drawGift(4, "!");
console.log(result3);

const result4 = drawGift(5, "+");
console.log(result4);

const result5 = drawGift(1, "-");
console.log(result5); // ""

const result6 = drawGift(4, "--");
console.log(result6); // ""

const result7 = drawGift("$", "-");
console.log(result7); // ""
