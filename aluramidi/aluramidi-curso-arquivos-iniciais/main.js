
function tocaSom (selectorAudio) {

    const element = document.querySelector(selectorAudio).play();

    if (element && element.localName === 'audio') {
        element.play();
    } 
    else {
        console.log('Elemento nao encontrado ou seletor nao encontrado')
    }
    
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrument = tecla.classList[1];
    // Template String
    const idAudio = `#som_${instrument}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

}
