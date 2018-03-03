var questions = [{
    question: "If you were in the city of Turin, what country would you be in?",
    answers: ["France", "Montenegro", "Italy", "Sicily"],
    correctAnswer: "Italy",
  },
  {
    question: "Which sea spearates the East African coast and the Saudi Arbian peninsula?",
    answers: ["Arabian Sea", "Red Sea", "Gulf of Aden", "Persian Gulf"],
    correctAnswer: "Red Sea",
  },
  {
    question: "What is the name for the monetary unit is used in Dubai?",
    answers: ["Bhat", "Rupee", "Dirham", "Riyal"],
    correctAnswer: "Dirham",
  },
  {
    question: "Chile shares the majority of its border with which other South American country?",
    answers: ["Argentina", "Peru", "Brazil", "Paraguay"],
    correctAnswer: "Argentina",
  },
  {
    question: "Which nation is not Scandinavian?",
    answers: ["Sweden", "Greenland", "Finland", "Iceland"],
    correctAnswer: "Greenland",
  },
  {
    question: "Originally a Viking fishing village, Copenhagen became the capital city of what country?",
    answers: ["Norway", "Iceland", "Denmark", "Finland"],
    correctAnswer: "Denmark"
  },
  {
    question: "Suriname is a country located in which continent?",
    answers: ["Australia", "Africa", "South America", "Asia"],
    correctAnswer: "South America",
  }
];


$(document).ready(function() {
      var correctGuesses = 0;
      var wrongGuesses =0;
      var timer = 120;
      var gameArea = $(".game-area");
      $("#done_button").hide();
      $("#end_container").hide();
      $("#timer_line").hide();
      //user clicks on the start button
      $("#start-btn").on("click", function(){
        $("#start-btn").hide();
        $("#done_button").show();
        $("#timer_line").show();
        for(var i=0; i < questions.length; i++) {
            gameArea.append("<p>" + questions[i].question +"</p>");
            for(var j=0; j< questions[i].answers.length; j++){
                // radio example:<input type="radio" name="gender" value="male" checked> Male<br>
                gameArea.append("<input type='radio' name="+i+" value="+ questions[i].answers[j] + ">" +questions[i].answers[j]+"</input>")
            }
        } 
      })
      startCountdown();
      return;
    })

    //start button disappears

    function countdown(){
      timer--;
      $("#timer_line").html(timer + "Seconds")
    

      $("#done_button").on("click", function(){
        timer = 0;
        return;
      });

      if(timer == -1){
        timeUp();
        $("#game-area").hide();
      }
  }

  function startCountdown(){
    setInterval(countdown, 1000);
  }

  



