# TriviaGame
(HW - TriviaGame)

## Live Link
 - https://wardcj1.github.io/TriviaGame

## At the start of the game, questions display and the user clicks on their answer choice.

## HW Requirements
#### Create a Trivia game using JavaScript for the logic and jQuery to manipulate HTML. Be sure to layout this app with valid HTML and stylish CSS.

- 

## Technologies Used
- Jquery for Dom Manipulation
- html
- css
- bootstrap

## Sample Code Used
  function renderQ() {
    var quesDiv = $("<div class=questions><h3>" + questions[questionNum].ask + "</h3></div>");
    var ans1 = $("<div class=trueAns>" + questions[questionNum].trueAns + "</div>");
    var ans2 = $("<div class=falseAns>" + questions[questionNum].falseAns1 + "</div>");
    var ans3 = $("<div class=falseAns>" + questions[questionNum].falseAns2 + "</div>");
    var ans4 = $("<div class=falseAns>" + questions[questionNum].falseAns3 + "</div>");
    quesDiv.append(ans1).append(ans2).append(ans3).append(ans4);
    $("#questions").append(quesDiv);
      ansCheck();
  };

 - Creates a new question with each click.
