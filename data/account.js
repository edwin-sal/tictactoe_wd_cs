let firstNameList = [];
let lastName = [];
let email = [];
let password = [];      

function signUpFirstName() {
    var firstName = document.getElementById("first-name");
    firstName.push(firstName.value);
}

function signUpFirstName() {
  var firstName = document.getElementById("first-name").value;
  firstNameList.push(firstName);
  //   console.log(firstName);
  console.log("First name list:", firstNameList);
  localStorage.setItem("firstNameList", JSON.stringify(firstNameList)); // Store the updated list in localStorage
        var li = localStorage.getItem("firstNameList");

        console.log(li);

  // Perform any further operations with the first name value here
}
