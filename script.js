
// alert("Your password must be between 8 and 128 characters long!");

var numberCharacters = prompt("Please choose the length of your password! (between 8 - 128), then click 'Generate Password' button at the bottom of the page.");

var lowerCaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numericCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "?", "<", ">", ";", "{", "}"];


var getRandomElement=function(array) {
  var randomIndex=Math.floor(array.length*Math.random());
  return array[randomIndex];
}

var button=document.getElementById("generate");


var output=document.getElementById("password");


var options=["l","u","n","s"];
var password="";

var generatePassword = function () {


for(var i=0; i<numberCharacters; i++)
{
  var randomOption=getRandomElement(options);
  if (randomOption=="l") {
      password=password+getRandomElement(lowerCaseLetters);
  } else if (randomOption=="u") {
     password=password+getRandomElement(upperCaseLetters);
  } else if (randomOption=='n') {
    password=password+getRandomElement(numericCharacters);
  } else if (randomOption=='s') {
    password=password+getRandomElement(specialCharacters);
  }
}
console.log(password);
output.value=password;
};

button.addEventListener("click",generatePassword);



