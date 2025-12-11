/**
 * @param {string} s - The string to check
 * @returns {number} The maximum depth of the magic
 */
function maxDepth(s) {
  let count = 0;
  let depth = 0;
  let opened = 0;

  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    
    if (element === "[") {
      opened++;
      count++;

      if (opened > depth) depth++;

    } else {
      opened--;
      count--;
    }

    if (count < 0) {
      return -1;
    }
  }

  if (count != 0) {
    return -1;
  }

  return depth;
}

// Ejemplos:

console.log(maxDepth('[]')); // -> 1
console.log(maxDepth('[[]]')); // -> 2
console.log(maxDepth('[][]')); // -> 1
console.log(maxDepth('[[][]]')); // -> 2
console.log(maxDepth('[[[]]]')); // -> 3
console.log(maxDepth('[][[]][]')); // -> 2
console.log(maxDepth('[[][[]]]')); // -> 3
console.log(maxDepth('[[][[[][]]]]')); // -> 4

console.log(maxDepth('][')); // -> -1 (cierra antes de abrir)
console.log(maxDepth('[[[')); // -> -1 (faltan cierres)
console.log(maxDepth('[]]]')); // -> -1 (sobran cierres)
console.log(maxDepth('[][][')); // -> -1 (queda uno sin cerrar)
