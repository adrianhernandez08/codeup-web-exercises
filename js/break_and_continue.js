// "use strict";
(function () {
    let skipped;
    while (true) {
        skipped = parseInt(prompt("insert odd number between 1 an 50"))
        if (skipped >= 1 && skipped <= 50 && skipped % 2 !== 0) {
            break;
        }
    }
    for (let i = 1; i < 50; i += 2) {
        if (i === skipped) {
            console.log(`skipping ${skipped}`);
            continue;
        }
        console.log(i);
    }
})();

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
