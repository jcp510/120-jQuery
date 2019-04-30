$(document).ready(function() {
    // Generates random number between min - max (max is not inclusive).
    var makeRanNum = function(min, max) {
        return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) + min;
    };
    var ranNum = makeRanNum(19, 121);
    console.log("ranNum: " + ranNum);

    var wins = 0;
    console.log("wins: " + wins);

    var losses = 0;
    console.log("losses: " + losses);

    var playerScore = 0;
    var blue = {color: "blue"};
    var green = {color: "green"};
    var violet = {color: "violet"};
    var red = {color: "red"};
    // Assign random values between 1 - 12 to each crystal.
    var setCrystalVals = function() {
        blue.value = makeRanNum(1, 13);
        console.log(blue);

        green.value = makeRanNum(1, 13);
        console.log(green);

        violet.value = makeRanNum(1, 13);
        console.log(violet);

        red.value = makeRanNum(1, 13);
        console.log(red);
    };
    
// ***************  TO DO: "DRY"-UP THIS CODE!!!  *************************************

    // Logic for determining win/loss.
    var runGame = function() {
        // Player wins if playerScore matches generated random number.
            if (playerScore === ranNum) {
            wins++;
            console.log("win!");
            $("#wins-p").text("Wins: " + wins);
            ranNum = makeRanNum(19, 121);
            $("#ran-num").text(ranNum);
            console.log("new ranNum: " + ranNum);
            console.log("wins: " + wins);
            console.log("losses: " + losses);
            setCrystalVals();
            playerScore = 0;
            $("#tot-score-num").text("Your total score is: " + playerScore);
        // Player loses if playerScore goes over generated random number.
        } else if (playerScore > ranNum) {
            losses++;
            console.log("you lose");
            $("#losses-p").text("Losses: " + losses);
            ranNum = makeRanNum(19, 121);
            $("#ran-num").text(ranNum);
            console.log("new ranNum: " + ranNum);
            console.log("wins: " + wins);
            console.log("losses: " + losses);
            setCrystalVals();
            playerScore = 0;
            $("#tot-score-num").text("Your total score is: " + playerScore);
        }
    };
    
    // Initialize game with a random number.  
    $("#ran-num").text(ranNum);

    // Initialize wins with value of 0.
    $("#wins-p").text("Wins: " + wins);

    // Initialize losses with value of 0.
    $("#losses-p").text("Losses: " + losses);

    // Initialize player score with value of 0.
    $("#tot-score-num").text("Your total score is: " + playerScore);

    setCrystalVals();
    runGame();

    // Adds value of the crystal clicked to player score.
    $("#blu-crys").on("click", function() {
        playerScore += blue.value;
        $("#tot-score-num").text("Your total score is: " + playerScore);
        runGame();
    });
    
    $("#grn-crys").on("click", function() {
        playerScore += green.value;
        $("#tot-score-num").text("Your total score is: " + playerScore);
        runGame();
    });

    $("#vio-crys").on("click", function() {
        playerScore += violet.value;
        $("#tot-score-num").text("Your total score is: " + playerScore);
        runGame();
    });

    $("#red-crys").on("click", function() {
        playerScore += red.value;
        $("#tot-score-num").text("Your total score is: " + playerScore);
        runGame();
    });

});


