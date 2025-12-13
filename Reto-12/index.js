/**
 * @param {string} elf1 - The moves of the first elf
 * @param {string} elf2 - The moves of the second elf
 * @return {number} - The result of the battle
 */
function elfBattle(elf1, elf2) {
  const points = {
    'A': 1,
    'B': 0,
    'F': 2
  }

  let pointsElf1 = 3;
  let pointsElf2 = 3;

  /**
   * @param {string} e1 - The element of the first elf
   * @param {string} e2 - The element of the second elf
   * @return {number, number} - [Points of damage from e2 to e1, Points of damage from e1 to e2]
   */
  const battle = (e1, e2) => {
    const isBlock = (e1 === 'B' && e2 === 'A') || (e2 === 'B' && e1 === 'A');

    if (isBlock) {
      return [0, 0];
    }

    return [points[e2], points[e1]]
  }

  const rounds = Math.min(elf1.length, elf2.length);

  for (let i = 0; i < rounds; i++) {
    const e1 = elf1[i];
    const e2 = elf2[i];
    
    const [d1, d2] = battle(e1, e2);

    pointsElf1 -= d1;
    pointsElf2 -= d2;

    if (pointsElf1 <= 0 && pointsElf2 <= 0) return 0;
    if (pointsElf1 <= 0) return 2;
    if (pointsElf2 <= 0) return 1;
  }

  if (pointsElf1 === pointsElf2) return 0;

  return pointsElf1 > pointsElf2 ? 1 : 2;
}

// Ejemplos:

console.log(elfBattle('A', 'B'));
// Ronda 1: A vs B -> Elfo 2 bloquea
// Resultado: Elfo 1 = 3 de vida
//            Elfo 2 = 3 de vida
// → 0

console.log(elfBattle('F', 'B'));
// Ronda 1: F vs B -> Elfo 2 recibe 2 de daño (F no se bloquea)
// Resultado: Elfo 1 = 3 de vida
//            Elfo 2 = 1 de vida
// → 1

console.log(elfBattle('AAB', 'BBA'));
// R1: A vs B → Elfo 2 bloquea
// R2: A vs B → Elfo 2 bloquea
// R3: B vs A → Elfo 1 bloquea
// Resultado: Elfo 1 = 3, Elfo 2 = 3
// → 0

console.log(elfBattle('AFA', 'BBA'));
// R1: A vs B → Elfo 2 bloquea
// R2: F vs B → Elfo 2 recibe 2 de daño (F no se bloquea)
// R3: A vs A → ambos -1
// Resultado: Elfo 1 = 2, Elfo 2 = 0
// → 1

console.log(elfBattle('AFAB', 'BBAF'));
// R1: A vs B → Elfo 2 bloquea
// R2: F vs B → Elfo 2 recibe 2 de daño (F no se bloquea)
// R3: A vs A → ambos -1 → Elfo 2 llega a 0 ¡Batalla termina!
// R4: no se juega, ya que Elfo 2 no tiene vida
// → 1

console.log(elfBattle('AA', 'FF'));
// R1: A vs F → Elfo 1 -2, Elfo 2 -1
// R2: A vs F → Elfo 1 -2, Elfo 2 -1 → Elfo 1 llega a -1
// → 2
