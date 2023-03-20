const readlineSync = require('readline-sync');

const chalk = require('chalk');

//to keep a space between 2 paragraphs
function blankLine() {
  console.log();
}


console.log(chalk.red("Welcome to DO YOU KNOW Priyanka quiz...!!!"))
blankLine();

var userName = readlineSync.question(chalk.cyanBright("What is your name ? "));
console.log(chalk.cyanBright("Hi " + userName));

if (readlineSync.keyInYN("Are you excited to play this Quiz ?") === false) {
  console.log(chalk.yellowBright("See you next time !!!"));
  process.exit();
}

console.log(chalk.blueBright("Let's begin"));
blankLine();

var score = 0;
var scoreBoard = [{
  name: "Piyu",
  score: 5,
}, {
  name: "Sandeep",
  score: 4,
}]

function showScoreBorad() {
  console.log("Score Board");
  console.log("------------")
  for (var i = 0; i < scoreBoard.length; i++) {
    console.log(scoreBoard[i].name + " " + scoreBoard[i].score)
  }
}

function compareScore() {
  for (var i = 0; i < scoreBoard.length; i++) {
    const player = scoreBoard[i];
    if (score > player.score) {
      console.log("Congratulations ! You have beatean " + player.name + "'s score");
      console.log("Please send the screenshot of your score to admin to update the scoreboard")
      break;
    }
    console.log("Sorry ! You haven't beaten a high score. Better luck next time !")
    break;
  }

}

//play function
function play(question, options, correctAnswer) {

  console.log(chalk.bold.magenta(question));

  const index = readlineSync.keyInSelect(options, "Enter your answer");
  const userAnswer = options[index];

  console.log("Your answer :" + userAnswer);
  console.log("My answer :" + correctAnswer);

  if (correctAnswer === userAnswer) {
    console.log(chalk.green("You are right !"));
    score = score + 1;
  }
  else {
    console.log(chalk.red("Sorry ! You are wrong."));
  }
  console.log(chalk.yellowBright("Your current Score : " + score));
  blankLine();
}




//array of questions Object
var questionsList = [{
  question: "1. What is my favourite color ?",
  options: ["red", "yellow", "blue", "black"],
  correctAnswer: "red",
}, {
  question: "2. What is my all time favourite costume ?",
  options: ["top-jeans", "kurta-pyjama", "salwar"],
  correctAnswer: "top-jeans",
}, {
  question: "3. Am I a book lover ?",
  options: ["yes", "know"],
  correctAnswer: "yes",

}, {
  question: "4. What is my favourite fruit ?",
  options: ["mango", "banana", "apple", "pears"],
  correctAnswer: "apple",
}, {
  question: "5. What is my favourite food ?",
  options: ["pav bhaji", "ukadiche modak", "veg biryani", "masala dosa"],
  correctAnswer: "ukadiche modak",
}, {
  question: "6. Where do I live now ?",
  options: ["mumbai", "nashik", "pune", "navi mumbai"],
  correctAnswer: "pune",
}, {
  question: "7. Which of the below task is my go to stress buster ?",
  options: ["cooking", "washing utensils", "cleaning", "all of the above"],
  correctAnswer: "washing utensils",
}, {
  question: "8. Does web development excite you ?",
  options: ["yes", "no", "sometimes", "rarely", "depends on mood"],
  correctAnswer: "yes",
}, {
  question: "9. Are you health conscious ?",
  options: ["yes", "no", "sometime"],
  correctAnswer: "yes",
}, {
  question: "10. What is your favourite hobby ?",
  options: ["reading a book", "dancing", "watching a series", "none of the above"],
  correctAnswer: "reading a book",
}];

//loop
for (var i = 0; i < questionsList.length; i++) {

  play(questionsList[i].question, questionsList[i].options, questionsList[i].correctAnswer)

}

showScoreBorad();
blankLine();
console.log(chalk.blueBright("Your Final Score :" + score));
blankLine();
compareScore();
