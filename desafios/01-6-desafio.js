//Busca por tecnologia
//Checar se o usuario utiliza CSS

const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
]

function checarUsuario(usuario){

for (let i = 0; i < usuarios.length; i++) {
    const checarUsuario = checarUsuario(usuarios[i], usuarios[i].tecnologias[i])

}
if (checarUsuario) {
    console.log(`O usuário ${usuarios} trabalha com CSS`) ;
    
}else{
    console.log(`O usuário ${usuarios} não utiliza CSS`)
}

}