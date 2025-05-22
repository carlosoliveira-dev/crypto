const formulario = document.getElementById('formulario')

formulario.addEventListener('submit', async (event) => {
    event.preventDefault();

    const form = event.target;
    const select = document.getElementById('corretora');

    let corretora_selecionada;
    console.log(corretora_selecionada);
    switch (select.value) {
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

});


const button_lista = document.getElementById('button_lista');
const div_lista = document.getElementById('div_lista');

button_lista.addEventListener('click', async () => {
  const resposta = await fetch('http://localhost:3000/listar');
  const dados = await resposta.json();

  dados.forEach(moeda => {
  const item = document.createElement('p');
  item.textContent = `Nome: ${moeda.nome}, contrato: ${moeda.contrato}, corretora: ${moeda.corretora}`;
  div_lista.appendChild(item);
  });

});
