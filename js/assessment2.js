"use strict";

/**
 * Write your solutions here
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */
// Write a function named checkForNumber that accepts an argument and returns a string 'number' or "not a number" based on whether the input is a number.

function checkForNumber(num) {
    if (typeof num === "number" && !isNaN(num)) {
        let bucket = [];
        for (let i = 1; i <= num; i++ ){
            if(num % i === 0){
                bucket.push(i);
            }
        }
        return "number";
    } else {
        return "not a number"
    }
}

// Write a function named evenOrOdd that returns the string "even" or "odd" when passed a numeric argument. The resulting string should represent whether the number is even or odd.

function evenOrOdd(num) {
    if (typeof num == "number" && !isNaN(num)) {
        let bucket = [];
        for (let i = 1; i <= num; i++ ){
            if(num % 2 === 0){
                bucket.push(i);
            }
        }
        return "even";
    } else {
        return "odd"
    }
}

// Write a function named doubleTheElements that accepts an array of numbers and returns an array with double the value of each number.

function doubleTheElements(arr) {
    const bucket = [];
    arr.forEach(function(el){
        bucket.push(el*2);
    });
    return bucket;
}

// Write a function named sumOfElements that accepts an array of numbers and returns the sum of those numbers.
function sumOfElements(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum;
}

// Write a function named totalPrice that accepts an array of objects where each object represents a product from a store, that has a price property. The function should return the total of every object's price property.

function totalPrice(arr) {
    let sum = 0
    arr.forEach(function(price) {
        sum += price
    });
    return sum;
}

// Write a function named findHighestPrice that accepts an array of objects where each object represents a product from a store, that has a price property. The function should return the highest price value from the array. findHighestPrice.

function findHighestPrice() {
    const highestNumber = function(arr){
        let highest = {price: 0};
        arr.forEach(function(obj){
            if(obj.price > highest.price){
                highest = obj;
            }
        })
        return highest;
    }
}


// Write a function named discountCheck. The function should accept an object that represents a customer's transaction. The object passed into the function should have customerName, items, and clubMember properties. A customer will qualify for a discount if they have a total from the items property of 150 or greater, or if they are a club member. discountCheck should return a boolean representing whether the customer described by the object qualifies for a discount.
//
// HINT: The totalPrice function may be used to calculate the total price of the items by passing in the array of items.

function discountCheck(num) {
    let totalPrice = price - discountCheck()
    if (typeof num === "number" && !isNaN(num)) {
        let bucket = [];
        for (let i = 1; i <= num; i++ ){
            if(num < 150 || clubmember === true){
                bucket.push(i);
            }
        }
        return "number";
    } else {
        return "not a number"
    }
}

// Write a function named newProduct with two parameters, a string that contains a name, and a number representing the product's price, and returns an object with properties name and price.


function newProduct(num) {
    if (typeof num === "number" && !isNaN(num)) {
        let bucket = [];
        for (let i = 1; i <= num; i++) {
            return newProduct;
        }
    }
}

// Write a function named countWords that accepts a string and returns the number of words in that string.

function countWords(str) {
    let count = str.split(" ").length;
    return count;
}

// Write a function named describeNumber that takes in an integer and will return an object describing different features of the input as a number. If the input is a number, the object should have three properties: value for the value passed, evenOrOdd which should be a string to identify whether the passed argument is evenly divisible by 2, and numberOfDigits which should count the number of digits in the argument passed into the function:
function describeNumber(num) {
    if (typeof num === "number" && !isNaN(num)) {
        for (let i = 1; i <= num; i++ ){
            return(totalPrice() && evenOrOdd() && sumOfElements())
        }
    }
}
//
// Write a function named screamingSnakeCase that accepts a string that has several words each separated by a space, and returns a string with each word in all caps, and with the spaces replaced by underscores (ex. SCREAMING_SNAKE_CASE).

function screamingSnakeCase(str) {
    str = str.replaceAll(' ', '_');{
        return str.toUpperCase();
    }
}
