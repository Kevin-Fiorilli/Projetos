// sistema de votação para ver  a idade 
var idade = 55
console.log(`Voce tem ${idade} anos`)
if (idade < 16) {
    console.log('Não Vota')
} else if (idade < 18 || idade > 65) {
    console.log('Voto opcional')
} else{
    console.log('Voto obrigatorio')

 // caso ele não faz o papel de cidadao 
 console.log('Caso vc não faz a justificativa de 30 dias vc terá que pagar uma MULTA de 3.50 R$ ')
}