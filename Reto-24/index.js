/**
 * @param {object} tree1 - The first binary tree.
 * @param {object} tree2 - The second binary tree.
 * @returns {[boolean, string]}
 */
function isTreesSynchronized(tree1, tree2) {
  // Método recursivo
  const isSynchronized = (t1, t2) => {
    if (t1 === undefined && t2 === undefined)  {
      return true;
    }
      
    if (t1.value !== t2.value) {
      return false;
    } else {
      return isSynchronized(t1.left, t2.right) && isSynchronized(t1.right, t2.left);
    }
  }

  return [isSynchronized(tree1, tree2), tree1.value];
}

// Ejemplos:

const tree1 = {
  value: '🎄',
  left: { value: '⭐' },
  right: { value: '🎅' }
}

const tree2 = {
  value: '🎄',
  left: { value: '🎅' },
  right: { value: '⭐' }
}

console.log(isTreesSynchronized(tree1, tree2)); // [true, '🎄']

/*
  tree1          tree2
   🎄              🎄
  / \             / \
⭐   🎅         🎅   ⭐
*/

const tree3 = {
  value: '🎄',
  left: { value: '🎅' },
  right: { value: '🎁' }
}

console.log(isTreesSynchronized(tree1, tree3)); // [false, '🎄']

const tree4 = {
  value: '🎄',
  left: { value: '⭐' },
  right: { value: '🎅' }
}

console.log(isTreesSynchronized(tree1, tree4)); // [false, '🎄']

console.log(isTreesSynchronized(
  { value: '🎅' },
  { value: '🧑‍🎄' }
)); // [false, '🎅']

const tree5 = {
  value: '🎄',
  left: {
    value: '⭐',
    left: { value: 'A' },
    right: { value: 'B' }
  },
  right: {
    value: '🎅',
    left: { value: 'C' },
    right: { value: 'D' }
  }
}

const tree6 = {
  value: '🎄',
  left: {
    value: '🎅',
    left: { value: 'D' },
    right: { value: 'C' }
  },
  right: {
    value: '⭐',
    left: { value: 'B' },
    right: { value: 'A' }
  }
}

/*
    tree5          tree6
    🎄              🎄
    / \             / \
  ⭐   🎅        🎅  ⭐
  / \  / \       / \   / \
  A  B  C  D    D   C  B  A
*/

console.log(isTreesSynchronized(tree5, tree6)); // [true, '🎄']
