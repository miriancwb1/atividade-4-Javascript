let n1 = 0, n2 = 1; // Inicia os dois primeiros números
console.log(n1); // Exibe 0
console.log(n2); // Exibe 1
let contador = 2; // Começa a contar a partir do terceiro número
while (contador < 10) {
    let proximo = n1 + n2; // Calcula o próximo número
    console.log(proximo); // Exibe o próximo número
    n1 = n2; // Atualiza n1
    n2 = proximo; // Atualiza n2
    contador++; // Incrementa o contador
}
