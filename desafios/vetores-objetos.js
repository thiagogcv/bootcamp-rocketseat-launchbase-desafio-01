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
            { nome: "Java", especialidade: "Desktop" },
            { nome: 'MySQL', especialidade: 'Data Base' },
            { nome: 'JavaScript', especialidade: 'Web/Mobile' }
        ]
    },
    {
        nome: "Carlos",
        idade: 28,

        tecnologias: [
            { nome: "Java", especialidade: "Desktop" },
            { nome: 'PHP', especialidade: 'Web' },
            { nome: 'JavaScript', especialidade: 'Web/Mobile' }
        ]
    }
]

console.log(`O usuário ${usuario[0].nome}, tem ${usuario[0].idade} anos e trabalha com ${usuario[0].tecnologias[0].nome}, com a especialidade em ${usuario[0].tecnologias[0].especialidade}. Quanto o usuário ${usuario[1].nome}, tem ${usuario[1].idade} anos, e trabalha com ${usuario[1].tecnologias[0].nome}, com especialidade em ${usuario[1].tecnologias[0].especialidade}. Já o usuário ${usuario[2].nome}, tem ${usuario[2].idade} anos e trabalha com ${usuario[2].tecnologias[1].nome} com especialidade na ${usuario[2].tecnologias[1].especialidade}.`)

