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

let numbOfCategory = booksByCategory.length

console.log(numbOfCategory)

for(let categories of booksByCategory) {
    console.log(`total de livrosa da ${categories.category}`),
    console.log(categories.books.length)
}

function countAuthors () {
    let authors = [];

    for(let categories of booksByCategory) {
        for(let book of categories.books) {
            if(authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
        }
    }
    console.log(`Total de autores: ${authors.length}`)
}

countAuthors()

function mostrarLivros (autor) {
    let books = [];

    for(categories of booksByCategory) {
        for(indice of categories.books)
        if(indice.author === autor) {
            livros.push(indice.title)
        }
    }
    console.log(`Livros do autor ${autor}: ${books.join(', ')}`)
}

mostrarLivros('Augusto Cury')