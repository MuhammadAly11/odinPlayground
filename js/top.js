// https://www.theodinproject.com/lessons/foundations-loops-and-arrays#summary
function sumOfTripledEvens(arr) {
  return arr
    .filter((i) => i % 2 === 0)
    .map((i) => i * 3)
    .reduce((acc, i) => acc + i);
}

console.log(sumOfTripledEvens([1, 2, 3, 4, 5]));
