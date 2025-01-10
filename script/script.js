// DECLARATIONS//

document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.querySelector(".second-button");
  const allCharacterImages = document.querySelectorAll(".character img");
  const questionContainer = document.querySelector(".question-container");
  const questionTitle = document.querySelector("#question-title");
  const answersContainer = document.querySelector("#answers-container");
  const gameArea = document.querySelector(".oval-container");
  const scoreNumberElement = document.querySelector("#score-number");
  const wrongNumberElement = document.querySelector("#wrong-number");
  const backgroundOverlay = document.createElement("div");
  const bonusButton = document.querySelector(".bonus-option");
  const bonusQuestionContainer = document.querySelector(
    ".bonus-question-container"
  );
  const bonusNumberElement = document.querySelector("#bonus-number");
  const bonusQuestionTitle = document.querySelector("#bonusQuestionTitle");
  const bonusAnswersContainer = document.querySelector("#bonusAnswerInput");
  const submitBonusAnswerButton = document.querySelector("#submitBonusAnswer");

  startButton.classList.add("start-button-glow");
  bonusButton.style.display = "block";

  let score = 0;
  let wrongAnswers = 0;
  let bonusQuestionsLeft = 4;
  let currentQuestionIndex = { jerry: 0, elaine: 0, george: 0, kramer: 0 };
  let maxedOutCharacters = [];
  let bonusButtonActive = false;

  let allAnswered = {
    jerry: false,
    elaine: false,
    george: false,
    kramer: false,
  };

  let allAnsweredBonus = {
    jerry: false,
    elaine: false,
    george: false,
    kramer: false,
  };

  let gameStarted = false;

