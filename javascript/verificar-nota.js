// sistema de verificar  se o aluno vai ficar aprovado || recuperação || reprovado 
var nota1 = 5.9
var nota2  = 5.0
var media  = (nota1 + nota2) / 2;
var situacao
if (media >= 7.0){
    situacao = 'Aprovado'
}else if (media >= 5.0 && media < 7.0){
    situacao = 'Recuperação'
}else {
    situacao = 'Reprovado'
}

console.log(' Média ' + media)
console.log(' Situção: ' + situacao)