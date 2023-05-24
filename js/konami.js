"strict"

// a key map of allowed keys
var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b',
    13: 'return'
};



// Konami Code sequence//
var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a', 'return'];

// position reached so far//
var konamiCodePosition = 0;

// keydown event listener //
document.addEventListener('keydown', function(e) {
    // value of the key code from key map
    var key = allowedKeys[e.keyCode];
    // value of the required key from konami code //
    var requiredKey = konamiCode[konamiCodePosition];
    window.clearTimeout(timerID);
    var timerID = window.setTimeout(resetKeyState, 1000);

    // compare the key with the required key
    if (key == requiredKey) {

        // move to the next key in the konami code sequence
        konamiCodePosition++;

        // if the last key is reached, activate cheats
        if (konamiCodePosition == konamiCode.length) {
            activateCheats();
            konamiCodePosition = 0;
        }
    } else {
        resetKeyState();
    }
    function resetKeyState(){
        console.log("resetting keys");
        keyCount = 0;
        window.clearTimeout(timerID)
    }
    });
// code activated//

function activateCheats() {
    $("#header-img").addClass("d-none");
    $("#enterCode").addClass("d-none");
    $('#header-img').replaceWith("<p><a href=\"#\" class=\"text-light bg-dark text-justify\"><h1>WELCOME TO THE PARTY!!!!!</h1></a></p>\n");

    document.body.style.backgroundImage = "url(img/background_to_party.gif)";
    alert("WELCOME TO THE PARTY");
    var audio = new Audio('img/party.mp3');
    audio.play();

}