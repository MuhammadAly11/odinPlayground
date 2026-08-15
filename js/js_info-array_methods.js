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

// https://javascript.info/array-methods#get-average-age
function getAverageAgeScope() {
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 29 };

  let arr = [john, pete, mary];

  // solution
  function getAverageAge(users) {
    let sum = users.reduce((sum, current) => sum + current.age, 0)
    return sum / users.length;
  }

  alert(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28
}

// https://javascript.info/array-methods#create-keyed-object-from-array
function createKeyedObjectFromArray() {
  // solution
  function groupById(users) {
    return users.reduce((previous, current) => {
      previous[current.id] = current;
      return previous;
    }, {});
  }

  let users = [
    { id: 'john', name: "John Smith", age: 20 },
    { id: 'ann', name: "Ann Smith", age: 24 },
    { id: 'pete', name: "Pete Peterson", age: 31 },
  ];

  let usersById = groupById(users);

  /*
  // after the call we should have:
  
  usersById = {
    john: {id: 'john', name: "John Smith", age: 20},
    ann: {id: 'ann', name: "Ann Smith", age: 24},
    pete: {id: 'pete', name: "Pete Peterson", age: 31},
  }
  */
  console.log(usersById);
}

createKeyedObjectFromArray();
