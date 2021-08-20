/* ### Transformar notas escolares

Crie um algoritmo que transform notas do sistema numérico
para notas do sistema de caracteres (A,B,C...).

* de 90 para cima - A
* entre 80 - 89 - B
* entre 70 - 79 - C
* entre 60 - 69 - D
* menor que 60 - F

*/

let score = 15
let finalScore

let scoreA = score >= 90 && score <= 100
let scoreB = score >= 80 && score <= 89
let scoreC = score >= 70 && score <= 79
let scoreD = score >= 60 && score <= 69
let scoreF = score >= 0 && score <= 59

if(scoreA) {
    finalScore = 'A'
}else if(scoreB) {
    finalScore = 'B'
}else if(scoreC) {
    finalScore = 'C'
}else if(scoreD) {
    finalScore = 'D'
}else if(scoreF) {
    finalScore = 'F'
}else{
    console.log('Nota inválida')
}

if(finalScore !== 'D' && finalScore !== 'F') {
    console.log(`Parabéns Aprovado! nota final: ${finalScore}`)
}else{
    console.log(`Infelizmente Reprovado. nota final: ${finalScore}`)
}


