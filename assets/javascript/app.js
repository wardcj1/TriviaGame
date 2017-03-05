    var number = 5;
    var intervalId;
    var oneSecond = 1000;

// window.onload = function() {
//   $("<button>#start-timer").on("click", timer.start);
//     $("#display").html("00:59");
//   gameStartAudio.play();
// }

    var startBtn = 
    $("#start").on("click", run);
    $("#stop").on("click", stop);

    function run() {
      $("#start").hide();
      $("#stop").html("<center><button>Done!</button></center>");
      intervalId = setInterval(decrement, oneSecond);
      number = 5;
    }

    function decrement() {
      number--;
      $("#show-number").html("<h2>" + number + " seconds remaining</h2>");
      if (number === 0) {
        stop();
      }
    }

    function stop() {
      clearInterval(intervalId);
      $("#stop").hide();
      $("#show-number").html("<h2>Times Up!</h2>");
      $("#correct-counter").html("<h2>Correct Answers: </h2>");
      $("#incorrect-counter").html("<h2>Incorrect Answers: </h2>");
      $("#unanswered-counter").html("<h2>Unanswered: </h2>")
    }
  
  //   var renderOne = function(character, renderArea, charStatus) {

  //   // This block of code builds the character card, and renders it to the page.
  //   var charDiv = $("<div class='character' data-name='" + character.name + "'>");
  //   var charName = $("<div class='character-name'>").text(character.name);
  //   var charImage = $("<img alt='image' class='character-image'>").attr("src", character.imageUrl);
  //   var charHealth = $("<div class='character-health'>").text(character.health);
  //   charDiv.append(charName).append(charImage).append(charHealth);
  //   $(renderArea).append(charDiv);

  //   // If the character is an enemy or defender (the active opponent), add the appropriate class.
  //   if (charStatus === "enemy") {
  //     $(charDiv).addClass("enemy");
  //   }
  //   else if (charStatus === "defender") {
  //     // Populate currDefender with the selected opponent's information.
  //     currDefender = character;
  //     $(charDiv).addClass("target-enemy");
  //   }
  // };