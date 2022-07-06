// 1- Dar vuelta una cadena
let cadena = "odnum aloh";
function getCadena(cadena) {
  resultado = "";
  for (let index = cadena.length - 1; index >= 0; index--) {
    resultado += cadena[index];
  }
  return resultado;
}
resultado = getCadena(cadena);
// 2- Contar cuantas veces se repite un caracter
let cadena2 = "asdklasjdadasdkjasdadjlaa3";
function getCharacter(cadena2, character) {
  let contador = 0;
  for (let index = 0; index < cadena2.length; index++) {
    cadena2.charAt(index) == character ? (contador += 1) : "";
  }
  return contador;
}
resultado2 = getCharacter(cadena2, "a");
// 3- Comparar cadenas
let text1 = "patataaaa";
let text2 = "pototoooa";
function countDistance(string1, string2) {
  distance = 0;
  for (let index = 0; index < string1.length; index++) {
    string1[index] != string2[index] ? "" : (distance += 1);
  }
  return distance;
}
resultado3 = countDistance(text1, text2);
// 4- Contador de palabras => El método split() divide un objeto de tipo String en un array
let textPalabras = "Hola este texto tiene muchas palabras";
function getQwords() {
  q = textPalabras.split(" ");
  return q;
}
words = getQwords();
// 5- HackerRank Plus Minus
arr = [-4, 3, -9, 0, 4, 1];
function countArray(array) {
  positivos = 0;
  negativos = 0;
  ceros = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      positivos += 1;
    } else if (array[i] == 0) {
      ceros += 1;
    } else {
      negativos += 1;
    }
  }
  let pos = (positivos / array.length).toFixed(6);
  let neg = (negativos / array.length).toFixed(6);
  let zer = (ceros / array.length).toFixed(6);

  console.log(pos + "\n" + neg + "\n" + zer);
}
countArray(arr);