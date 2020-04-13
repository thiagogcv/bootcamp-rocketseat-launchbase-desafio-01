/** Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.

Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.

Imprima em tela o nome e especialidade da primeira tecnologia que o usuário utiliza
**/

const usuario = [
    {
        nome: "Diego",
        idade: 25,

        tecnologias: [
            { nome: "C++", especialidade: "Desktop" },
            { nome: 'Python', especialidade: 'Data Science' },
            { nome: 'JavaScript', especialidade: 'Web/Mobile' }
        ]
    },
    {
        nome: "Thiago",
        idade: 36,

        tecnologias: [
            { nome: "Java", especialidade: "Web" },
            { nome: 'MySQL', especialidade: 'Data Base' },
            { nome: 'JavaScript', especialidade: 'Web/Mobile' }
        ]
    }
]

console.log(`O usuário ${usuario[0].nome}, tem ${usuario[0].idade} anos e trabalha com ${usuario[0].tecnologias[0].nome}, com a especialidade em ${usuario[0].tecnologias[0].especialidade}. Quanto o ${usuario[1].nome}, tem ${usuario[1].idade} anos, e trabalha com ${usuario[1].tecnologias[0].nome}, com especialidade em ${usuario[1].tecnologias[0].especialidade}`)
