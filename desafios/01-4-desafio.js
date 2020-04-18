const programador = [
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

console.log(`O usuário ${programador[0].nome}, tem ${programador[0].idade} anos e trabalha com ${programador[0].tecnologias[0].nome}, com a especialidade em ${programador[0].tecnologias[0].especialidade}. Quanto o usuário ${programador[1].nome}, tem ${programador[1].idade} anos, e trabalha com ${programador[1].tecnologias[0].nome}, com especialidade em ${programador[1].tecnologias[0].especialidade}. Já o usuário ${programador[2].nome}, tem ${programador[2].idade} anos e trabalha com ${programador[2].tecnologias[1].nome} com especialidade na ${programador[2].tecnologias[1].especialidade}.`)

