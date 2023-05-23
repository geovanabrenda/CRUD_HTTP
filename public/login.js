function fazerLogin(){

    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;

    //Busca cujo o nome e idade coicidem com os valores digitados 
    // p = parametro do find (procurar). Função CallBack
    fetch('pessoas') .then(response => response.json()) .then(data => {
        const pessoa = data.find(p => p.nome === nome && p.cpf == cpf);

        if(pessoa){
            window.location.href = "hom2.html"
        } else{
            alert('Dados não entrados no banco de dados, tente novamente :/')
        }
    })
}
