//GET
function buscarDados() {
    const cpf = document.getElementById('cpfAtualizar').value;

    fetch('pessoas', {
        method: 'GET'
})
.then(response => response.json())
.then(data => {
    const pessoaEncontrada = data.find(pessoa => pessoa.cpf === cpf)
    if(pessoaEncontrada) {
        document.getElementById('nomeAtualizar').value = pessoaEncontrada.nome;
        document.getElementById('idadeAtualizar').value = pessoaEncontrada.idade;
        document.getElementById('cpfAtualizar').value = pessoaEncontrada.cpf;
        document.getElementById('emailAtualizar').value = pessoaEncontrada.email;
        document.getElementById('id').value = pessoaEncontrada.id;
    }else{
        alert('Pessoa não encontrada')
    }
})

}
//PUT
function atualizarDados() {
    const id = document.getElementById('id').value; 
    const nome = document.getElementById('nomeAtualizar').value; 
    const idade = document.getElementById('idadeAtualizar').value; 
    const cpf = document.getElementById('cpfAtualizar').value; 
    const email = document.getElementById('emailAtualizar').value; 

    fetch(`pessoas/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({nome: nome, idade: idade, cpf: cpf, email: email})
    })
    .then(response => response.json())
}
