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
  
  console.log(hasUniqueCharacters("String")); 
  console.log(hasUniqueCharacters("Some String")); 
