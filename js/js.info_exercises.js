// https://javascript.info/while-for#output-even-numbers-in-the-loop
for (let i = 2; i <= 10; i++) {
  if (i % 2 != 0) continue;
  console.log(i);
}

// https://javascript.info/while-for#replace-for-with-while
let i = 0;
while (i < 3) {
  console.log(`number ${i}!`);
  i++;
}

// https://javascript.info/while-for#repeat-until-the-input-is-correct
let num = 0;
do {
  num = prompt("Enter a number > 100: ");
  console.log(num);
} while (num <= 100 && num);

// https://javascript.info/while-for#output-prime-numbers
let n = +prompt("Enter number > 2: ");
outer: for (let i = 2; i < n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      continue outer;
    }
  }
  console.log(i);
}
