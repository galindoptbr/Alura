
function tocaSom (idElementAudio) {
    document.querySelector(idElementAudio).play();
    
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