//   REGULAR GAME MODE QUESTIONS //
  const questions = {
    jerry: [
      {
        question: "What are the names of Jerry's parents?",
        answers: [
          "Tim and Jill",
          "Homer and Marge",
          "Morty and Helen",
          "Jack and Janet",
        ],
        correct: 2,
      },
      {
        question: "Who was Jerry's arch nemesis?",
        answers: ["Ralph", "Joey", "Bob", "Newman"],
        correct: 3,
      },
      {
        question: "What was Jerry's apartment number?",
        answers: ["1C", "5A", "4B", "2D"],
        correct: 1,
      },
      {
        question: "Who was Jerry's dentist?",
        answers: ["Jake Jarmel", "Jesse James", "Tim Whatley", "Jackie Chiles"],
        correct: 2,
      },
      {
        question:
          "What was the name of Jerry's uncle that often appeared on the show?",
        answers: ["Leo", "Richard", "Henry", "William"],
        correct: 0,
      },
      {
        question: "What city did Jerry's parents live in",
        answers: ["Kansas", "New York", "Los Angeles", "Florida"],
        correct: 3,
      },
      {
        question: "What was Jerry's street address?",
        answers: [
          "245 East 29th Street",
          "129 West 81st Street",
          "95 South 35th Street",
          "101 North 64th Street",
        ],
        correct: 1,
      },
      {
        question: "Who was Jerry's comedic rival?",
        answers: [
          "Kenny Banya",
          "Rodger Dodger",
          "Mike Mitchem",
          "Larry Feldman",
        ],
        correct: 0,
      },
      {
        question: "Who was Jerry's favorite super hero?",
        answers: ["Spiderman", "Superman", "Batman", "Aquaman"],
        correct: 1,
      },
      {
        question: "What was the name of Jerry's favorite restaurant?",
        answers: ["Wendy's", "McDonald's", "Monks", "Reggie's"],
        correct: 2,
      },
    ],
    elaine: [
      {
        question: "What was Elaine's full name?",
        answers: [
          "Elaine Louis Dreyfus",
          "Elaine Betty D",
          "Elaine Cheryl Bennett",
          "Elaine Marie Benes",
        ],
        correct: 3,
      },
      {
        question: "Who was Elaine's on-again/off-again boyfriend?",
        answers: ["David Putty", "Danny Russo", "Jimmy Jackson", "Ralph Furly"],
        correct: 0,
      },
      {
        question: "What was the name of Elaine's father?",
        answers: [
          "Patrick Benes",
          "Bernard Benes",
          "Alton Benes",
          "Henry Benes",
        ],
        correct: 2,
      },
      {
        question: "Who was Elaine's arch nemesis?",
        answers: [
          "Sue Ellen Mischke",
          "Dolorus Claiborn",
          "Victoria Wicham",
          "Monica Krantz",
        ],
        correct: 0,
      },
      {
        question: "What did they name the episode of Elaine's bad dancing?",
        answers: ["High Kicks", "Romp Stomp", "Little Kicks", "Beat It"],
        correct: 2,
      },
      {
        question:
          "What body part of Elaine's body did Kramar expose in a Christmas Photo?",
        answers: ["hip", "nipple", "buttox", "thigh"],
        correct: 1,
      },
      {
        question: "Who was Elaine's boss that owned a fashion magazine?",
        answers: [
          "John Lippman",
          "T.B. Russel",
          "Mr. Pitt",
          "Jacobo J. Peterman",
        ],
        correct: 3,
      },
      {
        question: "What city/state was Elaine from?",
        answers: [
          "Vegas, Nevada",
          "Seattle, Washington",
          "Baltitmore, Maryland",
          "Detroit, Michegan",
        ],
        correct: 2,
      },
      {
        question: "What was Elaine's 'secret-spilling' beverage?",
        answers: ["Schnapps", "Vodka", "Tequila", "Spiced Rum"],
        correct: 0,
      },
      {
        question: "What was Elaine's profession?",
        answers: ["Nurse", "Editor", "Accountant", "Librarian"],
        correct: 1,
      },
    ],
    george: [
      {
        question: "What was George's full name?",
        answers: [
          "George Mark Constanza",
          "George Michael Contanza",
          "George Louis Contanza",
          "George Raymond Constanza",
        ],
        correct: 2,
      },
      {
        question: "What are the names of George's parents?",
        answers: [
          "Frank an Estelle",
          "Warren and Betty",
          "Gerard and Mary",
          "Cyril and Phyllis?",
        ],
        correct: 0,
      },
      {
        question: "Whos was George's arch nemesis?",
        answers: [
          "Lenny Sholtz",
          "Lloyd Braun",
          "Ken Fitzgerald",
          "Barry Shoeman",
        ],
        correct: 1,
      },
      {
        question: "What was George's alias?",
        answers: [
          "Terrence Henry",
          "Dan Fields",
          "Daniel Beaumont",
          "Art Vandelay",
        ],
        correct: 3,
      },
      {
        question:
          "What professional baseball organization did George work for?",
        answers: [
          "Toronto Bluejays",
          "New York Mets",
          "Atlanta Braves",
          "Baltimore Orioles",
        ],
        correct: 1,
      },
      {
        question: "What did George's use as his fake profession?",
        answers: ["Artist", "Engineer", "Arcitect", "Marine Biologist"],
        correct: 2,
      },
      {
        question: "What was name of George's late fiancee?",
        answers: [
          "Michelle Roland",
          "Eloise Rose",
          "Janice Morris",
          "Susan Ross",
        ],
        correct: 3,
      },
      {
        question:
          "What type of car did George buy because he thought it was owned by actor Jon Voight?",
        answers: [
          "Chrysler LeBaron",
          "Toyota Camry",
          "Pontiac Firebird",
          "Ford Mustang",
        ],
        correct: 0,
      },
      {
        question: "What body part did George get hired to model?",
        answers: ["feet", "hands", "eyes", "legs"],
        correct: 1,
      },
      {
        question:
          "What real life celebrity did George go on a date with while he was still engaged?",
        answers: [
          "Janet Jackson",
          "Julia Roberts",
          "Alicia Silverstone",
          "Marissa Tome",
        ],
        correct: 3,
      },
    ],
    kramer: [
      {
        question: "What was Kramer's full name?",
        answers: [
          "Willis Kramer",
          "Harris Kramer",
          "Cosmo Kramer",
          "Astrid Kramer",
        ],
        correct: 2,
      },
      {
        question: "Who was Kramer's mom?",
        answers: ["DeeDee", "Billie", "Babbs", "Kiki"],
        correct: 2,
      },
      {
        question:
          "What real life sit com did Kramer get hired on as a receptionist?",
        answers: ["Friends", "Who's the Boss", "Cheers", "Murphy Brown"],
        correct: 3,
      },
      {
        question:
          "What major modeling company did Kramer do an underwear ad for?",
        answers: ["Calvin Klein", "Polo", "Guess", "Ambercombie and Fitch"],
        correct: 0,
      },
      {
        question:
          "What was the name of Kramer's friend he often made reference to in the show?",
        answers: [
          "Luke Windthorpe",
          "Bob Sacamento",
          "Luthur Gilfried",
          "Blake Thorpe",
        ],
        correct: 1,
      },
      {
        question: "What piece of furniture did Kramer publish a book on?",
        answers: ["coffee table", "armoir", "curio cabinet", "couch"],
        correct: 0,
      },
      {
        question:
          "What city did Kramer move to after the 'key' incident with Jerry?",
        answers: ["Las Vegas", "Los Angeles", "Atlanta", "San Fransico"],
        correct: 1,
      },
      {
        question:
          "What major crime was Kramer once committed of but later excused from?",
        answers: ["arson", "extortion", "theft", "murder"],
        correct: 3,
      },
      {
        question: "Who was Kramer's arch nemesis?",
        answers: [
          "Loony Toons Phil",
          "Psycho Stan",
          "Crazy Joe Divola",
          "Nut Job Ned",
        ],
        correct: 2,
      },
      {
        question:
          "How did Kramer burn down the cabin of George's finacee's father?",
        answers: ["matches", "cigar", "candle", "BBQ lighter"],
        correct: 1,
      },
    ],
  };

