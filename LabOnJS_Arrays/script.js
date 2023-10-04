// Challenge 1: Create an Array "myFavSuperheroes" and add all your favourite superhero names as an array element (Please note, you should add atleast 5 names).
var myFavSuperheroes = ['MyDad', 'MyMom', 'Luffy', 'Goku', 'Naruto'];

// Challenge 2: Print (in console) the first superheroes name in your array "myFavSuperheroes".
console.log(myFavSuperheroes[0]);
document.write(myFavSuperheroes[0] + '<br><br>');

// Challenge 3: Print (in console) the length of the array "myFavSuperheroes".
console.log(myFavSuperheroes.length);
document.write(myFavSuperheroes.length + '<br><br>');

// Challenge 4: Change the second last element in the Array "myFavSuperheroes" to your name and print the second last element in the array "myFavSuperheroes".
myFavSuperheroes[myFavSuperheroes.length - 2] = 'SujShr';
console.log(myFavSuperheroes[myFavSuperheroes.length - 2]);
document.write(myFavSuperheroes[myFavSuperheroes.length - 2] + '<br><br>');

// Challenge 5: Add your friend's name (friend 1) to the array "myFavSuperheroes" at the start without using the splice method.
myFavSuperheroes.unshift('Gham');
console.log(myFavSuperheroes);
document.write(myFavSuperheroes + '<br><br>');

// Challenge 6: Add your friend's name (friend 2) to the array "myFavSuperheroes" at the end without using the splice method.
myFavSuperheroes.push('Balram');
console.log(myFavSuperheroes);
document.write(myFavSuperheroes + '<br><br>');

// Challenge 7: Remove your friend's name (friend1) in the array "myFavSuperheroes" without using the splice method.
myFavSuperheroes.shift();
console.log(myFavSuperheroes);
document.write(myFavSuperheroes + '<br><br>');

// Challenge 8: Remove your friend's name (friend2) in the array "myFavSuperheroes" without using the splice method.
myFavSuperheroes.pop();
console.log(myFavSuperheroes);
document.write(myFavSuperheroes + '<br><br>');

// Challenge 9: Add your friend's name (friend 1) to the array "myFavSuperheroes" at the 3rd position without removing any element using the splice method.
myFavSuperheroes.splice(2, 0, 'Gham');
console.log(myFavSuperheroes);
document.write(myFavSuperheroes + '<br><br>');

// Challenge 10:  Remove the 4th and 5th element in the array "myFavSuperheroes",  and add your friend's name (friend 2) at the 4th position using the splice method.
myFavSuperheroes.splice(3, 2, 'Balram');
console.log(myFavSuperheroes);
document.write(myFavSuperheroes + '<br><br>');

// Challenge 11:  Create a nested array "superheroUniverse" and add 2 ararys to it, where first array should contain the name of the Marvel superheroes and second ararys should contain the name of the DC superhereoes.
var superheroUniverse = [['Marvel Superheroes'], ['DC Superheroes']];
superheroUniverse[0].push('Iron Man', 'Spider-Man', 'Thor');
superheroUniverse[1].push('Superman', 'Batman', 'Wonder Woman');
document.write(superheroUniverse[0] + '<br><br>');
document.write(superheroUniverse[1] + '<br><br>');

// Challenge 12: Print one of the Marvel superhero name from the array "superheroUniverse".
console.log(superheroUniverse[0][2]);
document.write(superheroUniverse[0][2] + '<br><br>');

// Challenge 13: Print one of the DC superhero name from the array "superheroUniverse".
console.log(superheroUniverse[1][2]);
document.write(superheroUniverse[1][2] + '<br><br>');
