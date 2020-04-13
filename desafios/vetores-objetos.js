/** Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.

Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.

Imprima em tela o nome e especialidade da primeira tecnologia que o usuário utiliza
**/

const usuario = {
    nome: "Diego",
    idade: 25,

    tecnologias: [
        { nome: "C++", especialidade: "Desktop" },
        { nome: 'Python', especialidade: 'Data Science' },
        { nome: 'JavaScript', especialidade: 'Web/Mobile' }
    ]
}


console.log(`O usuário ${usuario.nome}, tem ${usuario.idade} anos e trabalha com ${usuario.tecnologias[0].nome}, com a especialidade em ${usuario.tecnologias[0].especialidade}`)

