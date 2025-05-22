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
})

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
