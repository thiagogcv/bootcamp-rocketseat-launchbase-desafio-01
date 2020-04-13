/**
 * CALCULO DE APOSENTADORIA
Crie um programa para calcular a aposentadoria de uma pessoa.

Obs.: Esse cálculo é fictício, dentro da aposentadoria 
existem muitos outros fatores para serem levados em conta

Baseado nos valores das fórmulas a seguir para calcular 
se a pessoa está apta ou não para se aposentar e no fim 
imprima uma mensagem em tela.

O tempo de contribuição mínimo para homens é de 35 anos e, 
para mulheres, 30 anos;
Utilizando a regra 85-95, 
a soma da idade com o tempo de contribuição do homem 
precisa ser de no mínimo 95 anos, 
enquanto a mulher precisa ter no mínimo 85 anos na soma;
 */

const nome = "Catia"
const sexo = "F"
const idade = 65
const contribuicao = 25

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