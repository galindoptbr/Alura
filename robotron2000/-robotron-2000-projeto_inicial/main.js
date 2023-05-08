const subtrair = document.querySelector('#subtrair');
const somar = document.querySelector('#somar');

const controle = document.querySelectorAll('.controle-ajuste');

controle.forEach( (elemento) => {
   elemento.addEventListener('click', (evento) => {
      manipulaDados(evento.target.textContent, evento.target.parentNode)
   })
})

function manipulaDados(operacao, controle) {
   const peca = controle.querySelector('.controle-contador');  

   if(operacao === '-') {
      peca.value = Number(peca.value) - 1
   } else {
      peca.value = Number(peca.value) + 1
   }
}
