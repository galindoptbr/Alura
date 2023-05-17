const menorValor = 1
const maiorValor = 1000
const numeroScreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor)
}

console.log(gerarNumeroAleatorio())