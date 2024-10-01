let numero = 123; // Substitua pelo número desejado
let soma = 0;
while (numero > 0) {
    soma += numero % 10; // Adiciona o último dígito à soma
    numero = Math.floor(numero / 10); // Remove o último dígito
}
console.log("Soma dos dígitos: " + soma);
