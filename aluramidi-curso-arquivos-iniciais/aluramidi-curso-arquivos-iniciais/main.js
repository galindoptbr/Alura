
function tocaPom() {
    document.querySelector('#som_tecla_pom').play();
    
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < listaDeTeclas.length) {

    listaDeTeclas[contador].onclick = tocaPom;

    contador += 1;
}





