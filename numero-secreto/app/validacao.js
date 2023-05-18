function verificaChute(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor invalido burro</div>'
        return
    }

    if (valorNaoPermitido(numero)) {
        elementoChute.innerHTML += `
            <div>Valor invalido: o numero secreto esta entre ${menorValor} e ${maiorValor}</div>
        `

        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Voce acertou!</h2>
            <h3>O numero secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">JOGAR NOVAMENTE</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML = `
        <div>Voce disse:</div>
        <span class="box">${chute}</span>
        <div>O numero secreto e menor <i class="fa-solid fa-arrow-down"></i> </div>`

    } else {
        elementoChute.innerHTML = `
        <div>Voce disse:</div>
        <span class="box">${chute}</span>
        <div>O numero secreto e maior <i class="fa-solid fa-arrow-up"></i> </div>`
    }

}

function chuteForInvalido(numero) {
    return isNaN(numero);
}

function valorNaoPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if ( e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})