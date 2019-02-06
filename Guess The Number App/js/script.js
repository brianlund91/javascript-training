
const MIN_NUM = 1;
const MAX_NUM = 20;

var answer;

function init() {
    setupGame();
}

function setupGame() {
    answer = getRandomNumberInRange();
}

function getRandomNumberInRange() {
    return Math.round(Math.random()*(MAX_NUM - MIN_NUM)) + 1;
}

function checkGuess() {
    var guessInput = document.querySelector('#guessInput');
    var input = guessInput.value;
    var feedback = document.getElementById("feedback");
    var num = parseInt(input, 10);
    if (!isValidInput(num)) {
        feedback.innerHTML = "Invalid input: " + input + ". Guess must be a number in range [" + MIN_NUM + ", " + MAX_NUM + "]";
        return;
    }
    if (num === answer) {
        feedback.innerHTML = "CORRECT! The number was " + answer;
    }
    else if (num > answer) {
        feedback.innerHTML = "Wrong. The correct number is smaller than " + num;
    }
    else {
        feedback.innerHTML = "Wrong. The correct number is larger than " + num;
    }
    
}

function isValidInput(num) {
    if (num >= MIN_NUM && num <= MAX_NUM) {
        return true;
    }
    else {
        return false;
    }
}


/*
function testGetRandomNumberInRange() {
    for (var i=0; i<1000; i++) {
        var randomNum = getRandomNumberInRange();
        if (randomNum < MIN_NUM || randomNum > MAX_NUM) {
            console.log(randomNum + " is out of expected range [" + MIN_NUM + ", " + MAX_NUM + "]")
            break;
        } 
    }
}
*/