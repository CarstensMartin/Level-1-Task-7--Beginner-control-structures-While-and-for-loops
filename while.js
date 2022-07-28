//calculate the average of inputs until the user enters -1

//Prompt asks user to input a value
let inputnumber = prompt("Please enter a number");

//Start the Sumtotal and the Coun total with 0 value
let sumtotal = 0
let countinputs = 0

//Ask the user for inputs until -1 is entered. Keep the totals of the numbers added and how many times a number is input.
//Prompt is in String value - have to convert to a number to be added together.
while (inputnumber != -1) {
    sumtotal += Number(inputnumber)
    countinputs += 1
    inputnumber = prompt("Please enter a number");
}

//Calculate the average
let average = sumtotal / countinputs

//Display the result on the consol
console.log("The average of the " + countinputs + " inputs was " + average)