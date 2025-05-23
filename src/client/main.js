const formulario = document.getElementById('formulario')

formulario.addEventListener('submit', async (event) => {
    event.preventDefault();

    const form = event.target;
    const select = document.getElementById('corretora');

    let corretora_selecionada;
    switch (select.value) {
      case '':
        alert('Selecione uma corretora');
        return 0;
      case '1':
        corretora_selecionada = 'Binance';
        break;
      case '2':
        corretora_selecionada = 'Gate.io';
        break;
      case '3':
        corretora_selecionada = 'MetaMask';
        break;
    }

    const dados = {
    nome: form.nome.value,
    contrato: form.contrato.value,
    corretora: corretora_selecionada};

    const resposta = await fetch('http://localhost:3000/cadastrar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dados)
    });

    const resultado = await resposta.json();
    console.log('Servidor respondeu:', resultado);
    location.reload();

});


const button_lista = document.getElementById('button_lista');
let button_lista_clicado = false;
const div_lista = document.getElementById('div_lista');

button_lista.addEventListener('click', async () => {
  if (!button_lista_clicado) {
    const resposta = await fetch('http://localhost:3000/listar');
    const dados = await resposta.json();

    dados.forEach(moeda => {
    const item = document.createElement('p');
    item.textContent = `Nome: ${moeda.nome}, contrato: ${moeda.contrato}, corretora: ${moeda.corretora}`;
    div_lista.appendChild(item);
    });
    button_lista_clicado = true;
  }

});


const formulario_excluir = document.getElementById('formulario_excluir');

formulario_excluir.addEventListener('submit', async (event) => {
    event.preventDefault();

    const form = event.target;

    const contrato = form.contrato_excluir.value;

    const resposta = await fetch('http://localhost:3000/moeda/' + contrato, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    });

    location.reload();
});

const button_limpar_lista = document.getElementById('button_limpar_lista');

button_limpar_lista.addEventListener('click', async (event) => {
  document.getElementById('div_lista').innerHTML = '';
  button_lista_clicado = false;
});