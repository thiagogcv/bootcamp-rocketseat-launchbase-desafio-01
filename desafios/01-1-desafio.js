const nome = "Carlos"
const peso = 118
const altura = 1.88

const imc = peso / (altura * altura)

if (imc >= 30) {

    console.log(`${nome}, você esta acima do peso com ${imc.toFixed(2)} de massa corporal. Vá a um nutricionista`)

} else {

    console.log(`${nome}, você não está acima peso com ${imc.toFixed(2)} de massa corporal. Continue se cuidando`);

}