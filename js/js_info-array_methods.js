// https://javascript.info/array-methods#map-to-names
function mapToNames() {
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 28 };

  let users = [john, pete, mary];

  let names = users.map(user => user.name);

  alert(names); // John, Pete, Mary
}

// https://javascript.info/array-methods#map-to-objects
function mapToObjects() {
  let john = { name: "John", surname: "Smith", id: 1 };
  let pete = { name: "Pete", surname: "Hunt", id: 2 };
  let mary = { name: "Mary", surname: "Key", id: 3 };

  let users = [john, pete, mary];

  let usersMapped = users.map(user => ({
    fullName: user.name + " " + user.surname,
    id: user.id
  }));

  /*
  usersMapped = [
    { fullName: "John Smith", id: 1 },
    { fullName: "Pete Hunt", id: 2 },
    { fullName: "Mary Key", id: 3 }
  ]
  */

  alert(usersMapped[0].id) // 1
  alert(usersMapped[0].fullName) // John Smith
}

// https://javascript.info/array-methods#sort-users-by-age
function sortUsersByAge() {
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 28 };

  let arr = [pete, john, mary];

  // solution
  function sortByAge(arr) {
    arr.sort((a, b) => { return a.age - b.age });
  }

  console.log(JSON.parse(JSON.stringify(arr)));
  sortByAge(arr);
  console.log(JSON.parse(JSON.stringify(arr)));

  // now: [john, mary, pete]
  alert(arr[0].name); // John
  alert(arr[1].name); // Mary
  alert(arr[2].name); // Pete
}

sortUsersByAge();



