//
//......multiply by two.........
//
(function(){
   let i = 2;
    while (i <= 65536) {
        console.log(i);
        i *= 2;
    }
})();

//
//david's answer

// "use strict";
// (function(){
//     let x = 2;
//     while(x <= 65536) {
//         console.log(x);
//         x *= 2;
//     }
// })();

//.....ice cream......

let allCones = Math.floor(Math.random() * 51) + 50;
do {
    let conesToSell = Math.floor(Math.random() * 5) + 1;
    if(allCones >= conesToSell) {
        allCones -= conesToSell;
        console.log(`customer is purchasing ${conesToSell}. Only ${allCones} left!`)
    } else {
        console.log(`sorry i cannot sell ${conesToSell}. we only have ${allCones} left`);
    }
} while(allCones !== 0)


