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
let arreglo = [1, 5, 3, 4, 2];
function minMax(arr) {
  let ordenado = arr.sort();
  let minimos = 0;
  let maximos = 0;
  let length = arr.length - 1;
  for (let i = 0, i2 = length; i < length; i++, i2--) {
    minimos += ordenado[i];
    maximos += ordenado[i2];
  }
  console.log(minimos + " " + maximos);
}
// 5- Birthday Cake Candles
candlesEj = [5, 2, 1, 3, 3];
function birthdayCakeCandlesen(candles) {
  let tallClandles = 0;
  let array2 = candles.sort();
  let condition = array2[array2.length - 1];
  for (let i = 0; i < candles.length; i++) {
    if (candles[i] === condition) {
      tallClandles += 1;
    }
  }
  console.log(tallClandles);
  return tallClandles;
}
// 6- Time Conversion s
s = "12:45:54PM"; // 00:12:00PM
function timeConversion(s) {
  let slice = s.slice(-2);
  let hours = Number(s.slice(0, 2));
  let minutes = Number(s.slice(3, 5));
  let seconds = Number(s.slice(6, 8));
  let result = "";
  if (slice == "AM") {
    result =
      (hours == 12 ? "00" : hours < 10 ? "0" + hours : hours) +
      ":" +
      (minutes < 10 ? "0" + minutes : minutes) +
      ":" +
      (seconds < 10 ? "0" + seconds : seconds);
  } else {
    result =
      (hours == 12 ? 12 : hours + 12) +
      ":" +
      (minutes < 10 ? "0" + minutes : minutes) +
      ":" +
      (seconds < 10 ? "0" + seconds : seconds);
  }
  return result;
}
// 6- AngryProfessor(k, a)
function angryProfessor(k, a) {
  let keepClass = "";
  let onTime = 0;
  // Write your code here
  for (let i = 0; i < a.length; i++) {
    a[i] <= 0 ? (onTime += 1) : "";
  }
  onTime >= k ? (keepClass = "NO") : (keepClass = "YES");
  return keepClass;
}
// 7- beautifulDays(i, j, k) => const convertAndReverse = n.toString().split("").reverse().join("");
function beautifulDays(i, j, k) {
  let start = i;
  let end = j;
  let rev = 0;
  let beatifulDays = 0;

  for (let i = start; i <= end; i++) {
    rev = i.toString().split("").reverse().join("");
    (i - Number(rev)) % k === 0 ? (beatifulDays += 1) : "";
  }
  return beatifulDays;
}
// 8-gradingStudents
function gradingStudents(grades) {
  return grades.map(function (grade) {
    return grade >= 38 && grade % 5 >= 3 ? grade + 5 - (grade % 5) : grade;
  });
}
// 9- divisibleSumPairs
function divisibleSumPairs(n, k, ar) {
  // Write your code here
  let count = 0;
  for (let i = 0; i < ar.length; i++) {
    for (let j = i + 1; j < ar.length; j++) {
      if ((ar[i] + ar[j]) % k === 0) {
        count += 1;
      }
    }
  }
  return count;
}
// 10 - migratoryBirds
function migratoryBirds(arr) {
  // Write your code here
  let birdTipe = 6;
  let count = -1;
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    arr.forEach((element) => {
      if (element === arr[i]) {
        count += 1;
      }
    });
    if (count > result) {
      birdTipe = arr[i];
      result = count;
      count = -1;
    } else if (count === result && arr[i] < birdTipe) {
      birdTipe = arr[i];
      result = count;
      count = -1;
    }
    count = -1;
  }
  return birdTipe;
}
// 11- breakingRecords
function breakingRecords(scores) {
  // Write your code here
  let highest = scores[0];
  let lowest = scores[0];
  let countH = 0;
  let countL = 0;

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > highest) {
      countH += 1;
      highest = scores[i];
    } else if (scores[i] < lowest) {
      countL += 1;
      lowest = scores[i];
    }
  }
  return [countH, countL];
}
// 12- breakingRecords