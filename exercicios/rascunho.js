/* 
buscando e contando dados em arrays

Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios 

    * Contar o numero de categorias e o número de livros em cada categoria
    * Contar o número de autores
    * Mostrar livros do autor Augusto Cury
    * Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da baliônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiosaki e Sharon L. lechter",
            },
        ]
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os sete hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covery",
            },
        ]
    },
];

// first stage
let countCategory = booksByCategory.length

console.log(`Total de categorias: ${countCategory}`)

for(let category of booksByCategory) {
    console.log(`Total de vivros da categoria: ${category.category}`),
    console.log(category.books.length)
}

// end stage

// second stage
let totalAuthors = [];

for (let category of booksByCategory) {
    for (category of category.books) {
        if (totalAuthors.indexOf(category.author) == -1) {
            totalAuthors.push(category.author)
        }
    }
}

console.log(`Total de Autores: ${totalAuthors.length}`)
// end stage

// third stage
function showBooks (author) {
    let bookStock = [];

    for (let category of booksByCategory) {
        for (category of category.books) {
            if (category.author === author) {
                bookStock.push(category.title)
            }
        }
    }

    console.log(`Livros do autor ${author}: ${bookStock.join(', ')}\n \n`)
}

showBooks('Robert T. Kiosaki e Sharon L. lechter')

// end third and fouth stage



