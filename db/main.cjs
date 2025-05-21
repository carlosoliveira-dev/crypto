const sqlite3 = require('sqlite3').verbose();
const dbPath = '/home/code/Documents/crypto/meubanco.db';
const db = new sqlite3.Database(dbPath);

db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS criptomoedas (nome TEXT, contrato TEXT, valor TEXT, corretora TEXT)");
  // exemplo de inserção no banco de dados
  // db.run("INSERT INTO criptomoedas (nome, contrato, valor, corretora) VALUES (?,?,?,?)", ["bitcoin","fsa6f4asfasfda6s4af","1.99","Binance"]);
});
