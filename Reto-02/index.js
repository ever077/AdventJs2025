/**
 * @param {Array<{ toy: string, quantity: number }>} giftsToProduce
 * @returns {string[]} Array of manufactured gifts
 */
function manufactureGifts(giftsToProduce) {
  const filteredGifts = [];

  giftsToProduce.forEach(gift => {
    if (!Number.isNaN(gift.quantity) && gift.quantity > 0) {
      for (let i = 0; i < gift.quantity; i++) {
        filteredGifts.push(gift.toy);
      }
    }
  })
  
  return filteredGifts;
}

// Ejemplos:

const production1 = [
  { toy: 'car', quantity: 3 },
  { toy: 'doll', quantity: 1 },
  { toy: 'ball', quantity: 2 }
]

const result1 = manufactureGifts(production1)
console.log(result1) // ['car', 'car', 'car', 'doll', 'ball', 'ball']

const production2 = [
  { toy: 'train', quantity: 0 }, // no se fabrica
  { toy: 'bear', quantity: -2 }, // tampoco
  { toy: 'car', quantity: 'two' }, // tampoco
  { toy: 'puzzle', quantity: 1 }
]

const result2 = manufactureGifts(production2)
console.log(result2) // ['puzzle']

const production3 = []
const result3 = manufactureGifts(production3)
console.log(result3) // []
