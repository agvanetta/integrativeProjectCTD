//1-diagonal difference
function diagonalDifference(arr) {
  let n = arr[0].length;
  let leftSum = 0;
  let rightSum = 0;
  let sum = 0;
  for (let i = 0, i2 = n - 1; i < n; i++, i2--) {
    leftSum += arr[i][i];
    rightSum += arr[i][i2];
  }
  sum = leftSum - rightSum;
  return sum < 0 ? sum * -1 : sum;
}
//2-plus minus
arr = [-4, 3, -9, 0, 4, 1];
function countArray(arr) {
  let positivos = 0;
  let negativos = 0;
  let ceros = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positivos += 1;
    } else if (arr[i] == 0) {
      ceros += 1;
    } else {
      negativos += 1;
    }
  }
  let pos = (positivos / arr.length).toFixed(6);
  let neg = (negativos / arr.length).toFixed(6);
  let zer = (ceros / arr.length).toFixed(6);

  console.log(pos + "\n" + neg + "\n" + zer);
}
// countArray(arr);
//3-Staircase detail
function Staircase(n) {
  let espacios = " ";
  let simbolo = "#";

  for (let i = 0; i < n; i++) {
    let pizarra = "";
    for (let b = n; b > n - n; b--) {
      if (b - 2 < i) {
        pizarra += simbolo;
      } else {
        pizarra += espacios;
      }
    }
    console.log(pizarra);
  }
}
// 4- Mini-Max Sum

