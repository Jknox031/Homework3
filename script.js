// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
Form.addEventListener("generate", e => {
  e.preventDefault()
})






function generate(){

  // set password length/complexity
  let complexity = document.getElementById("CharacterAmountNumber").value;
  //possible password values
  let values = abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_-=+\;

  let password = "";

  //creat for loop for password characters
  for(var i = 0; i <= complexity; i++){
    password = password + values.charAt(math.random() * math.floor(value.length -1));
  }


  //add password to display area
  document.getElementById("generated password").value = password;

}