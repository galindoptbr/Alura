async function buscarEndereco(cep) {
    var mensagemErro = document.querySelector('#erro');
    mensagemErro.innerHTML = '';
    try {
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCEPConvertida = await consultaCep.json();
        if (consultaCEPConvertida.erro) {
            throw Error('CEP nao existente!');
        }
        var endereco = document.querySelector('#endereco');
        var bairro = document.querySelector('#bairro');
        var cidade = document.querySelector('#cidade');
        var estado = document.querySelector('#estado');

        endereco.value = consultaCEPConvertida.logradouro;
        cidade.value = consultaCEPConvertida.localidade;
        bairro.value = consultaCEPConvertida.bairro;
        estado.value = consultaCEPConvertida.uf;

        console.log(consultaCEPConvertida);
        return consultaCEPConvertida;
    } catch (erro) {
        mensagemErro.innerHTML = `<p>*CEP invalido. Tente novamente!</p>`;
        console.log(erro)
    }

}

var cep = document.querySelector('#cep');
cep.addEventListener('focusout', () => buscarEndereco(cep.value));