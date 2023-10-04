// Challenge 1.1:
// Step 1: Create an object for storing your profile information. The object name can be "studentProfile". below are the keys which are to be added to the object, please add your values for the same:
// studentName,
// studentAge,
// cohortName,
// location,
//hobbies.
var studentProfile = {
  studentName: 'Gham Pandey',
  studentAge: 20,
  cohortName: 'Cohort A',
  location: 'Bhaktapur, Nepal',
  hobbies: ['Gaming'],
};

// Step 2: Add more then one hobby in the student object.
//Hint: Use Arrays
// Your code goes here
studentProfile.hobbies.push('Travelling', 'Money');
document.write('DISPLAYING THE UPDATED HOBBIES:<br><br>');
console.log(studentProfile.hobbies);
document.write('Hobbies: ' + studentProfile.hobbies + '<br><br><br>');

// Challenge 1.2: Access the studentName value of the object "studentProfile" using dot "." notation and print the same in console.
document.write('DISPLAYING THE studentName:<br><br>');
console.log(studentProfile.studentName);
document.write('Name: ' + studentProfile.studentName + '<br><br><br>');

//Challenge 1.3: Access the cohortName property of the object using Bracket notation ([]).
document.write('DISPLAYING THE CohortName:<br><br>');
console.log(studentProfile['cohortName']);
document.write('Name: ' + studentProfile['cohortName'] + '<br><br><br>');

//Challenge 2.1:Create an object using the constructor function for storing the book information. The object name can be "Book". Include the following values .
//title
//author
function Book(title, author) {
  this.title = title;
  this.author = author;
}
var myBook = new Book('Flowing River', 'Balram Pandey');

//Challenge 2.2: Access the title property of the object "Book" and print the same in console.
document.write('DISPLAYING THE TITLE:<br><br>');
console.log(myBook['title']);
document.write('Title: ' + myBook['title'] + '<br><br>');
