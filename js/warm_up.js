// 28 APR 2023
//
// function seven(){
//     return 7;
// }
//
// console.log(seven());

// Write a function that takes in a number and returns an array of numbers that are divisible within the argument. If the value provided is not a number, the function should return false.

//01 MAY 2023......
// function findFactors(num) {
//     if (typeof num === "number" && !isNaN(num)) {
//         let bucket = [];
//         for (let i = 1; i <= num; i++ ){
//             if(num % i === 0){
//                 bucket.push(i);
//             }
//         }
//         return bucket;
//     } else {
//         return false
//     }
// }
//
// console.log(findFactors(6)); // returns [1,2,3,6];
// console.log(findFactors(16)); // returns [1,2,4,8,16];
// console.log(findFactors(0)); // returns [];
// console.log(findFactors(true)); // returns false;
// console.log(findFactors("13")); // returns false;
// console.log(findFactors([54, 72, 144])); // returns false;
// console.log(findFactors({value: 64}));// returns false;
// console.log(findFactors()); // returns false;

//02 MAY 2023
// Write a function that takes in a string and counts the instances of the letter 'e' within the argument. The count should be case insensitive. If the string does not contain any 'e's it should return 0. If the argument is not a string it should return false.

// function countEs(str)  {
//     if (typeof str === "string"){
//         let count = 0;
//         let normalizedStr = str.toLowerCase();
//         for (let i = 0; i < str.length; i++){
//             if (normalizedStr.charAt(i) === "e"){
//                 count++;
//         }
//     }
//     return count;
// }else{
//     return false;
// }
// }

// console.log(countEs("Ease")); // returns 2;
// console.log(countEs("teleconference")); // returns 5;
// console.log(countEs("TOM")); // returns 0;
// console.log(countEs(true)); // returns false;
// console.log(countEs(['e', 'E'])); // returns false;
// console.log(countEs()); // returns false;

///////////////////////////03 MAY 2023//////////////////////////////////////////////

// function containsE(input){
//     let findE = 'e'
//     if ((input = typeof input === 'string')){
//         let lowercase = findE.toLowerCase();
//         return lowercase.includes(findE);
//     } else {
//         return false;
//     }
// }
// function containsE(str){
//     if (typeof str !== "string"){
//         return false
//     } else {
//         return str.toLowerCase().indexOf("e") > -1;
//     }
// }
//
//
// console.log(containsE("Ease")); // returns 2;
// console.log(containsE("teleconference")); // returns 5;
// console.log(containsE("TOM")); // returns 0;
// console.log(containsE(true)); // returns false;
// console.log(containsE(['e', 'E'])); // returns false;
// console.log(containsE()); // returns false;

///////////////04 MAY 2023////////////////////////////////////
// Dragon Warmup:
//     Write a function named fizzBuzz that prints to the console the number 1 - 100. If the number is divisible by 3 print fizz instead of the number. If the number is divisible by 5 print buzz. If the number is divisible by both 3 and 5 print fizzBuzz.
//
//
//
function fizzBuzz()  {
        for (let i = 1; i <= 100; i++) {
            console.log(i);
            if (i % 3 === 0 && i % 5 === 0) {
                console.log("fizzBuzz");
            } else if (i % 3 === 0) {
                console.log("fizz");
            } else if (i % 5 === 0) {
                console.log("buzz");
            } else {
                console.log(i);
            }
        }
    }
fizzBuzz();