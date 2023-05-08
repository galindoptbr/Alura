var pecas = {

   "bracos": {
       "forca": 29,
       "poder": 35,
       "energia": -21,
       "velocidade": -5
   },

   "blindagem": {
       "forca": 41,
       "poder": 20,
       "energia": 0,
       "velocidade": -20
   },
   "nucleos":{
       "forca": 0,
       "poder": 7,
       "energia": 48,
       "velocidade": -24
   },
   "pernas":{
       "forca": 27,
       "poder": 21,
       "energia": -32,
       "velocidade": 42
   },
   "foguetes":{
       "forca": 0,
       "poder": 28,
       "energia": 0,
       "velocidade": -2
   }
}
const pontos = document.querySelectorAll('[data-contador]');
const botoes = document.querySelectorAll('[data-controle]');
const stats = document.querySelectorAll('[data-stats]');

botoes.forEach( (element) => {
   element.addEventListener('click', (event) => {
       let controle = event.target.parentNode.querySelector('.controle-contador');
       let operacao = event.target.dataset.controle;
       manipulaDados(operacao, controle);
       

       atualiza();
   })

});


function manipulaDados(operacao, controle){
   if(operacao == '-' && controle.value > 0){
       controle.value = parseInt(controle.value) - 1;
   }else if(operacao == '+' && controle.value < 100){
       controle.value = parseInt(controle.value) + 1;
   }
}



function atualiza(){
   //utilizei as variáveis para transformar em int as estatisticas
   var forca = 0;
   var poder = 0;
   var energia = 0;
   var velocidade = 0;

   
   


   pontos.forEach((elemento) => {
       //pegar o valor do contador
       var contador = parseInt(elemento.value);
       //pega o nome do componente do contador
       var nomeComponente = elemento.dataset.contador;
       forca += pecas[nomeComponente].forca * contador;
       poder += pecas[nomeComponente].poder * contador;
       energia += pecas[nomeComponente].energia * contador;
       velocidade += pecas[nomeComponente].velocidade * contador;


   })
   
   stats[0].textContent = forca;
   stats[1].textContent = poder;
   stats[2].textContent = energia;
   stats[3].textContent = velocidade;
   
   
}






