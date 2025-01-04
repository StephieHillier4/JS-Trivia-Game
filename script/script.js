// starting the game//

document.addEventListener('DOMContentLoaded', () => {
const startButton = document.querySelector('.second-button'); 
const bonusButton = document.querySelector('.bonus-option'); 
const allCharacterImages = document.querySelectorAll('.character img');
const scoreNumberElement = document.querySelector('#score-number');
const wrongNumberElement = document.querySelector('#wrong-number');
const bonusNumberElement = document.querySelector('#bonus-number');

startButton.classList.add('start-button-glow');
bonusButton.style.display = 'block';

let score = 0;
let wrongAnswers = 0;
let bonusQuestionsLeft = 4;

function updateScoreDisplay(){
    scoreNumberElement.textContent = score;
    wrongNumberElement.textContent = wrongAnswers;
    bonusNumberElement.textContent = bonusQuestionsLeft;
}


function startGameEffects(){
    const images = document.querySelectorAll('.character img');

    images.forEach(image => {
        image.classList.add('pulsate-effect'); 
        image.classList.add('glowing'); 
      });

      startButton.classList.remove('start-button-glow');
      bonusButton.style.display = 'block';
      bonusButton.classList.add('bonus-button-glow'); 


      updateScoreDisplay();
}

startButton.addEventListener('click', startGameEffects);

bonusButton.addEventListener('click', () => {

    if (bonusQuestionsLeft > 0) {
        bonusQuestionsLeft--;

        score += 10;

        updateScoreDisplay();

    } else {
        alert("No bonus questions left!");
    }

  });

});



    

    // document.querySelector('.bonus-option').style.display = "block";
    // questionContainer.style.display = "block";
    // startButton.style.display = "none";
    // displayQuestion()


    // const questionsData = {
    //     jerry: [
    //         {question: "What are the names of Jerry's parents?", answers: ["Tim and Jill", "Homer and Marge", "Morty and Helen", "Jack and Janet"], correct: 2},
    //         {question: "Who was Jerry's arch nemesis?", answers: [Ralph, Joey, Bob, Newman], correct: 3},
    //         {question: "What was Jerry's apartment number?", answers: ["1C", "5A", "4B", "2D"], correct: 1},
    //         {question: "Who was Jerry's dentist?", answers: ["Jake Jarmel", "Jesse James", "Tim Whatley", "Jackie Chiles"], correct: 2},
    //         {question: "What was the name of Jerry's uncle that often appeared on the show?", answers: ["Leo", "Richard", "Henry", "William"], correct: 0},
    //         {question: "What city did Jerry's parents live in", answers: ["Kansas", "New York", "Los Angeles", "Florida"], correct: 3},
    //         {question: "What was Jerry's street address?", answers: ["245 East 29th Street", "129 West 81st Street", "95 South 35th Street", "101 North 64th Street"], correct: 1},
    //         {question: "Who was Jerry's comedic rival?", answers: ["Kenny Banya", "Rodger Dodger", "Mike Mitchem", "Larry Feldman"], correct: 0},
    //         {question: "Who was Jerry's favorite super hero?", answers: ["Spiderman", "Superman", "Batman", "Aquaman"], correct: 1},
    //         {question: "What was the name of Jerry's favorite restaurant?", answers: ["Wendy's", "McDonald's", "Monks", "Reggie's"], correct: 2},
            
    //     ],

    //     elaine: [
    //         {question: "What was Elaine's full name?", answers: ["Elaine Louis Dreyfus", "Elaine Betty Davis", "Elaine Cheryl Bennett", "Elaine Marie Benes"], correct: 3},
    //         {question: "Who was Elaine's on-again/off-again boyfriend?", answers: ["David Putty", "Danny Russo", "Jimmy Jackson", "Ralph Furly"], correct: 0},
    //         {question: "What was the name of Elaine's father?", answers: ["Patrick Benes", "Bernard Benes", "Alton Benes", "Henry Benes"], correct: 2},
    //         {question: "Who was Elaine's arch nemesis?", answers: ["Sue Ellen Mischke", "Dolorus Claiborn", "Victoria Wicham", "Monica Krantz"], correct: 0},
    //         {question: "What did they name the episode of Elaine's bad dancing?", answers: ["High Kicks", "Romp Stomp", "Little Kicks", "Beat It"], correct: 2},
    //         {question: "What body part of Elaine's body did Kramar expose in a Christmas Photo?", answers: ["hip", "nipple", "buttox", "hip"], correct: 1},
    //         {question: "Who was Elaine's boss that owned a fashion magazine?", answers: ["John Lippman", "T.B. Russel", "Mr. Pitt", "Jacobo J. Peterman"], correct: 3},
    //         {question: "What city/state was Elaine from?", answers: ["Vegas, Nevada", "Seattle, Washington", "Baltitmore, Maryland", "Detroit, Michegan"], correct: 2},
    //         {question: "What was Elaine's 'secret-spilling' beverage?", answers: ["Schnapps", "Vodka", "Tequila", "Spiced Rum"], correct: 0},
    //         {question: "What was Elaine's prefession?", answers: ["Nurse", "Editor", "Accountant", "Librarian"], correct: 1},

    //     ], 

    //     george: [
    //         {question: "What was George's full name?", answers: ["George Mark Constanza", "George Michael Contanza", "George Louis Contanza", "George Raymond Constanza"], correct: 2},
    //         {question: "What are the names of George's parents?", answers: ["Frank an Estelle", "Warren and Betty", "Gerard and Mary", "Cyril and Phyllis?"], correct: 0},
    //         {question: "Whos was George's arch nemesis?", answers: ["Lenny Sholtz", "Lloyd Braun", "Ken Fitzgerald", "Barry Shoeman"], correct: 1},
    //         {question: "What was George's alias?", answers: ["Terrence Henry", "Dan Fields", "Daniel Beaumont", "Art Vandelay"], correct: 3},
    //         {question: "What professional baseball organization did George work for?", answers: ["Toronto Bluejays", "New York Mets", "Atlanta Braves", "Baltimore Orioles"], correct: 1},
    //         {question: "What did George's use as his fake profession?", answers: ["Artist", "Engineer", "Arcitect", "Marine Biologist"], correct: 2},
    //         {question: "What was name of George's late fiancee?", answers: ["Michelle Roland", "Eloise Rose", "Janice Morris", "Susan Ross"], correct: 3},
    //         {question: "What type of car did George buy because he thought it was owned by actor Jon Voight?", answers: ["Chrysler LeBaron", "Toyota Camry", "Pontiac Firebird", "Ford Mustang"], correct: 0},
    //         {question: "What body part did George get hired to model?", answers: ["feet", "hands", "eyes", "legs"], correct: 0},
    //         {question: "What real life celebrity did George go on a date with while he was still engaged?", answers: ["Janet Jackson", "Julia Roberts", "Alicia Silverstone", "Marissa Tome"], correct: 3},
    //     ],

    //     kramar: [
    //         {question: "What was Kramar's full name?", answers: ["Willis Kramer", "Harris Kramer", "Cosmo Kramar", "Astrid Kramar"], correct: 2},
    //         {question: "Who was Kramar's mom?", answers: ["DeeDee", "Billie", "Babbs", "Kiki"], correct: 2},
    //         {question: "What real life sit com did Kramar get hired on as a receptionist?", answers: ["Friends", "Who's the Boss", "Cheers", "Murphy Brown"], correct: 3},
    //         {question: "What major modeling company did Kramar do an underwear ad for?", answers: ["Calvin Klein", "Polo", "Guess", "Ambercombie and Fitch"], correct: 0},
    //         {question: "What was the name of Kramar's friend he often made reference to in the show?", answers: ["Luke Windthorpe", "Bob Sacamento", "Luthur Gilfried", "Blake Thorpe"], correct: 1},
    //         {question: "What piece of furniture did Kramar publish a book on?", answers: ["coffee table", "armoir", "curio cabinet", "couch"], correct: 0},
    //         {question: "What city did Kramar move to after the 'key' incident with Jerry?", answers: ["Las Vegas", "Los Angeles", "Atlanta", "San Fransico"], correct: 1},
    //         {question: "What major crime was Kramar once committed of but later excused from?", answers: ["arson", "extortion", "theft", "murder"], correct: 3},
    //         {question: "Who was Kramar's arch nemesis?", answers: ["Loony Toons Phil", "Psycho Stan", "Crazy Joe Divola", "Nut Job Ned"], correct: 2},
    //         {question: "How did Kramar burn down the cabin of George's finacee's father?", answers: ["matches", "cigar", "candle", "BBQ lighter"], correct: 1},
            
    //     ]
    // }
