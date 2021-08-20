/* Crie um algoritmo que transforme notas do sistema numérico
para sistema de notas em caracteres (a, B, C...). */

/* 
let nota1 = 91
let nota = Number(nota1)


let a = nota >= 90 && nota <= 100
let b = nota >= 80 && nota < 90
let c = nota >= 70 && nota < 80
let d = nota >= 60 && nota < 70
let f = nota >= 0 && nota < 60

if (a) {
    console.log(`Parabéns, pontuação: ${nota} \n nota: A`)
}

if (b) {
    console.log(`Parabéns, sua nota é: B`)
}

if (c) {
    console.log(`Aprovado, sua nota é: C`)
}

if (d) {
    console.log(`recuperação, sua nota é: D`)
}

if (f) {
    console.log(`reprovado, sua nota é: F`)
}

if (!nota || nota > 100 || nota < 0 || nota === NaN) {
    console.log(`Nota invalida. \n você digitou: ${nota1}`)
}
 */
function calculaScore(primaryNota) {
    let nota = Number(primaryNota)

    let a = nota >= 90 && nota <= 100
    let b = nota >= 80 && nota < 90
    let c = nota >= 70 && nota < 80
    let d = nota >= 60 && nota < 70
    let f = nota >= 0 && nota < 60
    let invalid = !nota || nota > 100 || nota < 0 || nota === NaN

    let finalNota

    if (a) { finalNota = a }
    if (b) { finalNota = b }
    if (c) { finalNota = c }
    if (d) { finalNota = d }
    if (f) { finalNota = f }
    if (invalid) { finalNota = invalid }


    switch (finalNota) {
        case a:

            return nota > 98 ?
                console.log(`Parabéns NOTA MAXIMA!\n você pontuou ${nota}, sua avaliação é: A+`) :
                console.log(`Parabéns, você pontuou ${nota}, sua avaliação é: A`)
        case b:
            return console.log(`Parabéns, você pontuou ${nota}, sua avaliação é: B`)
        case c:
            return console.log(`Parabéns, você pontuou ${nota}, sua avaliação é: C`)
        case d:
            return console.log(`Você pontuou ${nota}, sua avaliação é: D`)
        case f:
            return console.log(`Você pontuou ${nota}, sua avaliação é: F\n Reprovado!`)
        case invalid:
            return console.log(`Por favor, digite uma nota valida`)
        default:
            break;
    }
}

function finalResult(primaryNota) {
    return calculaScore(primaryNota)
}


finalResult(99)




