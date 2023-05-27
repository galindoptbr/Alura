var consultaCep = fetch('https://viacep.com.br/ws/03244080/json/')
.then(resposta => resposta.json())
.then(r => {
    if (r.erro) {
        throw Error('Esse CEP nao existe!')
    } else 
         console.log(r)
})
.catch(erro => console.log(erro));


console.log(consultaCep);