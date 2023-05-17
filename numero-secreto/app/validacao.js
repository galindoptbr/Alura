function verificaChute(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor invalido</div>'
        return
    }

    if (valorNaoPermitido(numero)) {
        elementoChute.innerHTML += `
            <div>Valor invalido: o numero secreto esta entre ${menorValor} e ${maiorValor}</div>
        `

        return
    }


    if (numero === numeroScreto) {
        document.body.innerHTML = `
            <h2>Voce acertou!</h2>
            <h3>O numero secretto era ${numeroScreto}</h3>
        `
    } else if (numero > numeroScreto) {
        elementoChute.innerHTML = `<div>O numero secreto e menor <i class="fa-solid fa-arrow-down"></i> </div>`

    } else {
        elementoChute.innerHTML = `<div>O numero secreto e maior <i class="fa-solid fa-arrow-up"></i> </div>`
    }

}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function valorNaoPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}