'use strict';


// Create an index.html page and add an external link to this .js file.
document.write("Successfully Linked Exercises Day 1");

// Open up index.html in the browser. If you see "Successfully Linked Exercises Day 1" on your page, you may continue.



//1. Define a new variable `quote` for the value "A ship in port is safe, but that is not what ships are for. Sail out to sea and do new things."
var quote = "A ship in port is safe, but that is not what ships are for. Sail out to sea and do new things";

//Log out the quote
console.log(quote);

//Log out the type of the variable. Is it a string? A number? Something else?
console.log(typeof quote);

//2. Define a variable `quoteLength` that stores the length of the quote.
var quoteLength = (quote.length)

//Log out the length
 console.log(quote.length)

//3. Create a new variable `attributedQuote`. Add the string "- Rear Admiral Grace Hopper" to the end of the `quote` variable with an appropriate space in between.
//This new value should not _replace_ the `quote` variable's value
//Log out the new quote
var attributedquote = "Rear Admiral Grace Hopper";
console.log(attributedquote);

//4. Create a function `attribute` that takes a quote and author and returns the attributed quote.
//Example: Takes "The key to being a successful programmer is to learn how to learn." and "- Shannon Burns" and returns "The key to being a successful programmer is to learn how to learn. - Shannon Burns"
var attribute =function(quote1, author){
    return quote1 + author
}
var quote1= "The key to being a successful programmer is to learn how to learn."
var author= " - Shannon Burns"
console.log(attribute(quote1, author));

//5. Create a function `sumOfNumbers` that takes 2 numbers and returns the sum of those numbers.
var sumOfNumbers =function(num1, num2){
    return num1 + num2
}
var num1= 127;
var num2= 256;
console.log(sumOfNumbers(num1, num2));

//6. Create a function `sumOfLowNumbers` that takes 5 numbers and returns the sum of all numbers that are less than or equal to 6.
var sumOfLowNumbers =function(number1, number2, number3, number4, number5){
    return number1 + number2 + number3
}
var number1 = 5; var number2= 7; var number3= 9; var number4= 11; var number5= 13;

if (number1, number2, number3, number4, number5 < 10) {
    console.log(sumOfLowNumbers)
}   else if (number1, number2, number3, number4, number5 > 10){
    console.log("this number is too big") 
}

//7. Go to https://pages.github.com/ and read through the tutorial to create a Github page.
// Choose Project site, Start from scratch. When you're finished, link your new project page here.



//8. Commit and push this file to your repository. Submit the URL for Assignment 1 on Brightspace.