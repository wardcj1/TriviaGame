    var number = 80;
    var intervalId;
    var oneSecond = 1000;
    var correctAns = 0;
    var incorrectAns = 0;
    var unanswered = 1;
    // var gameOverAudio = new Audio("goldfingerSong.mp3");
    // var gameStartAudio = new Audio("themeTune.mp3");
    // var doneButtonAudio = new Audio("shocking.wav");

    $("#start").on("click", run);
    $("#stop").on("click", stop);

    function run() {
      $("#start").hide();
      $("#timer").html("<center><h2>80 seconds remaining</h2></center>");
      $("#stop").html("<center><button class=stopGame>STOP GAME!</button></center>");
      intervalId = setInterval(decrement, oneSecond);
        renderQ();
    }

    function decrement() {
      number--;
      $("#timer").html("<center><h2>" + number + " seconds remaining</h2></center>");
      if (number === 0) {
        stop();
      }
    }

    function stop() {
      clearInterval(intervalId);
      $("#stop").hide();
      $(".questions").hide();
      $("#timer").html("<h2>All Done!</h2>");
      $("#correct-counter").html("<h2>Correct Answers: " + correctAns +"</h2>");
      $("#incorrect-counter").html("<h2>Incorrect Answers: " + incorrectAns + "</h2>");
      $("#unanswered-counter").html("<h2>Unanswered: " + unanswered + "</h2>");
    }
 
   // var questionArray = ["Which author created James Bond?", "In the James Bond series of films, Major Geoffrey Boothroyd is better known as who?", "Which branch of the British military did fictional character James Bond serve in?", "In the James Bond series of films, what does SPECTRE stand for?", "In which James Bond film does Felix Leiter lose a leg in a shark attack?"];
   
  // var answerArray = [["Ian Fleming", "Steven King", "Robert Dahl", "Albert Young"], ["Footsoldier", "Q", "Kandy Kane", "Hubert"]];

  // var correctAnswers = ["Ian Fleming", "Q"];

  function renderQ() {
    var quesDiv = $("<div class=questions>" + questions.question3.ask + "</div>");
    var ans1 = $("<div class=trueAns>" + questions.question3.trueAns + "</div>");
    var ans2 = $("<div class=falseAns>" + questions.question3.falseAns1 + "</div>");
    var ans3 = $("<div class=falseAns>" + questions.question3.falseAns2 + "</div>");
    var ans4 = $("<div class=falseAns>" + questions.question3.falseAns3 + "</div>");
    quesDiv.append(ans1).append(ans2).append(ans3).append(ans4);
    $("#questions").append(quesDiv);
      ansCheck();
  };

  function ansCheck() {
      $(".trueAns").click(function() {
      unanswered--;
      correctAns++;
      stop();
      });
      $(".falseAns").click(function() {
      unanswered--;
      incorrectAns++;
      stop();
      }); 
  };

  var questions = {
    "question3": {
      ask: "Which branch of the British military did fictional character James Bond serve in?",
      trueAns: "Royal Navy",
      falseAns1: "Royal Army",
      falseAns2: "Special Forces",
      falseAns3: "Secret Service"
    },
     "question4": {
      ask: "In the James Bond series of films, what does SPECTRE stand for?",
      trueAns: "Special Executive for Counterintelligence Terrorism Revenge and Extortion",
      falseAns1: "Deathray",
      falseAns2: "Submarine",
      falseAns3: "Nuclear Weapon"
    },
     "question5": {
      ask: "In which James Bond film does Felix Leiter lose a leg in a shark attack?",
      trueAns: "Licence To Kill",
      falseAns1: "Moonraker",
      falseAns2: "Goldfinger",
      falseAns3: "Thunderball"
    }
  }