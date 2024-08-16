// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
   1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
   2: ['D', 'G'],
   3: ['B', 'C', 'M', 'P'],
   4: ['F', 'H', 'V', 'W', 'Y'],
   5: ['K'],
   8: ['J', 'X'],
   10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
   word = word.toUpperCase();
   let letterPoints = "";

   for (let i = 0; i < word.length; i++) {

      for (const pointValue in oldPointStructure) {

         if (oldPointStructure[pointValue].includes(word[i])) {
            letterPoints += `Points for '${word[i]}': ${pointValue}\n`
         }

      }
   }
   return letterPoints;
}

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt(questions) {
   console.log("Let's play some scrabble!\n\n");
   let askQuestion = input.question("Enter a word to score: ");

   return askQuestion;
};

let question2 =
   `Which scoring algorithm would you like to use?
  
   0 - Simple: One point per character
   1 - Vowel Bonus: Vowels are worth 3 points
   2 - Scrabble: Uses scrabble point system
   Enter 0, 1, or 2: `

let newPointStructure;

let simpleScorer = function (word1) {
   word1 = word1.toUpperCase();
   let letterPoints = "";
   for (let i = 0; i < word1.length; i++) {
      letterPoints += `Points for '${word1[i]}': 1\n`
      console.log(letterPoints);
   }
   return letterPoints;
};

let vowelBonusScorer = function (word2) {
   word2 = word2.toUpperCase();
   let letterPoints = "";
   for (let i = 0; i < word2.length; i++) {
      if (word2[i] === "A" || word2[i] === "E" || word2[i] === "I" || word2[i] === "O" || word2[i] === "U") {
         letterPoints += `Points for '${word2[i]}': 3\n`
      } else {
         letterPoints += `Points for '${word2[i]}': 1\n`
      }
   }
   return letterPoints;
};

let scrabbleScorer = oldScrabbleScorer;

const scoringAlgorithms = [{
      name: "simple Score",
      description: "Each letter is worth 1 point.",
      scoreFunction: simpleScorer
   },
   {
      name: "Bonus Vowels",
      description: "Vowels are 3 pts, consonants are 1 pt.",
      scoreFunction: vowelBonusScorer
   },
   {
      name: "Scrabble",
      description: "Uses the oldScrabbleScorer() function to determine the score for a given word.",
      scoreFunction: scrabbleScorer
   }
];

function scorerPrompt(userSelect) {
    userSelect = (input.question(question2));
   if (userSelect === 0) {
      console.log(`\nYou have selected the simple scoring algorithm.\n\n${simpleScorer[0]}`)
   } else if (userSelect === 1) {
      console.log(`\nYou have selected the Bonus Vowels algorithm.\n\n${vowelBonusScorer[1]}`)
   } else if (userSelect === 2) {
      console.log(`\nYou have selected the Scrabblealgorithm.\n\n${scrabbleScorer[2]}`)
   } else {
      (console.log("Please only select 0,1 or 2"))
      //return scorerPrompt();
   }
   return userSelect;
}

function transform() {};

function runProgram() {
   let wordInput = initialPrompt();
   let userSelectNum = scorerPrompt();
   //console.log(userSelectNum);
   console.log(simpleScorer(wordInput ));
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
   runProgram: runProgram,
   scorerPrompt: scorerPrompt
};