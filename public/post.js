//Função que envia os dados para o servidor
function enviarDados(){
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const endereço = document.getElementById('endereço').value;
    const plano = document.getElementById('plano').value;
    const informacoes = document.getElementById('informacoes').value;


//Para envio dos dados para o servidor ultilizando metodo fetch()
    fetch ('pessoas',{
        method: 'POST' , // Método HTTP ultilizado

        headers:{
            'Content-Type':'application/json' //tipo de conteudo enviado (JSON)
            
        },
        //Body é um objeto JS que foi convertido para o formato JSON usando JSON.stringify
        body: JSON.stringify({nome: nome, idade: idade, cpf: cpf, email: email, telefone: telefone, endereço: endereço, plano: plano, informacoes: informacoes})
    }) .then(response => response.json())
    window.location.reload();
}
