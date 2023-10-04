// Challenge 1: Store the string "I am a" in one variable and store the other string "Kalvian" in other variable and concatenate both the string to get the output as "I am a Kalvain" using "+" operator.
var str1 = 'I am a';
var str2 = 'Kalvian';
var result = str1 + ' ' + str2;
console.log(result);
document.write(result + '<br><br>');

//           We are using myString for every challenge because 'var' lets us redefine the variables          //

// Challenge 2: Store the given string in a variable and print the same in console. String: If you fail, never give up because FAIL means "First Attempt In Learning".
var myString =
  'If you fail, never give up because FAIL means "First Attempt In Learning".';
console.log(myString);
document.write(myString + '<br><br>');

// Challenge 3: Store a string in a variable and display the length of the string.
var myString = 'This is a sample string.';
var lengthOfString = myString.length;
console.log(lengthOfString);
document.write(lengthOfString + '<br><br>');

// Challenge 4: Store a string in a variable and convert it into uppercase.
var myString = 'convert me to uppercase';
var uppercaseString = myString.toUpperCase();
console.log(uppercaseString);
document.write(uppercaseString + '<br><br>');

//Challenge 5: Store the string "I love programming" in a variable and replace the word programming with "JavaScript programming".
var myString = 'I love programming';
var replacedString = myString.replace('programming', 'JavaScript programming');
console.log(replacedString);
document.write(replacedString + '<br><br>');

// Challenge 6: Store a string in variable and print the string in console 3 times using repeat method.
var myString = 'Print me three times. ';
var repeatedString = myString.repeat(3);
console.log(repeatedString);
document.write(repeatedString + '<br><br>');

//Challenge 7: Store the string as "I am a Kalvian" in a variable and convert the string into array and print the array in console.
var myString = 'I am a Kalvian';
var myArray = myString.split(' ');
console.log(myArray);
document.write(myArray + '<br><br>');

// Challenge 8: Store the given string "Time and Tide wait for none" in a variable and using indexOf method find the index of "Ti" and print the same in console.
var myString = 'Time and Tide wait for none';
var index = myString.indexOf('Ti');
console.log(index);
document.write(index + '<br><br>');

// Challenge 9: Store the given string "When life gives you lemons make lemonade" in a variable and find whether it includes "lemon".
var myString = 'When life gives you lemons make lemonade';
var includesLemon = myString.includes('lemon');
console.log(includesLemon);
document.write(includesLemon + '<br><br>');

// Challenge 10: Store the given string "You must be the change you wish to see in the world." in a variable and use slice to console log the word "change" and use substring method to console log the word "world".
var myString = 'You must be the change you wish to see in the world.';
var change = myString.slice(16, 22); // Using slice
var world = myString.substring(45, 51); // Using substring
console.log(change);
document.write(change + '<br><br>');
console.log(world);
document.write(world + '<br><br>');
