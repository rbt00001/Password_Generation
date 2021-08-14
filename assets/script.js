// Assignment Code
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
    var passwordQuestions = prompt("Let's create a password, must be between 8 and 128 characters");
    while (passwordQuestions > 128 || passwordQuestions < 8 || isNaN(passwordQuestions)) {
       var passwordQuestions = prompt("Let's create a password, must be between 8 and 128 characters")
    }

    if (confirm("Include lowercase letters?")) {
        lowerCase = "abcdefghijklmnopqrstuvwxyz";
    } else {
        lowerCase = "";
    }
    if (confirm("Include uppercase letters?")) {
        upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else {
        upperCase = "";
    } 
    if (confirm("Include numbers?")) {
        numbers = "0123456789";        
    } else {
        numbers = "";
    }
    if (confirm("Include special characters?")) {
        specChar = "!@#$%^&*";
    } else {
        specChar = "";
    }
    let password = lowerCase, upperCase, numbers, specChar;
    newPass = "";

    for (var i = 0, n = password.length; i < passwordQuestions; i++) {
        password += password.charAt(Math.floor(Math.random()*n));
    }
    return newPass 
}
