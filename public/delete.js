//Função que delte dados do servidor
function deletarDados(){
    const id = document.getElementById('id').value;

    fetch (`pessoas/${id}` ,{
    method:'DELETE'
    }) .then(response => response.json())
}

function atualizarDados(){
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const endereço = document.getElementById('endereço').value;
    const plano = document.getElementById('plano').value;
    const informacoes = document.getElementById('informacoes').value;

}

