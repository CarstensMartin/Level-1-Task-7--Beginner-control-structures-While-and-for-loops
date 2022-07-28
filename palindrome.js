//Determine if a word is a Palindrome

//User input the word to be tested
let inputWord = prompt("Please enter the word that you want to test if it is a Palindrome:");

//Determine the first and last letter index positions of the word
let firstLetter = 0
let lastLetter = (inputWord.length - 1)

//Determine the number of index letters in the word to know when to stop the comparison.
let indexLetters = (inputWord.length)

let isAPalindrome = false

//While loop to compare the Palindrome letters - while loop gives the ability to test any index size word
while ((inputWord[firstLetter] == inputWord[lastLetter]) && (firstLetter <= indexLetters)) {
    firstLetter++
    lastLetter--
    // If conditions are met and reaching last letter which has the same index value as the word index length, display on consol it is a palindrome
    if (firstLetter == indexLetters) {
        isAPalindrome = true;
    }
}

//Display on Consol if conditions are not met to be a Parlindrome or not
if(isAPalindrome === true){
    console.log(inputWord + " is a palindrome")
} else{
    console.log(inputWord + " is NOT a palindrome")
}