//   BONUS QUESTIONS //

const bonusQuestions = {
    jerry: [
      {
        question:
          "What was Jerry's proper full name (first, middle, and last) in the Seinfeld sitcom?",
        answer: "Jeremiah Thomas Seinfeld",
      },
    ],
    elaine: [
      {
        question:
          "What was the name of the store where Elaine bought her favorite pair of shoes?",
        answer: "Boticellis",
      },
    ],
    george: [
      { question: "What was George's secret PIN code?", answer: "Bosco" },
    ],
    kramer: [
      {
        question:
          "What was the name of the cologne that Kramer created which was later stolen by Calvin Klein and renamed Ocean?",
        answer: "The Beach",
      },
    ],
  };

//  SCORE RESET SECTION //
  function updateScoreDisplay() {
    scoreNumberElement.textContent = score;
    wrongNumberElement.textContent = wrongAnswers;
    bonusNumberElement.textContent = bonusQuestionsLeft;
  }

//  START GAME SECTION //
  function startGameEffects() {
    const images = document.querySelectorAll(".character img");

    images.forEach((image) => {
      image.classList.add("pulsate-effect");
      image.classList.add("glowing");
      image.style.pointerEvents = "auto";
    });

    startButton.classList.remove("start-button-glow");
    bonusButton.style.display = "block";
    bonusButton.classList.add("bonus-button-glow");

    updateScoreDisplay();

    gameStarted = true;
  }

  startButton.addEventListener("click", () => {
    startGameEffects();
    bonusButton.classList.remove("inactive");
  });

  document.body.appendChild(backgroundOverlay);
  backgroundOverlay.classList.add("background-overlay");
  allCharacterImages.forEach((image) => {
    image.addEventListener("click", function () {
      if (!gameStarted) {
        alert("Please start the game first!");
        return;
      }
      if (!bonusButtonActive) {
        const character = this.id;
        const characterQuestions = questions[character];

        if (allAnswered[character]) {
          alert(`All questions for ${character} have been answered!`);
          return;
        }

        gameArea.classList.add("fade-out");
        backgroundOverlay.style.display = "block";
        questionContainer.style.display = "block";
        document.body.appendChild(questionContainer);

        displayQuestion(characterQuestions, character);
      } else {
        const character = this.id;

        
        // we need to do some kind of check here, to see whether the question for this
        // character has been asked or not.
        
        // we should just mark the character as having been questioned at this point
        // because either they get it right, and thats true
        // or they get it wrong, and it resets anyway
        if (allAnsweredBonus[character]) {
            alert(`All questions for ${character} have been answered!`);
            return;
          } else {
            displayBonusQuestions(character);
          }
       
        allAnsweredBonus[character] = true; // mark them as answered, AFTER
        // displayBonusQuestions is called 
      }
    });
  });

  function displayQuestion(characterQuestions, character) {
    const questionIndex = currentQuestionIndex[character];
    const questionData = characterQuestions[questionIndex];

    if (!questionData || questionIndex >= characterQuestions.length) {
      allAnswered[character] = true;
      setTimeout(() => {
        alert(
          `All questions for ${character} have been answered! Please choose another character.`
        );
        questionContainer.style.display = "none";
        backgroundOverlay.style.display = "none";
        gameArea.classList.remove("fade-out");
      }, 100);
      return;
    }

    questionTitle.textContent = questionData.question;
    answersContainer.innerHTML = "";

    questionData.answers.forEach((answer, index) => {
      const answerButton = document.createElement("button");
      answerButton.textContent = answer;
      answerButton.classList.add("answer-button");
      answerButton.style.marginRight = "20px";
      answerButton.style.color = "blue";
      answerButton.addEventListener("click", () => {
        checkAnswer(
          index,
          questionData.correct,
          characterQuestions,
          questionIndex,
          character
        );
      });
      answersContainer.appendChild(answerButton);
    });
  }

  function checkAnswer(
    selectedIndex,
    correctIndex,
    characterQuestions,
    questionIndex,
    character
  ) {
    const message = document.createElement("div");
    if (selectedIndex === correctIndex) {
      score += 5;
      message.textContent = "Great Job, Seinfeld producers would be proud!";
    } else {
      wrongAnswers += 1;
      score -= 5;
      message.textContent =
        "Sorry wrong answer, maybe you should try 'Friends' trivia instead!";

      if (wrongAnswers >= 4 || bonusQuestionsLeft === 0) {
        displayLoseGameMessage();
        return;
      }
    }

    score = Math.max(score, 0);

    message.style.fontSize = "30px";
    message.style.textAlign = "center";
    message.style.marginTop = "20px";
    message.style.fontWeight = "bold";
    answersContainer.appendChild(message);

    updateScoreDisplay();

    // LOSE SECTION//
    function displayLoseGameMessage() {
      if (questionContainer) {
        questionContainer.style.display = "none";
      }
      backgroundOverlay.style.display = "none";

      const loseMessage = document.createElement("div");
      loseMessage.classList.add("lose-message");
      loseMessage.textContent =
        "Game Over! You've lost! Click the Start Seinfeld Trivia button to try again!";
      loseMessage.style.fontSize = "40px";
      loseMessage.style.textAlign = "center";
      loseMessage.style.fontWeight = "bold";
      loseMessage.style.color = "yellow";
      loseMessage.style.position = "fixed";
      loseMessage.style.top = "50%";
      loseMessage.style.left = "50%";
      loseMessage.style.transform = "translate(-50%, -50%)";
      loseMessage.style.zIndex = "1000";

      document.body.appendChild(loseMessage);

      const gif = document.createElement("img");
      gif.src = "https://giffiles.alphacoders.com/417/41778.gif";
      gif.alt = "Game Over GIF";
      gif.style.width = "900px";
      gif.style.height = "400px";
      gif.style.border = "5px solid yellow";
      gif.style.objectFit = "cover";
      gif.style.position = "fixed";
      gif.style.top = "30%";
      gif.style.left = "50%";
      gif.style.transform = "translateX(-50%)";
      document.body.appendChild(gif);

      setTimeout(() => {
        loseMessage.remove();
        gif.remove();
        resetGame();
        updateScoreDisplay();
      }, 4000);
    }

    // WIN SECTION//
    if (score >= 40 && !document.querySelector(".win-message")) {
      questionContainer.style.display = "none";
      backgroundOverlay.style.display = "none";

      const winMessage = document.createElement("div");
      winMessage.classList.add("win-message");
      winMessage.textContent =
        "Congratulations! You've won the game! 🎉 Hit Start Seinfeld Trivia Game to play again!";
      winMessage.style.fontSize = "40px";
      winMessage.style.textAlign = "center";
      winMessage.style.fontWeight = "bold";
      winMessage.style.color = "yellow";
      winMessage.style.position = "fixed";
      winMessage.style.top = "50%";
      winMessage.style.left = "50%";
      winMessage.style.transform = "translate(-50%, -50%)";
      winMessage.style.zIndex = "1000";

      const gif = document.createElement("img");
      gif.src = "https://media.giphy.com/media/91o6Q8CZlGljO/giphy.gif";
      gif.alt = "Celebration GIF";
      gif.style.width = "800px";
      gif.style.height = "400px";
      gif.style.border = "5px solid yellow";
      gif.style.objectFit = "cover";
      gif.style.position = "fixed";
      gif.style.top = "30%";
      gif.style.left = "50%";
      gif.style.transform = "translateX(-50%)";

      document.body.appendChild(gif);
      document.body.appendChild(winMessage);

      setTimeout(() => {
        winMessage.style.display = "none";
        gif.style.display = "none";
        resetGame();
        updateScoreDisplay();

        backgroundOverlay.style.display = "none";
        gameArea.classList.remove("fade-out");
      }, 5000);
    }

    if (currentQuestionIndex[character] < characterQuestions.length - 1) {
      currentQuestionIndex[character]++;
    } else {
      allAnswered[character] = true;

      setTimeout(() => {
        alert(
          `All questions for ${character} have been answered! Please choose another character.`
        );
        questionContainer.style.display = "none";
        backgroundOverlay.style.display = "none";
        gameArea.classList.remove("fade-out");
      }, 1000);
    }

    setTimeout(() => {
      questionContainer.style.display = "none";
      backgroundOverlay.style.display = "none";
      gameArea.classList.remove("fade-out");
    }, 3000);
  }

