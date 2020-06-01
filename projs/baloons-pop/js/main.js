'use strict'
console.log('Baloon Pop!')

// model:
var gBaloons = [
    { id: 0, bottom: 0, speed: 10 },
    { id: 1, bottom: 0, speed: 14 },
    { id: 2, bottom: 0, speed: 11 },
    { id: 3, bottom: 0, speed: 12 },
    { id: 3, bottom: 0, speed: 13 },
];
var intervalId;

function init() {
    renderBaloons()
    intervalId = setInterval(moveBaloonsUp, 50);
}

function renderBaloons() {
    var strHTML = '';
    for (var i = 0; i < gBaloons.length; i++) {
        strHTML += '<div class="baloon baloon' + i + '" onclick="baloonPop(' + i + ')"></div>';
    }

    var elCanvas = document.querySelector('.canvas');
    elCanvas.innerHTML += strHTML;
}

function moveBaloonsUp() {
    // create DOM array:
    var elBaloons = document.querySelectorAll('.baloon');

    for (var i = 0; i < gBaloons.length; i++) {
        // model:
        var baloon = gBaloons[i]
        // dom
        var elBaloon = elBaloons[i]

        baloon.bottom += baloon.speed
        // console.log(baloon.bottom)
        elBaloon.style.bottom = baloon.bottom + 'px'

        if (baloon.bottom > window.innerHeight) {
            console.log('Game over! Baloon ', baloon.id, ' is gone to heaven!')
            clearInterval(intervalId);
            disablePop();
            // confirm('Would you like to play again?', resetGame());
            // break;
        }
    }

}
function baloonPop(idx) {
    var baloon = gBaloons[idx]

    // dom:
    var elBaloons = document.querySelectorAll('.baloon');
    var elBaloon = elBaloons[idx]
    // elBaloon.style.display = 'none';
    elBaloon.style.opacity = '0%'

    // model:
    baloon.speed = 0;

    // sfx:
    var popSound = document.getElementById("pop");
    popSound.play()

}

function disablePop() {
    for (var i = 0; i < gBaloons.length; i++) {
        var elBaloons = document.querySelectorAll('.baloon');
        var elBaloon = elBaloons[i];
        elBaloon.removeAttribute('onclick');
    }
}

function resetGame() {
    debugger;
    // model reset
    for (var i = 0; i < gBaloons.length; i++) {
        gBaloons[i].bottom = 0;
    // dom reset
    // var elBaloons = document.querySelectorAll('.baloon');
    // var elBaloon = elBaloons[i];
    // elBaloon.style.bottom = gBaloons[i].bottom;
    var elCanvas = document.querySelector('.canvas');
    elCanvas.innerHTML = '';
    }
    init();
}
