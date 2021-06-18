// Manipulando Strings e Arrays

// Separe um texto que contém espaços em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços coloque "_" (underscore).

let phrase = "My baby girl, keeps getting over!"

let myPhraseArray = phrase.split(" ")

console.log(myPhraseArray)


// step two:

let myUnderScoreText = myPhraseArray.join("_")
console.log(myUnderScoreText)