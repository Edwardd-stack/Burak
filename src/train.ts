console.log("\n >> S - Task << \n");

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
// function palindromCheck(a: string) {
//   const reverseStr = a.split("").reverse().join("");
//   return reverseStr === a;
// }

// console.log(palindromCheck("dad"));
// console.log(palindromCheck("son"));
// console.log("");

// O-TASK

// Shunday function yozing, u har xil valuelardan iborat array qabul qilsin va array ichidagi sonlar yigindisini hisoblab chiqqan javobni qaytarsin. MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45.

// function calculateSumOfNumbers(arr: any[]) {
//   return arr
//     .filter((item) => typeof item === "number")
//     .reduce((a, b) => a + b, 0);
// }

// console.log(calculateSumOfNumbers([5, 10, "15", false]));
// console.log(calculateSumOfNumbers([10, "10", { son: 10 }, true, 35]), "\n");

// P-TASK
// function objectToArray(obj: object) {
//   return Object.entries(obj);
// }

// console.log(objectToArray({ a: 10, b: 20 }));
// console.log(objectToArray({ x: 9, y: 35, z: 55 }));

// Q-TASK
// Shunday function yozing, u 2 ta parametrgga ega bolib birinchisi object, ikkinchisi string. Agar string parametr objectni propertysi bolsa true bolmasa false qaytarsin. MASALAN: hasProperty({ name: "BMW", model: "M3" }, "model") return true; hasProperty({ name: "BMW", model: "M3" }, "year") return false.

// function hasProperty(obj: object, key: string): boolean {
//   return Object.prototype.hasOwnProperty.call(obj, key);
// }

// // const hasProperty = (obj: object, key: string): boolean => key in obj;

// console.log(hasProperty({ name: "BMW", model: "M3" }, "model")); // true
// console.log(hasProperty({ name: "BMW", model: "M3" }, "year")); // false

// R-TASK
// Shunday function yozing, u string parametrga ega bolsin. String "1+2" holatda pass qilinganda string ichidagi sonlar yigindisini number holatda qaytarsin. MASALAN: calculate("1+3") return 4.

// function calculate(str: string): number {
//   return str.split("+").reduce((sum, num) => sum + Number(num), 0);
// }

// console.log(calculate("1+3"));
// console.log(calculate("1+2+3"));

// S-TASK

// Shunday function yozing, u numberlardan tashkil topgan array qabul qilsin va osha numberlar orasidagi tushib qolgan sonni topib uni return qilsin. MASALAN: missingNumber([3, 0, 1]) return 2.

function missingNumber(nums: number[]): number {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([0, 1]));
