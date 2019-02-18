// Adicionando a primeira lib: express
// yarn add express
const express = require("express");

// Criar um servidor do express
const app = express();

// Rota /
app.get("/", (req, res) => {
  return res.send(`Bem-vindo, ${req.query.name}`);
});

// Rota /login
app.get("/login", (req, res) => {
  return res.send("Login");
});

// Pegando parâmetros via url
app.get("/nome/:name", (req, res) => {
  return res.send(`Bem-vindo, ${req.params.name}`);
});

// Retornando resposta no formato json
app.get("/nome/json/:name", (req, res) => {
  return res.json({
    message: `Bem-vindo, ${
      req.params.name
    }. Esta é uma resposta no formato json.`
  });
});

// Servidor está escutando na porta 3000
app.listen(3000);
