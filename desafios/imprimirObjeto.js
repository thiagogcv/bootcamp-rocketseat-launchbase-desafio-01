const usuario = {
    nome: "Diego",
    empresa: {
        nome: "Rocketseat",
        cor: "Roxo",
        foco: "Programação",
        endereço: {
            rua: "Rua Guilherme Gembala",
            numero: 260
        }
    }
}

console.log(`O usuário ${usuario.nome} trabalha na empresa ${usuario.empresa.nome} que está localizada na ${usuario.empresa.endereço.rua}, ${usuario.empresa.endereço.numero}`);


