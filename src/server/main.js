import express from "express";
import ViteExpress from "vite-express";
import Database from 'better-sqlite3';
const db = new Database('database.db');
db.pragma('journal_mode = WAL');

const app = express();

app.use(express.json());

app.get("/listar", (req, res) => {
  const select = db.prepare('SELECT * FROM criptomoedas');
  const moedas = select.all();
  res.send(moedas);
});

app.post('/cadastrar', (req, res) => {
  console.log(req.body);

  const insert = db.prepare('INSERT INTO criptomoedas (nome, contrato, corretora) VALUES (?,?,?)');
  insert.run(req.body.nome, req.body.contrato, req.body.corretora);
  
  res.send(req.body);
});

app.delete('/moeda/:contrato', (req, res) => {
  const moeda_contrato = req.params.contrato;
  const select = db.prepare('SELECT * FROM criptomoedas');
  const moedas = select.all();

  let moeda = moedas.find(item => item.contrato === moeda_contrato);

  if (moeda) {
    const deletar = db.prepare('DELETE FROM criptomoedas WHERE contrato = ?');
    deletar.run(moeda.contrato);
    console.log('moeda excluida:', moeda);
    res.status(204).send(); // Retorna status 204 (No Content) para indicar sucesso
  } else {
    res.status(404).send({ message: 'Moeda não encontrada' });
  }

});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
