// Note: the code below requires the jQuery library

$(document).ready(function() {   // allows the following code to run as soon as the page is loaded
    const defaultButtonColor = $("button").css("background-color");

    function wrongAnswer(answer) {
        $(answer).css("background", "red");
        $("#answer").html("Incorrect");
    }

    function rightAnswer(answer) {
        $(answer).css("background", "LightGreen");
        $("#answer").html("Correct!");
    }

    function resetColors() {
        $("#wrong1").css("background", defaultButtonColor);
        $("#wrong2").css("background", defaultButtonColor);
        $("#wrong3").css("background", defaultButtonColor);
        $("#right").css("background", defaultButtonColor);
    }

    $("#wrong1").click(function(){
        resetColors();
        wrongAnswer("#wrong1");
    });

    $("#wrong2").click(function(){
        resetColors();
        wrongAnswer("#wrong2");
    });

    $("#wrong3").click(function(){
        resetColors();
        wrongAnswer("#wrong3");
    });

    $("#right").click(function(){
        resetColors();
        rightAnswer("#right");
    });

    $("form").submit(function(){
        let ans = $("#textanswer").val(); // get the value from the text field

        if (ans.toLowerCase() == "italy") {
            $("#textanswer").css("background", "LightGreen");
            $("#answer2").html("Correct!");
        } else {
            $("#textanswer").css("background", "red");
            $("#answer2").html("Incorrect");
        }
    });
});