let numeroSecreto = Math.floor(Math.random() * 10) + 1; // Número entre 1 e 10
let palpite = 0; // Inicializa o palpite
while (palpite !== numeroSecreto) {
    palpite = parseInt(prompt("Adivinhe o número entre 1 e 10:")); // Solicita um palpite
    if (palpite < numeroSecreto) {
        console.log("Muito baixo! Tente novamente.");
    } else if (palpite > numeroSecreto) {
        console.log("Muito alto! Tente novamente.");
    } else {
        console.log("Você acertou!");
    }
}
