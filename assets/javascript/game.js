$(document).ready(function() {
    // Generates random number between min - max (max is not inclusive).
    let makeRanNum = function(min, max) {
        return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) + min;
    };
    let playerScore = 0;
    let blue, green, violet, red;
    
    // Initialize game with a random number.  
    $("#ran-num").text(makeRanNum(19, 121));

    // Initialize player score with value of 0.
    $("#tot-score-num").text(playerScore);

    // Assign random values between 1 - 12 to each crystal.
    blue = makeRanNum(1, 13);
    console.log("blue = " + blue);

    green = makeRanNum(1, 13);
    console.log("green = " + green);

    violet = makeRanNum(1, 13);
    console.log("violet = " + violet);

    red = makeRanNum(1, 13);
    console.log("red = " + red);
});


