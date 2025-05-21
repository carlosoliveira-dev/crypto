const formulario = document.getElementById('formulario')

formulario.addEventListener('submit', async (event) => {
    event.preventDefault();

    const form = event.target;
    const select = document.getElementById('corretora');

      const dados = {
      nome: form.nome.value,
      contrato: form.contrato.value,
      corretora: select.value
    };

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
