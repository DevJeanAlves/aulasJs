/* ### Transformar notas escolares

Crie um algoritmo que transform notas do sistema numérico
para notas do sistema de caracteres (A,B,C...).

* de 90 para cima - A
* entre 80 - 89 - B
* entre 70 - 79 - C
* entre 60 - 69 - D
* menor que 60 - F

*/

let note = process.argv[2];
let finalNote;

function convertNote(note) {
    if(note >= 90) {
        finalNote = 'A'
    }else if(note <90 && note >79) {
        finalNote = 'B'
    }else if(note <80 && note >69) {
        finalNote = 'C'
    }else if(note <70 && note >59) {
        finalNote = 'D'
    }else if(note < 60){
        finalNote = 'F'
    }
}
convertNote(note)
console.log(finalNote)