// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.

//www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript

function high(x) {
  const letterscores = "abcdefghijklmnopqrstuvwxyz".split("");
  const wordScores = {};
  x = x.split(" ");
  x.forEach(word => {
    let wordScore = 0;
    word.split("").forEach(letter => {
      wordScore += letterscores.indexOf(letter) + 1;
    });
    wordScores[word] = wordScore;
  });
  let finalScore = 0;
  let finalKey = "";
  for (let key in wordScores) {
    if (wordScores[key] > finalScore) {
      finalScore = wordScores[key];
      finalKey = key;
    }
  }
  return finalKey;
}

console.log(high("man i need a taxi up to ubud"));
console.log(high("what time are we climbing up the volcano"));
console.log(high("take me to semynak"));
console.log(high("a bb"));
console.log(high("b aa"));
