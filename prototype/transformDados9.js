// Manipulando Arrays

let techs = ["html", "css", "js"]

// adicionar um item no fim do array
techs.push("c++")
// adicionar nocomeço
techs.unshift("kotlin")
// remover do final
techs.pop()
// remover do inicio
techs.shift()
// pegar somente alguns elementos no array
console.log(techs.slice(1,4))
// remover um ou mais itens em qualquer posição do array
techs.splice(1, 2)
// encontrar a posição de um elemento no aray
console.log(techs.indexOf('js'))


console.log(techs)