//   RESET GAME SECTION //
  function resetGame() {
    gameStarted = false;
    const images = document.querySelectorAll(".character img");

    images.forEach((image) => {
      image.classList.remove("pulsate-effect");
      image.classList.remove("glowing");
      image.style.pointerEvents = "auto";
    });
    bonusButton.style.display = "block";
    bonusButton.classList.remove("bonus-button-glow");
    bonusButtonActive = false;
    startButton.classList.add("start-button-glow");
    maxedOutCharacters = [];
    score = 0;
    wrongAnswers = 0;
    bonusQuestionsLeft = 4;
    currentQuestionIndex = { jerry: 0, elaine: 0, george: 0, kramer: 0 };
    allAnswered = {
      jerry: false,
      elaine: false,
      george: false,
      kramer: false,
    };

    updateScoreDisplay();
  }
// ENTIRE BONUS SECTION //

// BONUS CONSTS //
// const bonusButton = document.querySelector(".bonus-option");
//   const bonusQuestionContainer = document.querySelector(".bonus-question-container");
//   const bonusNumberElement = document.querySelector("#bonus-number");
//   const bonusQuestionTitle = document.querySelector("#bonusQuestionTitle");
//   const bonusAnswersContainer = document.querySelector("#bonusAnswerInput");
//   const submitBonusAnswerButton = document.querySelector("#submitBonusAnswer");

