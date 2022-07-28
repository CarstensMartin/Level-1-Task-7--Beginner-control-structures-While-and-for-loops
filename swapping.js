//Ask user for a password and swap the 2nd an last digit of their password.
//Once done also supply original password

//Ask user input
var number = prompt("Please enter a number of at least 3 digits");

//Calculate the actual length of the number
let NumberLength = (number.length);

//Make sure input is minimum 3 digits long
while (NumberLength < 3) {
    var number = prompt("Please enter a number of at least 3 digits");
    NumberLength = (number.length);
}

//Start with blank number output
let numberoutput = "";

//Establish the 2nd letter that are to be moved to the end
let SecondLetter = number[1];

//Establish the last letter that are to be moved to the 2nd position
let LastLetter = number[(number.length - 1)];

//Find out how many index letters is in the password
let NumberIndex = (number.length - 1);

//Create a loop to move letter by letter
for (let numberposition = 0; numberposition <= NumberIndex; numberposition++) {
    // Create an If statement to swap the 2nd position with the last position
    if (
        numberposition == 1) {
        numberoutput += LastLetter
    }
    else if (
        numberposition != NumberIndex) {
        numberoutput += number[numberposition]
    }
    else {
        numberoutput += SecondLetter
    }
}

//Display on consol the new password
console.log(numberoutput)

//Display on consol the original password
console.log(number)
