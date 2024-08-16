// Función para definir variables
function definirVariables() {
  let numeroUn = 1;           // Número
  let stringUn = '1';        // Cadena
  let numeroTreinta = 30;     // Número 
  let stringTreinta = '30';   // Cadena
  let numeroDiez = 10;        // Número
  let stringDiez = '10';      // Cadena

  return {
      numeroUn,
      stringUn,
      numeroTreinta,
      stringTreinta,
      numeroDiez,
      stringDiez
  };
}

// Función para comparar numeroUn y stringUn
function compararNumeroUnYStringUn() {
  const { numeroUn, stringUn } = definirVariables();

  if (numeroUn == stringUn) {
      console.log('Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes');
  } else {
      console.log('Las variables numeroUn y stringUn no tienen el mismo valor');
  }
}

// Función para comparar numeroTreinta y stringTreinta 
function compararNumeroTreintaYStringTreinta() {
  const { numeroTreinta, stringTreinta } = definirVariables();

  if (numeroTreinta === stringTreinta) {
      console.log('Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo');
  } else {
      console.log('Las variables numeroTreinta y stringTreinta no tienen el mismo tipo');
  }
}

// Función para comparar numeroDiez y stringDiez
function compararNumeroDiezYStringDiez() {
  const { numeroDiez, stringDiez } = definirVariables();

  if (numeroDiez == stringDiez) {
      console.log('Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes');
  } else {
      console.log('Las variables numeroDiez y stringDiez no tienen el mismo valor');
  }
}

// Llamar a las funciones de comparación
compararNumeroUnYStringUn();
compararNumeroTreintaYStringTreinta();
compararNumeroDiezYStringDiez();