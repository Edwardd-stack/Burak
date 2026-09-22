console.log("\n M - Task \n");

// M-TASK
function SquareNumbers(numbers: number[]) {
  let result: { number: number; square: number }[] = [];

  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    let sq = num * num;

    result.push({ number: num, square: sq });
  }

  return result;
}

console.log(SquareNumbers([5, 7, 9]));
