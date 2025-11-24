// // https://javascript.info/while-for
// // https://javascript.info/while-for#output-even-numbers-in-the-loop
// for (let i = 2; i <= 10; i++) {
//   if (i % 2 != 0) continue;
//   console.log(i);
// }
//
// // https://javascript.info/while-for#replace-for-with-while
// let i = 0;
// while (i < 3) {
//   console.log(`number ${i}!`);
//   i++;
// }
//
// // https://javascript.info/while-for#repeat-until-the-input-is-correct
// let num = 0;
// do {
//   num = prompt("Enter a number > 100: ");
//   console.log(num);
// } while (num <= 100 && num);
//
// // https://javascript.info/while-for#output-prime-numbers
// let n = +prompt("Enter number > 2: ");
// outer: for (let i = 2; i < n; i++) {
//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) {
//       continue outer;
//     }
//   }
//   console.log(i);
// }

// 
// // https://javascript.info/array-methods#tasks
// 
// // https://javascript.info/array-methods#translate-border-left-width-to-borderleftwidth
// function camelize(str) {
//   let splited = str.split("-");
//   let camelized = splited.splice(0, 1);
//
//   camelized = camelized.concat(
//     splited.map((word) => {
//       return word.slice(0, 1).toUpperCase().concat(word.slice(1));
//     }),
//   );
//
//   return camelized.join("");
// }
//
// console.log(camelize("list-style-image"));
// console.log(camelize("list-style-image") == "listStyleImage");
// 

// // https://javascript.info/array-methods#filter-range
// let arr = [5, 3, 8, 1];
//
// function filterRange(arr, min, max) {
//   return arr.filter((item) => item >= min && item <= max);
// }
//
// let filtered = filterRange(arr, 1, 4);
// console.log(filtered); // 3,1 (matching values)
// console.log(arr); // 5,3,8,1 (not modified)
// 

// // https://javascript.info/array-methods#filter-range-in-place
// let arr = [5, 3, 8, 1];
//
// function filterRangeInPlace(arr, min, max) {
//   for (let i = 0; i < arr.length; i++) {
//     if (!(min <= arr[i] && arr[i] <= max)) {
//       arr.splice(i, 1);
//       i--;
//     }
//   }
// }
//
// filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
// console.log(arr); // [3, 1]
// arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 2, 5); // removed the numbers except from 1 to 4
// console.log(arr); // [3, 1]
//

// // https://javascript.info/array-methods#sort-in-decreasing-order
// let arr = [5, 2, 1, -10, 8];
// arr.sort((a, b) => b - a);
// console.log(arr); // 8, 5, 2, 1, -10
//

// // https://javascript.info/array-methods#copy-and-sort-array
// let arr = ["HTML", "JavaScript", "CSS"];

// function copySorted(arr) {
//   var narr = arr.slice(0);
//   return narr.sort();
// }

// let sorted = copySorted(arr);
// console.log(sorted); // CSS, HTML, JavaScript
// console.log(arr); // HTML, JavaScript, CSS (no changes)
// 

// // https://javascript.info/array-methods#shuffle-an-array
// let arr = [1, 2, 3];

// function shuffle(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let rNum = Math.floor(Math.random() * arr.length); 
//     let tmp = arr[i];
//     arr[i] = arr[rNum];
//     arr[rNum] = tmp;
//   }
// }

// shuffle(arr);
// console.log(arr);
// shuffle(arr);
// console.log(arr);
// shuffle(arr);
// console.log(arr);
// 

// // https://javascript.info/array-methods#filter-unique-array-members
// function unique(arr) {
//   let uniArr = [];
//   for(let item of arr) {
//     if (!uniArr.includes(item)) uniArr.push(item);
//   }
//   return uniArr;
// }

// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// console.log( unique(strings) ); // Hare, Krishna, :-O
// 