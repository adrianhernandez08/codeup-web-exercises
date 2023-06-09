// 28 APR 2023
//
// function seven(){
//     return 7;
// }
//
// console.log(seven());

// Write a function that takes in a number and returns an array of numbers that are divisible within the argument. If the value provided is not a number, the function should return false.

//01 MAY 2023......
function findFactors(num) {
    if (typeof num === "number" && !isNaN(num)) {
        let bucket = [];
        for (let i = 1; i <= num; i++ ){
            if(num % i === 0){
                bucket.push(i);
            }
        }
        return bucket;
    } else {
        return false
    }
}

console.log(findFactors(6)); // returns [1,2,3,6];
console.log(findFactors(16)); // returns [1,2,4,8,16];
console.log(findFactors(0)); // returns [];
console.log(findFactors(true)); // returns false;
console.log(findFactors("13")); // returns false;
console.log(findFactors([54, 72, 144])); // returns false;
console.log(findFactors({value: 64}));// returns false;
console.log(findFactors()); // returns false;

02 MAY 2023
Write a function that takes in a string and counts the instances of the letter 'e' within the argument. The count should be case insensitive. If the string does not contain any 'e's it should return 0. If the argument is not a string it should return false.

function countEs(str)  {
    if (typeof str === "string"){
        let count = 0;
        let normalizedStr = str.toLowerCase();
        for (let i = 0; i < str.length; i++){
            if (normalizedStr.charAt(i) === "e"){
                count++;
        }
    }
    return count;
}else{
    return false;
}
}

console.log(countEs("Ease")); // returns 2;
console.log(countEs("teleconference")); // returns 5;
console.log(countEs("TOM")); // returns 0;
console.log(countEs(true)); // returns false;
console.log(countEs(['e', 'E'])); // returns false;
console.log(countEs()); // returns false;

/////////////////////////03 MAY 2023//////////////////////////////////////////////

function containsE(input){
    let findE = 'e'
    if ((input = typeof input === 'string')){
        let lowercase = findE.toLowerCase();
        return lowercase.includes(findE);
    } else {
        return false;
    }
}
function containsE(str){
    if (typeof str !== "string"){
        return false
    } else {
        return str.toLowerCase().indexOf("e") > -1;
    }
}


console.log(containsE("Ease")); // returns 2;
console.log(containsE("teleconference")); // returns 5;
console.log(containsE("TOM")); // returns 0;
console.log(containsE(true)); // returns false;
console.log(containsE(['e', 'E'])); // returns false;
console.log(containsE()); // returns false;

///////////////04 MAY 2023////////////////////////////////////
// Dragon Warmup:
//     Write a function named fizzBuzz that prints to the console the number 1 - 100. If the number is divisible by 3 print fizz instead of the number. If the number is divisible by 5 print buzz. If the number is divisible by both 3 and 5 print fizzBuzz.
//
//
//
// function fizzBuzz()  {
//         for (let i = 1; i <= 100; i++) {
//     //         // if (i % 3 === 0 && i % 5 === 0) {
//     //         //     console.log("fizzBuzz");
//     //         // } else if (i % 3 === 0) {
//     //         //     console.log("fizz");
//     //         // } else if (i % 5 === 0) {
//     //         //     console.log("buzz");
//     //         // } else {
//     //         //     console.log(i);
//     //         // }
//     //     }
//     // }
//
// fizzBuzz();

///////////////05 MAY 2023////////////////////////////////////
// Warmup:
//     Create a do-while loop that starts at 2, and displays the number squared on each line while the number is less than 1,000,000. Output should equal:

// let i = 2;
//         do {
//                 console.log(i);
//               i = Math.pow(i, 2) ;
//         } while (i < 1000000);



// Write a function that takes in an array of numbers and returns all of the numbers added together (We'll be assuming that only arrays are going to be used with this function).

function addEmUp(arr) {
    let sum = 0
    arr.forEach(function(num) {
        sum += num
    });
    return sum;
}

console.log(addEmUp([2,6,19])); // returns 27
console.log(addEmUp([-99, 180, -5])); // returns 76
console.log(addEmUp([44,10,7])); // returns 61
console.log(addEmUp([-100])); // returns -100
console.log(addEmUp([1,2,3,4,5,6,7,8,9,10])); // returns 55
console.log(addEmUp([-13, -92, -3500])) // returns -3605

