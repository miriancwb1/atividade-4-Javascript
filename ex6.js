let numero = 5; // Substitua pelo número desejado
let fatorial = 1;
let i = numero;
while (i > 0) {
    fatorial *= i; // Multiplica o fatorial pelo número atual
    i--; // Decrementa i
}
console.log("Fatorial de " + numero + " é " + fatorial);
