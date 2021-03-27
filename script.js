var numeroSecreto = parseInt(Math.random() * 10)
var tentativas = 3

while (tentativas > 0) {

    var chute = parseInt(prompt("Digite um número entre 0 e 10. Você tem 3 tentativas, boa sorte!"))

    if (numeroSecreto == chute) {
        document.write("<h2>Parabéns! Você acertou!</h2>")
        break
    }
    else if (chute > numeroSecreto) {
        alert("O número secreto é menor.")
        tentativas = tentativas - 1
    }

    else if (chute < numeroSecreto) {
        alert("O número secreto é maior.")
        tentativas = tentativas - 1
    }

}

if (chute != numeroSecreto) {
    document.write("<h2>Suas tentativas acabaram. O número secreto era " + numeroSecreto + "." + "</h2>")
}
