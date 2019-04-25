$(document).ready(function() {
    // Generate random number between 19 - 120.
    $("#ranNum").text(function() {
        return Math.floor(Math.random() * (Math.floor(121) - Math.ceil(19))) + 19;
    });
});