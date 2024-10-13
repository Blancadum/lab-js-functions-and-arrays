// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
  return a > b ? a : b;
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
  if (words.length === 0) return null;
  
  let longestWord = words[0];
  
  words.forEach(word => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });
  
  return longestWord;
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
  if (numbers.length === 0) return 0;
  
  const sum = sumNumbers(numbers);
  return sum / numbers.length;
}


// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words, wordToFind) {
  if (words.length === 0) return null;

  return words.includes(wordToFind);
}
