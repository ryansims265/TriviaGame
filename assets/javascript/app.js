//First the user needs to see the start button and click that to start the game
var wins = 1;
var losses = 1;

$("#winsfinal").text("");
$("#lossesfinal").text("");
$("#startbutton").text("Click here to Start Game");

var timeLeft = 80;
var elem = document.getElementById('clockdiv');





//After the start button is clicked then the game begins and the timer begins counting down from 30 
//THere is one question on the screen first and there are 4 choices that are highlighed when hovered over 
$("#startbutton").click(function () {
    console.log("Question 1 Starting");
    $("#question").text("What does Indy replace the golden idol with in the iconic boulder scene?");
    //Question 1 
    $("#choice1").text("A rock");
    $("#choice2").text("A gun ");
    $("#choice3").text("His trademark hat");
    $("#choice4").text("A bag of sand");
    $("#startbutton").text("");
    $("#clocktitle").text("Countdown Clock");
    
    $("#choice1").click(function () {
        
        $("#lossesfinal").text("Losses: " + losses++);
    });
    $("#choice2").click(function () {
        
        $("#lossesfinal").text("Losses: " + losses++);
    });
    $("#choice3").click(function () {
        
        $("#lossesfinal").text("Losses: " + losses++);
    });

    var timerId = setInterval(countdown, 1000);
    function countdown() {
        if (timeLeft == 0) {
            clearTimeout(timerId);
            doSomething();
        } else {
            elem.innerHTML = timeLeft + ' seconds remaining';
            timeLeft--;

        }
    }



    $("#choice4").click(function () {
        console.log("Question 2 Starting");
        $("#question").text("What is the name of the second Indian Jones Movie?");
        //Question 2 
        $("#choice1").text("Raiders of the Lost Ark");
        $("#choice2").text("Temple of Doom");
        $("#choice3").text("Last Crusade");
        $("#choice4").text("Kingdom of the Crystal Skull");
        $("#clocktitle").text("Countdown Clock");
        $("#choice1").click(function () {
            $("#lossesfinal").text("Losses: " + losses++);
        });
        $("#choice4").click(function () {
            losses++;
            $("#lossesfinal").text("Losses: " + losses++);
        });
        $("#choice3").click(function () {
            losses++;
            $("#lossesfinal").text("Losses: " + losses++);
        });

        
        $("#winsfinal").text("Wins:" + wins++);



        $("#choice2").click(function () {
            console.log("Question 3 Starting");
            $("#question").text("What is Indiana Jones trademark weapon?");
            //Question 3 
            $("#choice1").text("Revolver");
            $("#choice2").text("Sword");
            $("#choice3").text("Whip");
            $("#choice4").text("Bazooka");
            $("#clocktitle").text("Countdown Clock");
            $("#choice1").click(function () {
                
                $("#lossesfinal").text("Losses: " + losses++);
            });
            $("#choice2").click(function () {
                
                $("#lossesfinal").text("Losses: " + losses++);
            });
            $("#choice4").click(function () {
                
                $("#lossesfinal").text("Losses: " + losses++);
            });
            
            $("#winsfinal").text("Wins:" + wins++);


            $("#choice3").click(function () {
                console.log("Question 4 Starting");
                $("#question").text("What actor portrays Indy's sun in the 4th movie?");
                //Question 4
                $("#choice1").text("Shia LeBouf");
                $("#choice2").text("Chris Hemsworth");
                $("#choice3").text("Ansel Elgort");
                $("#choice4").text("Tom Holland");
                $("#clocktitle").text("Countdown Clock");
                $("#choice4").click(function () {
                   
                    $("#lossesfinal").text("Losses: " + losses++);
                });
                $("#choice2").click(function () {
                   
                    $("#lossesfinal").text("Losses: " + losses++);
                });
                $("#choice3").click(function () {
                    
                    $("#lossesfinal").text("Losses: " + losses++);
                });
                
                $("#winsfinal").text("Wins:" + wins++);



                $("#choice1").click(function () {
                    console.log("Game Starting");
                    $("#question").text("What is the artifact that Indiana Jones is trying to find in the 3 movie?");
                    //Question 5 
                    $("#choice1").text("The Sword in the Stone");
                    $("#choice2").text("The Ark of the Covenant");
                    $("#choice3").text("The Ark of Moses");
                    $("#choice4").text("The Holy Grail");
                    $("#clocktitle").text("Countdown Clock");
                    $("#choice1").click(function () {
                        
                        $("#lossesfinal").text("Losses: " + losses++);
                    });
                    $("#choice2").click(function () {
                        
                        $("#lossesfinal").text("Losses: " + losses++);
                    });
                    $("#choice3").click(function () {
                        
                        $("#lossesfinal").text("Losses: " + losses++);
                    });
                


                    $("#winsfinal").text("Wins:" + wins++);


                    $("#choice4").click(function () {
                        console.log("Game Ended");
                        $("#question").text("Here's how you did:");
                        //Results
                        $("#choice1").text("");
                        $("#choice2").text("");
                        $("#choice3").text("");
                        $("#choice4").text("");


                    })
                })
            })
        })
    })




})









//Random values are assigned to each of the gem gifs and listen for the on-click event 
function reset() {
    var wins = 0;
    var losses = 0;


}

function win() {
    wins++;
    console.log("You Won")
}

function lose() {
    losses++;
    console.log("You Lost")
}


function doSomething() {
    $("#question").text("You didn't answer the questions in time, go quicker next time!");
    $("#choice1").text("");
    $("#choice2").text("");
    $("#choice3").text("");
    $("#choice4").text("");
}






//After the choice is selected then the counter stops and the correct answer is showed with a gif from the movie 

$("#choice1").click(function () {
    console.log("Choice 1 Pressed");
})


$("#choice2").click(function () {
    console.log("Choice 2 Pressed");
})

$("#choice3").click(function () {
    console.log("Choice 3 Pressed");
})

$("#choice4").click(function () {
    console.log("Choice 4 Pressed");
})









//After the game is completed through 5 questions then it shows the number of wins, losses, and unanswered and a start over button 