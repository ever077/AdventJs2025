/**
 * @param {object} workshop - A representation of the workshop
 * @param {string|number|boolean} gift - The gift to find
 * @returns {number[]} The path to the gift
 */
function findGiftPath(workshop, gift) {
  const recursiveFind = (object, searchVal, route = []) => {
    for (const key in object) {
      const element = object[key];
      const newRoute = [...route, key];

      if (element === searchVal) {
        return newRoute;
      }
      
      if (element !== null && typeof element === 'object') {
        const result = recursiveFind(element, searchVal, newRoute);
        if (result.length > 0) return result;
      }
    }
    return [];
  }

  return recursiveFind(workshop, gift, []);
}

// Ejemplos:

const workshop = {
  storage: {
    shelf: {
      box1: 'train',
      box2: 'switch'
    },
    box: 'car'
  },
  gift: 'doll'
}

console.log(findGiftPath(workshop, 'train'));
// ➜ ['storage', 'shelf', 'box1']

console.log(findGiftPath(workshop, 'switch'));
// ➜ ['storage', 'shelf', 'box2']

console.log(findGiftPath(workshop, 'car'));
// ➜ ['storage', 'box']

console.log(findGiftPath(workshop, 'doll'));
// ➜ ['gift']

console.log(findGiftPath(workshop, 'plane'));
// ➜ []
