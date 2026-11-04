var agora = new Date()
var diaSem = agora.getDay()

diaSem = 3
/*
  0 = DOMINGO 
 1 = SEGUNDA 
 2 = TERÇA 
 3 = QUARTA 
 4 = QUINTA 
 5 = SEXTA 
 6 = SABADO  
 7 = Domingo da semana que vem 
 8 = Feriado
*/

console.log(diaSem)

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
        case 1: 
        console.log('Segunda')
        break
        case 2: 
        console.log('Terça')
        break
        case 3: 
        console.log('Quarta')
        break
        case 4: 
        console.log('Quinta')
       break
       case 5: 
        console.log('Sexta')
        break
        case 6:
        console.log('Sabado')
        break
        case 7:
        console.log('Domingo da semana que vem ')
        break
        case 8:
            console.log('Feriado')
            break
        default:
            console.log('[ERROOOOO] Dia invalido')
}