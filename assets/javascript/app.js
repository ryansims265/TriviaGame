//First the user needs to see the start button and click that to start the game
var wins = 0;
var losses = 0;
var unanswered = 0;

$("#startbutton").text("Click here to Start Game");

// var x = setInterval(function() { 
  
//     var t = new Date();
//     t.setSeconds(t.getSeconds() + 30);
//       console.log(t); 
// document.getElementById("seconds").innerHTML =t;  
// if (t < 0) { 
//         clearInterval(x); 
//         document.getElementById("demo").innerHTML = "TIME UP"; 
//         document.getElementById("seconds").innerHTML = '0'; } 
// }, 1000); 

var timeLeft = 30;
    var elem = document.getElementById('clockdiv');
    
    
    
    

//After the start button is clicked then the game begins and the timer begins counting down from 30 
//THere is one question on the screen first and there are 4 choices that are highlighed when hovered over 
$("#startbutton").click(function () {
console.log("Question 1 Starting");
$("#question").text("What is the name of Lawrence Fishburn's character in the Matrix?");
//Question 1 
    $("#choice1").text("Steve");
    $("#choice2").text("Robert");
    $("#choice3").text("Jerry");
    $("#choice4").text("Mopheus");
    $("#startbutton").text("");
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
        $("#question").text("What year did the Matrix come out?");
        //Question 2 
            $("#choice1").text("1995");
            $("#choice2").text("1999");
            $("#choice3").text("2000");
            $("#choice4").text("2002");
        
            wins++;
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
            

            $("#choice2").click(function () {
                console.log("Question 3 Starting");
                $("#question").text("How Many Movies are in the Maxtrix Trilogy");
                //Question 3 
                    $("#choice1").text("1");
                    $("#choice2").text("2");
                    $("#choice3").text("3");
                    $("#choice4").text("4");
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
                
                    $("#choice3").click(function () {
                        console.log("Question 4 Starting");
                        $("#question").text("What color tint is put over the entire movie of the Maxtrix?");
                        //Question 4
                            $("#choice1").text("Green");
                            $("#choice2").text("Yellow");
                            $("#choice3").text("Orange");
                            $("#choice4").text("Blue");
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
                        
                            
                            $("#choice1").click(function () {
                                console.log("Game Starting");
                                $("#question").text("What is the name of the villain Agent?");
                                //Question 5 
                                $("#choice1").text("Steve");
                                $("#choice2").text("Robert");
                                $("#choice3").text("Jerry");
                                $("#choice4").text("Smith");
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

   




$("#winsfinal").text("Wins: " + wins);
$("#lossesfinal").text("Losses: " + losses);
$("#unansweredfinal").text("Unanwered: " + unanswered);


//Random values are assigned to each of the gem gifs and listen for the on-click event 
function reset() {
    var wins = 0;
    var losses = 0;
    var unanswered = 0;

}

function win() {
    wins++;
    console.log("You Won")
}

function lose() {
    losses++;
    console.log("You Lost")
}


function doSomething(){
    $("#question").text("You didn't answer the question in time, pay attention!");
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
    console.log("Choice 1 Pressed");
})

$("#choice3").click(function () {
    console.log("Choice 1 Pressed");
})

$("#choice4").click(function () {
    console.log("Choice 1 Pressed");
})









//After the game is completed through 5 questions then it shows the number of wins, losses, and unanswered and a start over button 