var carOrange = document.getElementById('carOrange');
var carRed = document.getElementById('carRed');
var message = document.getElementById('message');

// position the red car
carRed.style.top = "0px";

// position the orange car
carOrange.style.top = window.innerHeight - 80 + "px";

// start the game
var game = setInterval(moveCar, 100);

//
// move the red car forward
//
function moveCar() {
    // move the car
    var newCarTop = parseInt(carRed.style.top) + 10 + "px";
    carRed.style.top = newCarTop;

    // check if the cars crashed
    checkCollisions();
}

//
// check if any two cars crashed
//
function checkCollisions() {
    var carRedFront = parseInt(carRed.style.top);
    var carOrangeFront = parseInt(carOrange.style.top) - 80;

    // if cars crashed
    if(carRedFront >= carOrangeFront) {
        // stop the game
        clearInterval(game);

        // let you know about the crash
        message.innerHTML = "Game Over";
    }
}
