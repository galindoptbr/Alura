// uma constante "form" que representa o formulário com o ID
const form = document.getElementById("novoItem") 
//  uma constante "lista" que representa a lista de itens com o ID
const lista = document.getElementById("lista")

const itens = JSON.parse(localStorage.getItem('itens')) || []

itens.forEach(element => {
    criaElemento(element)
});

// ouvinte de evento "submit" ao formulário
form.addEventListener("submit", (evento) => {
    // método "preventDefault()" no evento passado como argumento para impedir que a página seja atualizada quando o formulário é enviado.
    evento.preventDefault()

    const nome = evento.target.elements['nome'];
    const quantidade = evento.target.elements['quantidade'];

    const existe = itens.find(element => element.nome === nome.value)

    const itemAtual = {
        'nome': nome.value,
        'quantidade': quantidade.value
    }

    if (existe) {
        itemAtual.id = existe.id

        atualizaElemento(itemAtual)
    } else {
        itemAtual.id = itens.length

        criaElemento(itemAtual)

        itens.push(itemAtual)
    }
    
    // é chamada, passando os valores inseridos nos campos de nome e quantidade do formulário como argumentos.

    localStorage.setItem('itens', JSON.stringify(itens))

    nome.value = '';
    quantidade.value = '';


})
    
    // cria um novo elemento "li" para representar o novo item na lista, adiciona a classe "item" ao elemento e adiciona um elemento "strong" para mostrar a quantidade do item.
function criaElemento(item) {
    const novoItem = document.createElement('li')
    novoItem.classList.add("item")

    const numeroItem = document.createElement('strong')
    // // O valor de "quantidade" é adicionado ao elemento "strong" usando o método "innerHTML".
    numeroItem.innerHTML = item.quantidade
    numeroItem.dataset.id = item.id

    // O valor de "nome" é adicionado ao elemento "li" usando o operador "+=" para concatenar o valor ao conteúdo HTML existente.
    novoItem.appendChild(numeroItem)
    novoItem.innerHTML += item.nome

    // o novo item é adicionado à lista usando o método "appendChild()"
    lista.appendChild(novoItem)

}

function atualizaElemento(item) {
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade
}