//Create a quiz where the user need to enter the correct number, if incorrect the user has the option to retry

//Question and result before the while statement gets tested
do {
    var Answer = prompt("What colour is the sky?\n a. Purple\n b. Pink\n c. Blue\n d. Yellow\n Enter a, b, c or d:")

    //If the answer given is incorrect, the user have the option to try again
    if (Answer != "c") {
        var retry = prompt("This is incorrect! Would you like to try again?\n y/n:")
    }
}

//While condition to be met to continue the loop
while ((Answer != "c") &&
    (retry == "y")) {
    //If the user enters the wrong answer and decides to quit, consol displays message
    if ((retry = "n") &&
        (Answer != "c")) {
        console.log("It is sorry to see that you are not retrying again")
    }
}

//If the user answers correct, a message will display on the consol to say it is correct.
if (Answer == "c") {
    console.log("That is correct!")
}