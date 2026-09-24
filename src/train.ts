console.log("\n >> N - Task << \n");

// M-TASK
// function SquareNumbers(numbers: number[]) {
//   let result: { number: number; square: number }[] = [];

//   for (let i = 0; i < numbers.length; i++) {
//     let num = numbers[i];
//     let sq = num * num;

//     result.push({ number: num, square: sq });
//   }

//   return result;
// }

// console.log(SquareNumbers([5, 7, 9]));

// function palindromCheck(word: string): boolean {
//   let reversed = "";
//   let i = word.length - 1;
//   while (i >= 0) {
//     reversed = reversed + word[i];
//     i--;
//   }
//   return word === reversed;
// }
// console.log(palindromCheck("DaD"));
// console.log(palindromCheck("2002"));

// function palindromeCheck(str: string): boolean {
//   return str.split("").reverse().join("") === str;
// }

// ***** N task ***** //
function palindromCheck(a: string) {
  const reverseStr = a.split("").reverse().join("");
  return reverseStr === a;
}

console.log(palindromCheck("dad"));
console.log(palindromCheck("son"));
console.log("");
