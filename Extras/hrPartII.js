// Apple and Orange
// s : punto de partida de la ubicación de la casa de Sam.
// t : ubicación final de la ubicación de la casa de Sam.
// a : ubicación del manzano.
// b : ubicación del naranjo.
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  let applesInHouse = 0;
  let orangesInHouse = 0;

  for (let i = 0; i < apples.length; i++) {
    if (apples[i] + a >= s && apples[i] + a <= t) {
      applesInHouse += 1;
    }
  }

  for (let j = 0; j < oranges.length; j++) {
    if (oranges[j] + b >= s && oranges[j] + b <= t) {
      orangesInHouse += 1;
    }
  }
  console.log(applesInHouse);
  console.log(orangesInHouse);
}
//  kangaroo
function kangaroo(x1, v1, x2, v2) {
  // Write your code here
  let result = "NO";
  if (v1 <= v2) return result;
  while (x1 <= x2) {
    x1 += v1;
    x2 += v2;
    if (x1 === x2) {
      result = "YES";
      break;
    }
  }
  return result;
  //This code can be refactored algebraically using the ternary operator in one line:
  //return v2 < v1 && (x2 - x1) % (v1 - v2) == 0 ? "YES" : "NO";
}
// getTotalX
function getTotalX(a, b) {
  // Write your code here
  let validCount = 0;

  for (let x = 1; x <= 100; x++) {
    if (a.every((int) => x % int == 0)) {
      if (b.every((int) => int % x == 0)) {
        validCount++;
      }
    }
  }
  //Significa esto: ¿Por cada valor ( int) en la matriz ( a), es xdivisible por ese valor?
  return validCount;
}
