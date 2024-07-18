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
//Modify the provided initialPrompt() function to prompt the user to enter a word to score.
function initialPrompt() {
   console.log("Let's play some scrabble!");
   let userInput = input.question("\nEnter a word to score: "); 
   /*console.log(`Which scoring algorithm would you like to use?

   0 - Simple: One point per character
   1 - Vowel Bonus: Vowels are worth 3 points
   2 - Scrabble: Uses scrabble point system`)*/
   console.log(oldScrabbleScorer(userInput))

   return userInput;
};

let newPointStructure;

let simpleScorer = function(word){

    let total = 0;
        word =  word.toUpperCase();
     for(i= 0; i < word.length; i++){
         total += 1;
     }
     return  total;
};  
   /* this console id just to test simpleScorer function
    console.log(simpleScorer("banana")) */

 let vowelBonusScorer = function(word){
    let total = 0;
        word = word.toUpperCase();
    const vowels = "aeiou"
      for(let i=0; i< word.length; i+3){
         if( vowels.includes(word)[i]) {
               total +=3
         }else {
               total +=1
         }
         return total;
      }
};
// when i add console.log here it stop the program from runing 
let scrabbleScorer //= oldScrabbleScorer;

const scoringAlgorithms = [] /*= [ 
   {  
      name : "Simple Score",
      Description : "Each letter is worth 1 point.",
      ScoreFunction : simpleScorer
   },
   {
      name: "Bonus Vowels", 
      description: "Vowels are 3 pts, consonants are 1 pt.",
      scoringFunction : vowelBonusScorer
   },
   {
      name: "Scrabble", 
      description: "The traditional scoring algorithm.",
      scoringFunction : scrabbleScorer
   }

   ]; */

function scorerPrompt() {
   


}

function transform() {};

function runProgram() {
   initialPrompt();
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
