'use strict';

//2...multiplication table
(function(){
    function showMultiplicationTable(num){
        for(let i = 1; i <= 10; i++ ) {
            console.log(`${num} * ${i} = ${num * i}`);
        }
    }

    console.log(showMultiplicationTable(7));
    console.log(showMultiplicationTable(11));
})()

// //2. david's answer
// (function(){
//     function showMultiplicationTable(num){
//         for(let i = 1; i <= 10; i++ ) {
//             console.log(`${num} * ${i} = ${num * i}`);
//         }
//     }
//     showMultiplicationTable(7);
//     showMultiplicationTable(11);
// })();
//3....even or odd (random numbers).........................
{
       var number = Math.floor((Math.random()* 200) + 1);

        if (number % 2 == 0) {
            console.log(number + " is an even number");
        } else {
            console.log("an odd number is " + number);
        }
    }
// david's answer
//     for (let i =1; i < 11; i++) {
//         let randomNum = Math.floor(Math.random() * 181) + 20;
//     if (randomNum % 2 === 0) {
//         console.log(`${randomNum} is even`);
//     } else {
//         console.log(`${randomNum} is odd`);
//     }
//     }
//
// 4.........number christmas tree
//
for (let i = 1; i <= 9; i++) {
    let output = "";
    for (let a = 1; a <= i; a++){
        output += i;
    }
    console.log(output);
}
// david's answer
// for (let i = 1; i < 10; i++) {
//     let output = "";
//     for (let a = 1; a <= i; a++){
//         output += i;
//     }
//     console.log(output);
// }
//
// for (let i = 1; i < 10; i++) {
//     console.log(i.toString().repeat(i));
// }
//
// 5......... count down by 5.......
// for (i = 100; i > 0; i -=5){
//     console.log(i);
// }
//
// let sum = 5;
// do {
//     console.log(sum);
//     sum += 5;
// } while (sum < 100)
//
// david's answer
// for (let i = 100; i > 0; i -= 5);{
//     console.log(i);
// }