//   bonusButton.style.display = "block";

  

//   BONUS EVENT LISTENERS //
  bonusButton.addEventListener("click", () => {
    if (!gameStarted) {
      alert("Please start the game first!");
      return;
    }
    bonusQuestionContainer.style.display = "none";

    if (bonusButtonActive) {
      alert("You're already in Bonus Mode!");
    } else if (bonusQuestionsLeft > 0) {
      bonusQuestionsLeft--;
      bonusButtonActive = true;
      alert(
        "You're now in Bonus Mode! Double the points for correct answers, but one wrong answer ends the game! Please choose a character for a bonus question."
      );

    //   bonusAnswerInput.value = "";
      document.querySelector("#bonusFeedback").textContent = "";

      if (!bonusQuestions || bonusQuestions.length === 0) {
        alert(`No bonus questions available for ${character}.`);
        return;
      }

      updateScoreDisplay();
    } else {
      alert("No bonus questions left!");
    }
  });

  submitBonusAnswerButton.addEventListener("click", () =>
      checkBonus()
    );
 
//  BONUS FUNCTIONS //
let correctAnswer;
function displayBonusQuestions(character) {
  bonusQuestionContainer.style.display = "block";
  bonusQuestionTitle.textContent = bonusQuestions[character][0].question;
  correctAnswer = bonusQuestions[character][0].answer;
}
//   not sure if it's the character not being cleared in between bonus question selection line.418 //
  function checkBonus() {
    let userInput = bonusAnswersContainer.value.trim();
    
    if (userInput === correctAnswer.trim()) {
      // answer was right
        bonusButtonActive = false; // turn off bonus mode, so next question
        // is back in regular mode
        bonusQuestionContainer.style.display = "none";
        bonusAnswersContainer.value = "";
        correctAnswer="";
        userInput="";
        score += 10;
        updateScoreDisplay();
        console.log(score)
        
      if (score >= 40 && !document.querySelector(".win-message")) {
        backgroundOverlay.style.display = "block";

        const winMessage = document.createElement("div");
        winMessage.classList.add("win-message");
        winMessage.textContent =
          "Congratulations! You've won the game! 🎉 Hit Start Seinfeld Trivia Game to play again!";
        winMessage.style.fontSize = "40px";
        winMessage.style.textAlign = "center";
        winMessage.style.fontWeight = "bold";
        winMessage.style.color = "yellow";
        winMessage.style.position = "fixed";
        winMessage.style.top = "50%";
        winMessage.style.left = "50%";
        winMessage.style.transform = "translate(-50%, -50%)";
        winMessage.style.zIndex = "1000";

        const gif = document.createElement("img");
        gif.src = "https://media.giphy.com/media/91o6Q8CZlGljO/giphy.gif";
        gif.alt = "Celebration GIF";
        gif.style.width = "800px";
        gif.style.height = "400px";
        gif.style.border = "5px solid yellow";
        gif.style.objectFit = "cover";
        gif.style.position = "fixed";
        gif.style.top = "30%";
        gif.style.left = "50%";
        gif.style.transform = "translateX(-50%)";

        document.body.appendChild(gif);
        document.body.appendChild(winMessage);

        setTimeout(() => {
          winMessage.style.display = "none";
          gif.style.display = "none";
          resetGame();

          backgroundOverlay.style.display = "none";
          gameArea.classList.remove("fade-out");
        }, 5000);
      }
    } else {
      gameOver();
    }
    
  }


  function gameOver() {
    if (bonusQuestionContainer) {
      bonusQuestionContainer.style.display = "none";
    }
    backgroundOverlay.style.display = "none";

    const loseMessage = document.createElement("div");
    loseMessage.classList.add("lose-message");
    loseMessage.textContent =
      "Game Over! You've lost! Click the Start Seinfeld Trivia button to try again!";
    loseMessage.style.fontSize = "40px";
    loseMessage.style.textAlign = "center";
    loseMessage.style.fontWeight = "bold";
    loseMessage.style.color = "yellow";
    loseMessage.style.position = "fixed";
    loseMessage.style.top = "50%";
    loseMessage.style.left = "50%";
    loseMessage.style.transform = "translate(-50%, -50%)";
    loseMessage.style.zIndex = "1000";

    document.body.appendChild(loseMessage);

    const gif = document.createElement("img");
    gif.src = "https://giffiles.alphacoders.com/417/41778.gif";
    gif.alt = "Game Over GIF";
    gif.style.width = "900px";
    gif.style.height = "400px";
    gif.style.border = "5px solid yellow";
    gif.style.objectFit = "cover";
    gif.style.position = "fixed";
    gif.style.top = "30%";
    gif.style.left = "50%";
    gif.style.transform = "translateX(-50%)";
    document.body.appendChild(gif);

    setTimeout(() => {
      loseMessage.remove();
      gif.remove();
      resetGame();
      updateScoreDisplay();
    }, 4000);
  }

  updateScoreDisplay();
});
