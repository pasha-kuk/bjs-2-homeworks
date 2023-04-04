function getArrayParams(...arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }
  avg = sum / arr.length;

  let fixedAvg = avg.toFixed(2);
  console.log(min, max, Number(fixedAvg));
  return { min: min, max: max, avg: Number(fixedAvg) };
}
getArrayParams(5);

function summElementsWorker(...arr) {
  if (arguments.length == 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }
  console.log(sum);
  return sum;
}
summElementsWorker();

function differenceMaxMinWorker(...arr) {
  if (arguments.length == 0) {
    return 0;
  }
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let difference = max - min;
  if (difference === -Infinity) {
    difference = +0;
  }
  console.log(difference);
  return difference;
}
differenceMaxMinWorker(12, 45);

function differenceEvenOddWorker(...arr) {
  if (arguments.length == 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  difference = sumEvenElement - sumOddElement;
  console.log(difference);
  return difference;
}
differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35);

function averageEvenElementsWorker(...arr) {
  if (arguments.length == 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        sumEvenElement += arr[i];
        countEvenElement++;
      }
    }
    avg = sumEvenElement / countEvenElement;
    console.log(avg);
    return avg;
  }
averageEvenElementsWorker();

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    let numFromFunc = func(...arrOfArr[i]);
    if (maxWorkerResult < numFromFunc) {
      maxWorkerResult = numFromFunc;
    }
  }
  console.log(maxWorkerResult);
  return maxWorkerResult;
}

const arr = [
  [1000, 10, 11, 20, 10],
  [67, 10, 2, 39, 88],
  [72, 75, 51, 87, 43],
  [30, 41, 55, 96, 62]
];
makeWork(arr, summElementsWorker);
