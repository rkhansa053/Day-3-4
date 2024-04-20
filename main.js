// Question 7: Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Enclose your operations in print statements.
console.log(5 + 3); // ADDITION
console.log(10 - 2); // SUBTRACTION
console.log(4 * 2); // MULTIPLICATION
console.log(16 / 2); // DIVISION
// Question 9: Favorite Number: Store your favorite number in a variable. Then, create a message revealing your favorite number. Print that message
var favourite_number = 7;
console.log("My favourite number is ".concat(favourite_number));
// Question 10: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
//  If the programs are straightforward at this point, just add your name and the current date at the top of each program file.
//  Then, write one sentence describing what the program does.
// Khansa, 18-4-2024
// This program will print a personal message
var myNmae = "Khansa";
console.log("Hello ".concat(myNmae, " would like to study with me?"));
// Question 11: Names: Store the names of a few of your friends in an array called names. Print each person’s name by accessing each element in the list, one at a time.
var names = ['Ali', 'Rabia', 'Khansa'];
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
// Question 12: Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them.
//  The message should be the same for each person, but personalized with their name.
var greetings = ['Ali', 'Rabia', 'Khansa'];
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var greetings_1 = names_1[_i];
    console.log("Hello ".concat(greetings_1, ", are you all coming to the party?"));
}
// Question 13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples.
//  Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var transportation = ['car', 'motorcycle', 'bus'];
transportation.forEach(function (transportation) {
    console.log("I would like to own a ".concat(transportation));
});
// Question 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
//  Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guests = ["Ayesha", "Sanam", "Hania"];
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join dinner with me?"));
});
// Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.
var unableToAttend = "Hania";
console.log("".concat(unableToAttend, ",can't make it to the dinner."));
// changed guest
var newGuest = "Aizal";
guests[guests.indexOf(unableToAttend)] = newGuest;
// New invitations
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
