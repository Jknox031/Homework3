function generate() {
  // set password length/complexity
  let complexity = document.getElementById("CharacterAmountNumber").value;
  //possible password values
  let values = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+-=";

  let password = "";

  //creat for loop for password characters
  for (var i = 0; i <= complexity; i++) {
    password =
      password +
      values.charAt(math.floor(math.random() * math.floor(values.length - 1)));
  }

  //add password to display area
  document.getElementById("Generated Password").value = password;
}
