import Database from 'better-sqlite3';
const db = new Database('database.db');
db.pragma('journal_mode = WAL');

// Cria a tabela (se não existir)
db.exec(`
  CREATE TABLE IF NOT EXISTS criptomoedas (
    nome TEXT,
    contrato TEXT,
    valor TEXT,
    corretora TEXT
  )
`);

// Insere dados na tabela
const insert = db.prepare('INSERT INTO criptomoedas (nome, contrato, valor, corretora) VALUES (?,?,?,?)');
insert.run('bitcoin', 'sadfa6d54sa6f', '265000', 'BINANCE');
insert.run('ethereum', '5sdf4sda6f6d5', '26000', 'GATE.IO');

// Consulta os dados
const select = db.prepare('SELECT * FROM criptomoedas');
const usuarios = select.all();

// percorrendo uma lista de usuários
console.log('Criptomoedas cadastradas:');
usuarios.forEach((cripto) => {
  console.log(`Nome: ${cripto.nome}, Contrato: ${cripto.contrato}, Valor: ${cripto.valor}, Corretora: ${cripto.corretora}`);
});

// fecha o banco de dados
db.close();
