// solution to check the login exercise https://javascript.info/logical-operators#check-the-login

let user = prompt("Who's there?");

if (user == "Admin") {
  let pass = prompt("Password?");
  if (pass == "TheMaster") {
    alert("Welcome!");
  } else if (!pass) {
    alert("Canceld");
  } else {
    alert("Wrong password");
  }
} else if (user == null || user == "") {
  alert("Canceled");
} else {
  alert("I don't know you");
}
