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


const nome = "Carlos"
const sexo = "M"
const idade = 35
const contribuicao = 61

const tempoContribuicao = idade + contribuicao

if (tempoContribuicao >= 95 && idade >= 35 && sexo === "M") {
    console.log(`${nome}, você pode se aposentar. você tem ${tempoContribuicao} anos de contribuição e idade de ${idade} anos permitida`)
    
}

if (tempoContribuicao >= 85 && idade >= 30 && sexo === "F") {
    console.log(`${nome}, você pode se aposentar. você tem ${tempoContribuicao} anos de contribuição e idade de ${idade} anos permitida`)

}else {
    console.log(`${nome}, você não pode se aposentar, você tem ${tempoContribuicao} anos de contribuição e sua idade de ${idade} anos não atende o mínimo permitido`);
    
}