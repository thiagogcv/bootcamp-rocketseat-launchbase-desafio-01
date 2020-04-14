const nome = "Catia"
const sexo = "F"
const idade = 66
const contribuicao = 19

const tempoContribuicao = idade + contribuicao

contribuicaoMulher = 
sexo == "F" && (contribuicao >= 30 || tempoContribuicao >= 85)

contribuicaoHomem = 
sexo == "M" && (contribuicao >= 35 || tempoContribuicao >= 95)

if (contribuicaoHomem || contribuicaoMulher) {
    console.log(`Tempo de contribuição: ${tempoContribuicao} anos`)
    console.log(`Idade: ${idade} anos`)
    console.log(`${nome}, você pode se aposentar`)
} else{
    console.log(`Tempo de contribuição: ${tempoContribuicao} anos`)
    console.log(`Idade: ${idade} anos`)
    console.log(`${nome}, você não pode se aposentar`);
    
}