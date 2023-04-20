

 // let oddNumber = prompt("give me an odd number between 1 and 50");
 //
 //        if (oddNumber % 2 != 0) {
 //            console.log(oddNumber + " is an odd number");
 //        } else {
 //           prompt("The number " + oddNumber + " is an even number. Please enter an odd number between 0 and 50");
 //        }
 //    console.log(oddNumber);
 //
 // for (var x = 1; x < 50; x += 2) {
 //     if (x === oddNumber) {
 //         console.log(`SKIPPED'  ${oddNumber}`)
 //         continue
 //     }
 //}
 // {
 //
 //     let oddNumber = true;
 //
 //     while (oddNumber === false) {
 //         oddNumber = prompt("give me an odd number");
 //     }
 //
 //     do {
 //         oddNumber = prompt("Please, give me and odd number?");
 //     } while (oddNumber === false)
 //
 // }

//
//  let oddNumber = parseFloat(prompt("give me an odd number between 1 and 50"));
//  do {
//      if (oddNumber % 2 === 0) {
//          oddNumber = parseFloat(prompt("The number " + oddNumber + " is an even number. Please enter an odd number between 1 and 50"));
//      }
//  } while (oddNumber % 2 === 0)
//
// for (let even = 1; even < 50; even += 2){
//     if (even === oddNumber){
//         console.log(`We skipped! ${oddNumber}`)
//         continue
//     }
//     console.log('odd number:' + even);
// }
//
//
// david's answer
//  "use strict";
//  (function(){
//      let numToSkip;
//      while(true){
//          numToSkip = parseInt(prompt("give me an odd number between 1 and 50"))
//          if(numToSkip >= 1 && numToSkip <= 50 && numToSkip % 2 !== 0) {
//              break;
//          }
//      }
//     for (let i = 1; i < 50; i += 2) {
//         if( i === numToSkip) {
//             console.log(`skipping ${numToSkip}`);
//             continue;
//         }
//         console.log(i);
//     }
//  })();
