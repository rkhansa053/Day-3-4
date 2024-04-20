// Question 7: Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Enclose your operations in print statements.

console.log(5+3);  // ADDITION
console.log(10-2);  // SUBTRACTION
console.log(4*2);  // MULTIPLICATION
console.log(16/2);  // DIVISION

// Question 9: Favorite Number: Store your favorite number in a variable. Then, create a message revealing your favorite number. Print that message
let favourite_number: number = 7;
console.log(`My favourite number is ${favourite_number}`);

// Question 10: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
//  If the programs are straightforward at this point, just add your name and the current date at the top of each program file.
//  Then, write one sentence describing what the program does.

// Khansa, 18-4-2024
// This program will print a personal message
let myNmae: string = "Khansa";
console.log(`Hello ${myNmae} would like to study with me?`);

// Question 11: Names: Store the names of a few of your friends in an array called names. Print each person’s name by accessing each element in the list, one at a time.
let names: string[] = ['Ali','Rabia','Khansa']
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
    
}

// Question 12: Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them.
//  The message should be the same for each person, but personalized with their name.

let greetings: string[] = ['Ali','Rabia','Khansa']
for (let greetings of names) {
    console.log(`Hello ${greetings}, are you all coming to the party?`);

}

