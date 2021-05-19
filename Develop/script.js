// Assignment code here
// User input variables
var enter;
var confirmSpecial;
var confirmNumbers;
var confirmLowerCase;
var confirmUpperCase;

// Create variables for all characters
// Special characters
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
// Numbers
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// lowerCase
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//  upperCase
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // Ask the user how long the password would be
  var passwordLength = prompt("How many charactes would you like to have in your password? Choose between 8 to 128");
  var selectedCharacters = [];
  while (passwordLength < 8 || passwordLength > 128) {
    alert ("Password lenght must be between 8 to 128 characters long");
    passwordLength = prompt("How many charactes would you like to have in your password? Choose between 8 to 128");
  };
  
  // Ask the user if they want any character for their password
  confirmSpecial = confirm("Would you like special characters?")
  confirmNumbers = confirm("Would you like numbers?")
  confirmLowerCase = confirm("Would you like lowercase?")
  confirmUpperCase = confirm("Would you like uppercase?")

  // If the user cancel all the confirms
  while (!confirmSpecial && !confirmUpperCase && !confirmNumbers && !confirmLowerCase) {
    alert("At least one character must be selected")
    confirmSpecial = confirm("Would you like special characters?")
    confirmNumbers = confirm("Would you like numbers?")
    confirmLowerCase = confirm("Would you like lowercase?")
    confirmUpperCase = confirm("Would you like uppercase?")
  }
    // If confirm one of any characters
  if (confirmSpecial) {
    console.log("Special character confirm");
    selectedCharacters = selectedCharacters.concat(special)
  }
  if (confirmNumbers) {
    console.log("Numbers character confirm");
    selectedCharacters = selectedCharacters.concat(numbers)
  }
  if (confirmLowerCase) {
    console.log("Lower character confirm");
    selectedCharacters = selectedCharacters.concat(lowerCase)
  }
  if (confirmUpperCase) {
    console.log("Upper character confirm");
    selectedCharacters = selectedCharacters.concat(upperCase)
  }
  console.log(selectedCharacters);
  var generatedPassword = ""
  for (let index = 0; index < passwordLength; index++) {
    var randomNumbers = Math.floor(Math.random() * selectedCharacters.length)
    var randomCharacters = selectedCharacters[randomNumbers]
    console.log(randomCharacters);
    generatedPassword = generatedPassword + randomCharacters
  }
  return generatedPassword;
};