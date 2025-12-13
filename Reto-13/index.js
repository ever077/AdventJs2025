/**
 * @param {string[]} factory - The factory layout
 * @returns {'completed'|'broken'|'loop'} Result of the gift journey
 */
function runFactory(factory) {
  const moves = {
    '>': [0, 1], // right
    '<': [0, -1], // left
    '^': [-1, 0], // up
    'v': [1, 0], // down
  }

  const rows = factory.length;
  const cols = factory[0].length;

  const visited = [];

  let i = 0;
  let j = 0;

  while (!visited.some(([r, c]) => r === i && c === j)) {
    if (i < 0 || i >= rows || j < 0 || j >= cols) return 'broken';
    
    const element = factory[i][j];
      
    const [r, c] = moves[element] || [0, 0];

    if (r === 0 && c === 0) return 'completed';

    visited.push([i, j]);
    
    i += r;
    j += c;
  }

  return 'loop';
}

// Ejemplos:

console.log(runFactory([
  '>>.'
])); // 'completed'

console.log(runFactory([
  '>>>'
])); // 'broken'

console.log(runFactory([
  '>><'
])); // 'loop'

console.log(runFactory([
  '>>v',
  '..<'
])); // 'completed'

console.log(runFactory([
  '>>v',
  '<<<'
])); // 'broken'

console.log(runFactory([
  '>v.',
  '^..'
])); // 'completed'

console.log(runFactory([
  'v.',
  '^.'
])); // 'loop'
