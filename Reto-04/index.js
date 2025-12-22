/**
 * @param {string} code - The code to decipher
 * @returns {string} The deciphered PIN
 */
function decodeSantaPin(code) {
  // obtengo un array con los codigos separados y sin los corchetes
  const inputs = code.split(']').map(i => i.slice(1)).filter(i => i !== "");

  // Si no me enviaron 4 dígitos retorno null
  if (inputs.length != 4) {
    return null;
  }

  // Si el primer dígito es un "<" retorno null
  if ((inputs[0][0] == "<")) {
    return null;
  }

  let decodedPin = "";

  for (let index = 0; index < inputs.length; index++) {
    const input = inputs[index];
    let sum;

    if (input[0] == "<") {
      decodedPin = decodedPin.concat(decodedPin.charAt(index-1))
    } else {
      // Si el primer valor del bloque [] no es un dígito retorno null
      if (Number.isNaN(Number(input[0]))) {
        return null;
      }

      sum = Number.parseInt(input[0]);

      for (let i = 1; i < input.length; i++) {
        switch (input[i]) {
          case "+":
            sum += 1;
            break;
          case "-":
            sum -= 1;
            break;
          default:
            return null; // Si los valores del 1 en adelante del bloque no son una opción válida retorno null
        }
      }

      if (sum < 0) {
        sum = ((sum % 10) + 10)
      } else if (sum > 9) {
        sum = sum % 10;
      }

      decodedPin = decodedPin.concat(sum);
    }

  }

  return decodedPin;
}

// Ejemplos:

const result = decodeSantaPin('[1++][2-][3+][<]');
console.log(result); // "3144"

const result1 = decodeSantaPin('[9+++][1--][<][0--]');
console.log(result1); // "2998"

const result2 = decodeSantaPin('[9+][0-][4][<]')
console.log(result2); // "0944"

const result3 = decodeSantaPin('[1+][2-]')
console.log(result3); // null (solo 2 dígitos)

const result4 = decodeSantaPin('[<][0-][4][<]')
console.log(result4); // null ("<" en el primer lugar)

const result5 = decodeSantaPin('[9++][<][<][<]')
console.log(result5); // "1111"

const result6 = decodeSantaPin('[9][a-][4][<]')
console.log(result6); // null ("a" no es un numero)

const result7 = decodeSantaPin('[9][-][4][<]')
console.log(result7); // null (en el segundo dígito no hay un numero al comienzo)
