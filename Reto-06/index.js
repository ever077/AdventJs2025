/**
 * @param {{ hand: 'L' | 'R', color: string }[]} gloves
 * @returns {string[]} Colors of matched pairs
 */
function matchGloves(gloves) {
  const result = [];
  const pairCounts = {};

  for (let i = 0; i < gloves.length; i++) {
    const glove = gloves[i];

    const oppositeHand = (glove.hand === "L") ? "R" : "L";

    const havePair = (pairCounts[glove.color]?.[oppositeHand] > 0) ? true : false;

    if (havePair) {

      pairCounts[glove.color][oppositeHand] -= 1;
      result.push(glove.color);

    } else {

      if (!pairCounts[glove.color]) {
        pairCounts[glove.color] = { L: 0, R: 0 };
      }
      
      pairCounts[glove.color][glove.hand] += 1;
      
      // Otra forma de hacerlo, pero menos legible
      // pairCounts[glove.color] = pairCounts[glove.color] || { L: 0, R: 0 };
      // pairCounts[glove.color][glove.hand] += 1;
    }

    // Descomentar para visualizar los pasos intermedios
    // console.log(pairCounts);
  }

  return result;
}

// Ejemplos:

const gloves = [
  { hand: 'L', color: 'red' },
  { hand: 'R', color: 'red' },
  { hand: 'R', color: 'green' },
  { hand: 'L', color: 'blue' },
  { hand: 'L', color: 'green' }
]

console.log(matchGloves(gloves));
// ["red", "green"]

const gloves2 = [
  { hand: 'L', color: 'gold' },
  { hand: 'R', color: 'gold' },
  { hand: 'L', color: 'gold' },
  { hand: 'L', color: 'gold' },
  { hand: 'R', color: 'gold' }
]

console.log(matchGloves(gloves2));
// ["gold", "gold"]

const gloves3 = [
  { hand: 'L', color: 'red' },
  { hand: 'R', color: 'green' },
  { hand: 'L', color: 'blue' }
]

console.log(matchGloves(gloves3));
// []

const gloves4 = [
  { hand: 'L', color: 'green' },
  { hand: 'L', color: 'red' },
  { hand: 'R', color: 'red' },
  { hand: 'R', color: 'green' }
]

console.log(matchGloves(gloves4));
// ['red', 'green']

const gloves5 = [
  { hand: 'L', color: 'red' },
  { hand: 'L', color: 'red' },
  { hand: 'L', color: 'blue' },
  { hand: 'L', color: 'yellow' },
  { hand: 'L', color: 'green' },
  { hand: 'R', color: 'blue' },
  { hand: 'L', color: 'red' },
  { hand: 'R', color: 'red' },
  { hand: 'R', color: 'red' },
  { hand: 'R', color: 'green' },
  { hand: 'L', color: 'green' },
  { hand: 'L', color: 'green' },
  { hand: 'L', color: 'blue' },
  { hand: 'L', color: 'green' },
  { hand: 'R', color: 'green' }
]

console.log(matchGloves(gloves5));
// ["blue", "red", "red", "green", "green"]