Write a function that takes in a string and returns an object describing the string. The object should have a string property that contains the original string, a numberOfEs property that contains a count of the number of e's in the string (case-insensitive), and a isEvenLength property that contains a boolean for whether the string's length is even or not.

function explainString(str) {
return {
    string: str,
    numberOfEs: countEs(str),
    isEvenLength: str.length % 2 === 0
}
}

console.log(explainString("cheese")) // returns {string: "cheese", numberOfEs: 3, isEvenLength: true};
console.log(explainString("dog")) // returns {string: "dog", numberOfEs: 0, isEvenLength: false};

Write a function that takes in an array of objects and returns an array containing all of the names from the original array.

const hamsters = [
    {
        name: "Hamtaro",
        heightInMM: 86,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    } , {
        name: "Bijou",
        heightInMM: 75,
        fur: ['white'],
        gender: "female",
        dateOfBirth: "July 10"
    } , {
        name: "Oxnard",
        heightInMM: 100,
        fur: ['grey', 'white'],
        gender: "male",
        dateOfBirth: "May 3"
    } , {
        name: "Boss",
        heightInMM: 120,
        fur: ['brown', 'white'],
        gender: "male",
        dateOfBirth: "September 21"
    } , {
        name: "Snoozer",
        heightInMM: 85,
        fur: ['brown', 'white', "pink"],
        gender: "male",
        dateOfBirth: "January 14"
    }
];

function extractNames(arr) {
let bucket = [];
    arr.forEach(function(el) {
    bucket.push(el.name)
    });
}
return bucket

console.log(extractNames(hamsters)); // returns ["Hamtaro", "Bijou", "Oxnard", "Boss", "Snoozer"];



const getTallest = function(arr){
    let tallest = {heightInMM: 0};
    arr.forEach(function(obj){
        if(obj.heightInMM > tallest.heightInMM){
            tallest = obj;
        }
    })
    return tallest;
}

Write a function that takes in an array of objects and returns an array of the objects from the array that only have one fur color.



function singleFurColor(arr) {
    let singleFur= [];
        for(let i = 0; i < arr.length; i++){
            if(arr[i].fur.length === 1){
                singleFur.push(arr[1]);
            }
        }
    return singleFur;
}

console.log(singleFurColor(hamsters));

Write a function that takes in an array of objects and returns the object with the most colors in the fur array.

function mostColorful(arr) {
    let mostColor = {fur:[]};
    arr.forEach(function(obj)){
        if (obj.fur.length);
        }

    console.log(mostColorful(hamsters)); // returns {name: "Snoozer", heightInMM: 85, fur: ['brown', 'white', "pink"], gender: "male", dateOfBirth: "January 14"};
}

Write a JavaScript function that takes in a number and returns an object with the following fields: number, which will contain the original number; evenOrOdd, which will contain a string ("even" or "odd") as to whether the value is even or odd; factors, an array of numbers that are evenly divisible within the number passed; and numberOfDigits, a number counting the number of digits with the number passed.

function describeNumber(num) {
    return {
        number: num,
        evenOrOdd: (num % 2 === 0) ? "even" : "odd",
        factors: findFactors(num),
        numberOfDigits: (`${num}`).length

    }


    console.log(3 % 10)

    array.splice(array.indexOf('Ringo'), 0, 'Yoko');



}

console.log(describeNumber(19)); // returns {number: 19, evenOrOdd: "odd", factors: [1,19], numberOfDigits: 2};
console.log(describeNumber(2)); // returns {number: 2, evenOrOdd: "even", factors: [1,2], numberOfDigits: 1};

Write a JavaScript function that takes in an array of numbers and returns an array of the same length where all of the numbers have been replaced with the number multiplied by 3.

function multiplyElementsByThree(arr) {
    const bucket = [];
    arr.forEach(function(el){
        bucket.push(el*3);
    });
    return bucket;
}

console.log(multiplyElementsByThree([3,4,5])); // returns [9, 12, 15];
console.log(multiplyElementsByThree([12,8])); // returns [36, 24];
console.log(multiplyElementsByThree([100])); // returns [300];
console.log(multiplyElementsByThree([15, 9, 33, 16, 50])); // returns [45, 27, 99, 48, 150];




