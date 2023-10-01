//ejercicio 1

function CaracterUnico(str) {
    const charSet = new Set();
  
    for (let char of str) {
      if (charSet.has(char)) {
        return false; 
      }
      charSet.add(char);
    }
  
    return true; 
  }
  
  console.log(hasUniqueCharacters("String")); // true
  console.log(hasUniqueCharacters("Some String")); // false



///ejercicio 2
function FactoresPrimos(n) {
    const factores = [];
    let divisor = 2;
  
    while (n >= 2) {
      if (n % divisor === 0) {
        factores.push(divisor);
        n = n / divisor;
      } else {
        divisor++;
      }
    }
  
    return factores;
  }

  