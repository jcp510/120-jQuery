$(document).ready(function() {
    // Generates random number between min - max (max is not inclusive).
    var makeRanNum = function(min, max) {
        return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) + min;
    };
    var ranNum = makeRanNum(19, 121);
    var wins = 0;
    var losses = 0;
    var playerScore = 0;
    var blue = {color: "blue"};
    var green = {color: "green"};
    var violet = {color: "violet"};
    var red = {color: "red"};
    var runGame = function() {
        // Player wins if playerScore matches generated random number.
            if (playerScore === ranNum) {
            wins++;
            console.log(wins);
            $("#wins-p").text("Wins: " + wins);        
        // Player loses if playerScore goes over generated random number.
        } else if (playerScore > ranNum) {
            losses++;
            console.log(losses);
            $("#losses-p").text("Losses: " + losses);
        } else {
            $("#wins-p").text("Wins: " + wins);
            $("#losses-p").text("Losses: " + losses);
        }
    };
    
    // Initialize game with a random number.  
    $("#ran-num").text(ranNum);

    // Initialize player score with value of 0.
    $("#tot-score-num").text(playerScore);

    runGame();

    // Assign random values between 1 - 12 to each crystal.
    blue.value = makeRanNum(1, 13);
    console.log(blue);

    green.value = makeRanNum(1, 13);
    console.log(green);

    violet.value = makeRanNum(1, 13);
    console.log(violet);

    red.value = makeRanNum(1, 13);
    console.log(red);

    // Adds value of the crystal clicked to player score.
    $("#blu-crys").on("click", function() {
        playerScore += blue.value;
        $("#tot-score-num").text(playerScore);
        runGame();
    });
    
    $("#grn-crys").on("click", function() {
        playerScore += green.value;
        $("#tot-score-num").text(playerScore);
        runGame();
    });

    $("#vio-crys").on("click", function() {
        playerScore += violet.value;
        $("#tot-score-num").text(playerScore);
        runGame();
    });

    $("#red-crys").on("click", function() {
        playerScore += red.value;
        $("#tot-score-num").text(playerScore);
        runGame();
    });

});


