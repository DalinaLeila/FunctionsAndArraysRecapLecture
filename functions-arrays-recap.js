// Find the maximum
function maxOfTwoNumbers(numOne, numTwo) {
  return Math.max(numOne, numTwo);
}

// Finding Longest Word
var words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot"
];

function findLongestWord(array) {
  if (array.length === 0) return undefined;

  array = array.sort(function(a, b) {
    return b.length - a.length;
  });
  return array[0];
}

// Calculating a Sum
function sumArray(array) {
  if (array.length == 0) return 0;
  return array.reduce(function(a, b) {
    return a + b;
  });
}

var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// Calculate the Average
function averageNumbers(array) {
  if (array.length == 0) return undefined;

  let sum = sumArray(array);
  // let sum = array.reduce(function(a, b) {
  //   return a + b;
  // });

  let average = sum / array.length;
  return average;
}
var numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

// Array of Strings
function averageWordLength(array) {
  if (array.length == 0) return undefined;

  let wordLengthArr = array.map(function(value) {
    return value.length;
  });

  let average = averageNumbers(wordLengthArr);

  return average;
}

var wordsArr = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace"
];

function uniquifyArray(array) {
  if (array.length == 0) return undefined;

  //  let uniqueArray = [...new Set(array)];

  let filtered = array.filter(function(value, index, arr) {
    return arr.indexOf(value) === index;
  });

  return filtered;
}

uniquifyArray(wordsUnique);

var wordsUnique = [
  "crab",
  "poison",
  "contagious",
  "simple",
  "bring",
  "sharp",
  "playground",
  "poison",
  "communion",
  "simple",
  "bring"
];

// Finding Elements
function doesWordExist(array, word) {
  array.includes(word);
}

var wordsFind = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience"
];

// Counting Repetion

function howManyTimes(array, word) {
  if (array.length === 0) {
    return false;
  }

  let filtered = array.filter(function(currWord) {
    return currWord === word;
  });

  return filtered.length;
}

var wordsCount = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter"
];
