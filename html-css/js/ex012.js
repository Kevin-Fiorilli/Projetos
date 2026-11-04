var relogio = new Date()  // faz para pega a hora atual do cliente
var hora = relogio.getHours() // sistema de hora atual 
console.log(`Agora são examente ${hora} horas`)
if (hora < 12) {
    console.log('Bom Dia Meu Amigo programador')
}else if (hora <= 18 ) {
    console.log('Boa Tarde Meu amigo programador')
}else {
    console.log('Boa Noite meu programador ')
}