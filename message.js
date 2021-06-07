// USING jQuery:

$(document).ready(function() {   // allows the following code to run as soon as the page is loaded

    $("#wrong1").click(function(){
        $("#wrong1").css("background", "red");
        $("#answer").html("Incorrect");
    });

    $("#wrong2").click(function(){
        $("#wrong2").css("background", "red");
        $("#answer").html("Incorrect");
    });

    $("#wrong3").click(function(){
        $("#wrong3").css("background", "red");
        $("#answer").html("Incorrect");
    });

    $("#right").click(function(){
        $("#right").css("background", "LightGreen");
        $("#answer").html("Correct!");
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


//// USING STANDARD JAVASCRIPT TO MANIPULATE THE DOM:

//// note: use "document.querySelectorAll" to query all the HTML elements that match a query
//// note: "document.querySelector" only looks for the first HTML elements

// document.querySelector("#wrong1").addEventListener('click', function()
// {
//     document.querySelector("#wrong1").style.backgroundColor = '#ff0000';
//     document.querySelector("#answer").innerHTML = "Incorrect";
// });

// document.querySelector("#wrong2").addEventListener('click', function()
// {
//     document.querySelector("#wrong2").style.backgroundColor = '#ff0000';
//     document.querySelector("#answer").innerHTML = "Incorrect";
// });

// document.querySelector("#wrong3").addEventListener('click', function()
// {
//     document.querySelector("#wrong3").style.backgroundColor = '#ff0000';
//     document.querySelector("#answer").innerHTML = "Incorrect";
// });

// document.querySelector("#right").addEventListener('click', function()
// {
//     document.querySelector("#right").style.backgroundColor = '#00ff00';
//     document.querySelector("#answer").innerHTML = "Correct!";
// });
