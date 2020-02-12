// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes

// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!


// www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript


function duplicateEncode(word) {
    word = word.toLowerCase();
    let resultObj = {};
    [...word].map(letter => letter in resultObj ? resultObj[letter] += 1 : resultObj[letter] = 1);
    let resultArr = [...word].map(letter => resultObj[[letter]] > 1 ? ")" : "(").join("")
    return resultArr;
}

console.log(duplicateEncode("Success"));
console.log(duplicateEncode("din"));
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("(( @"));