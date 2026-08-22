const palindromes = function (str) {

  let arr = str.split("");
  let reversed = arr.slice();
  reversed.reverse();


  console.log(arr);
  console.log(reversed);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != reversed[i]) return false;
  }
  return true;
};


(palindromes('racecar!'));

let str = "A car, a man, a maraca.";
console.log(str);
console.log(str.replace(/[^\w]/g, ""));
console.log(str.replace(/[^\w\s\,]/g, ""));


const fibonacci = function (num) {
  if (num < 0) return "OOPS";
  if (num == 0) return 0;
  let a = 0, b = 1;
  for (let i = 1; i < num; i++) {
    console.log(a, b);
    let tmp = b;
    b += a;
    a = tmp;
  }
  return b;
};

fibonacci(5);


const findTheOldest = function (people) {
  return people.reduce((oldest, current) => {
    console.log(current);
    console.log(oldest.yearOfDeath - current.yearOfDeath);
    if (!current.yearOfDeath) current.yearOfDeath = new Date().getFullYear();
    return (oldest && oldest.yearOfDeath - oldest.yearOfBirth > current.yearOfDeath - current.yearOfBirth) ? oldest : current;
  }, {})
};

const people = [
  {
    name: "Carly",
    yearOfBirth: 1066,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]

console.log(findTheOldest(people));
