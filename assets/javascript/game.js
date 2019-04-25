$(document).ready(function() {
    // Generates random number between 19 - 120.
    let makeRanNum = function(min, max) {
        return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) + min;
    };
    
    let playerScore = 0;

    // Initialize game with a random number.  
    $("#ranNum").text(makeRanNum(19, 121));

    // Initialize player score with value of 0.
    $("#totalScoreNum").text(playerScore);
    
    // Assign random values between 1 -12 to each crystal.
});


