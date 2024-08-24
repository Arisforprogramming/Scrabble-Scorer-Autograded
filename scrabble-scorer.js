// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 



const input = require("readline-sync");

const oldPointStructure = {
  1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  2: ["D", "G"],
  3: ["B", "C", "M", "P"],
  4: ["F", "H", "V", "W", "Y"],
  5: ["K"],
  8: ["J", "X"],
  10: ["Q", "Z"],
};

function oldScrabbleScorer(word) {
   word = word.toUpperCase();
  let letterPoints = "";
  let total = 0

  for (let i = 0; i < word.length; i++) {
    for (const pointValue in oldPointStructure) {
      if (oldPointStructure[pointValue].includes(word[i])) {
        letterPoints += `Points for '${word[i]}': ${pointValue}\n`
        //total += Number(pointValue)
      
      }
    }
     
  }
  return letterPoints;
  //return total
}

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
  console.log("Let's play some scrabble!\n");
  let word = input.question("Enter a word to score: ");
   return word;
  
}
let newPointStructure = transform(oldPointStructure) ;
//console.log("letter a: ", newPointStructure.a);

/*let newPointStructure = function(){
  let newPointStructure = {};
  for (const pointValue in oldPointStructure){
    for (let i = 0; i < oldPointStructure[pointValue].length; i++){
      newPointStructure[oldPointStructure[pointValue][i].toLowerCase()] = Number(pointValue);
    }
  }
  return newPointStructure;
};*/

let simpleScorer = function (word) {
  word = word.toUpperCase();
  let letterPoints = "";
  let total = 0;

  for (let i = 0; i < word.length; i++) {
    letterPoints += `Points for '${word[i]}': 1 \n`;
    total += 1; // Increment total score by 1 for each letter
  }
 // console.log(letterPoints); // Log the points for each letter
  return total; // Return the total score
};

let vowelBonusScorer = function (word) {
  word = word.toUpperCase();
  let letterPoints = "";
  let total = 0;
  let vowels =  '"A", "E", "I", "O", "U"'
  for(i = 0; i< word.length;i++){
    if(vowels.includes(word[i])){
      letterPoints += `Points for '${word[i]}': 3 \n`;
      total += 3; //
    } else{
      letterPoints += `Points for '${word[i]}': 1 \n`;
      total += 1; //
    }
  }
  //console.log(letterPoints); // Log the points for each letter
  return total; // Return the total score
}; 

/*let scrabbleScorer = function (word) {
  word = word.toUpperCase();
  let letterPoints = "";
  let total = 0
  let letter = word[i].toLowerCase();

  for (let i =0; i < word.length; i++) {
   // for (newPoint in newPointStructure) {
      if(newPointStructure.newPoint(letter)) {
        //letterPoints += `Points for '${word[i]}': ${newPointStructure[newPoint]}\n`
        total += Number(newPointStructure[newPoint])
      }
    }

  return total;
}*/

let scrabbleScorer = function (word) {
  word = word.toUpperCase();  // Convert the word to uppercase
  let total = 0;  // Initialize total score

  // Loop through each letter in the word
  for (let i = 0; i < word.length; i++) {
    let letter = word[i].toLowerCase();  // Convert the letter to lowercase

    // Check if the letter exists in the newPointStructure
    if (newPointStructure.hasOwnProperty(letter)) {
      // Add the point value of the letter to the total score
      total += newPointStructure[letter];
    }
  }

  return total;  // Return the total score
};



const scoringAlgorithms = [
  {
      name: "Simple Scorer",
      description: "Each letter is worth 1 point.",
      scorerFunction: simpleScorer
  },
  {
      name: "Bonus Vowels",
      description: "Vowels are 3 pts, consonants are 1 pt.",
      scorerFunction: vowelBonusScorer 
  },
  {
      name: "Scrabble",
      description: "The traditional scoring algorithm.",
      scorerFunction: scrabbleScorer
  }
];

function scorerPrompt(word) {
   word = word.toUpperCase();
  let selectScore = Number(input.question `Which scoring algorithm would you like to use?
   0 - Simple: One point per character
   1 - Vowel Bonus: Vowels are worth 3 points
   2 - Scrabble: Uses scrabble point system
   Enter 0, 1, or 2: `)

  let selectiveScore = scoringAlgorithms[selectScore]; 
  if(selectiveScore){
    console.log(`Score for '${word}': ${selectiveScore.scorerFunction(word)}`);

    return selectiveScore
  } else{
    console.log("Invalid choice. Please enter 0, 1, or 2.");
    return null;
  }
  
}



function transform(oldPointStructure) {
  let transformScorer = {};  // Initialize an empty object to store the transformed scoring system.

  for (let keyNum in oldPointStructure) {  // Loop through each key (keyNumber) in the oldPointStructure.
   // console.log(pointItem)
    let letterArray = oldPointStructure[keyNum];  // Get the array of letters associated with this keyNumber.
   // console.log("letterArray", letterArray)
    for (let i = 0; i < letterArray.length; i++) {  // Loop through each letter in the array.
      transformScorer[letterArray[i].toLowerCase()] = Number(keyNum);  // Convert the letter to lowercase and assign its keyNumber and assigned to transformScoreer to be property as key.
    }
  }
  return transformScorer;  // Return the transformed scoring object.
  //return console.log(transformScorer);  // check how it printed out
}



function runProgram() {
  let word = initialPrompt();;
  //console.log(scorePrint);
  // let scorePrint = oldScrabbleScorer(word);
  // console.log(scorePrint);
  //let simpleScore = simpleScorer(word);
  //console.log(simpleScore);
  //let vowelCheck = vowelBonusScorer(word);
  //console.log(vowelCheck);
 // console.log(scrabbleScorer)
 
 scorerPrompt(word);
 transform(oldPointStructure);
 scrabbleScorer(word);
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