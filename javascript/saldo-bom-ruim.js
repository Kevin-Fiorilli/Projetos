// sistema de verificar se o saldo e positivo ou negativo 
var saldo = 5000;
var preco = 2300;
if (saldo >= preco) {
    var sobra = saldo - preco;
    var faltou = 0;
    console.log("Compra Permitida.");
    console.log("Sobrou: R$ " + sobra);
    console.log("Faltou: R$ " + faltou);
}else {
    var faltou = preco - saldo;
    console.log("Saldo insuficiente.");
    console.log("Sobrou: R$ " + sobra);
    console.log("Faltou: R$ " + faltou);
}