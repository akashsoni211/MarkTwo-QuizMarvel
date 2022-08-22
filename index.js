var readLineSync = require('readline-sync')
var score = 0
var current_user = ""
var high_scores = [
  {
    name: "Akash",
    score: "5"
  },
  {
    name: "Akki",
    score: "4"
  }
]

questionAnswerList = [
  {
    question: "1.What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe?\n1.2005\n2.2010\n3.2008\n4.2012\nAns=>",
    answer: "3"
  },
  {
    question: "What is the name of Thor’s hammer?\n1.Vanir\n2.Norn\n3.Aesir\n4.Mjolnir\nAns=>",
    answer: "4"
  },
  {
    question: "What is Captain America’s shield made of?\n1.Adamantium\n2.Vibranium\n3.Promethium\n4.Carbonadium\nAns=>",
    answer: "2"
  },
  {
    question: "The Flerkens are a race of extremely dangerous aliens that resembles what?\n1.Reptiles\n2.Ducks\n3.Cats\n4.Raccoons\nAns=>",
    answer: "3"
  },
  {
    question: "What is the real name of the Black Panther?\n1.T’Challa\n2.M’Baku\n3.N’Jadaka\n4.N’Jobu\nAns=>",
    answer: "1"
  }
]

function welcome() {
  var current_user = readLineSync.question("Enter Your Name = ")
  console.log("Welcome " + current_user + "\nBest Of luck\n")
}

function play(question, answer) {
  var useranswer = readLineSync.question(question)
  if (useranswer.toUpperCase == answer.toUpperCase) {
    console.log("Right Answer")
    score += 1
  }
  else {
    console.log("Wrong Answer")
  }
  console.log("Current Score=" + score)
  console.log(" ----------------------- ")
}

function funQuizGame() {
  for (var itr = 0; itr < questionAnswerList.length; itr++) {
    var question = questionAnswerList[itr].question
    var answer = questionAnswerList[itr].answer
    play(question, answer)
  }
}

function showScore() {
  if (score > 3) {
    console.log("Congo " + current_user + "Your Score is :" + score)
  }
  else {
    console.log("Better luck next time " + current_user + "Your Score is: " + score)
  }

  for (var itr = 0; itr < high_scores.length; itr++) {
    console.log("\nName: " + high_scores[itr].name + "Score: " + high_scores[itr].score)
  }
  console.log("\n If you think you score highest send me screenshot. I will Update the list")
}

welcome()
funQuizGame()
showScore()
