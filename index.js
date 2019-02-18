// Adicionando a primeira lib: express
// yarn add express
const express = require("express");

// Criar um servidor do express
const app = express();

// Criação de um Interceptador
// O parãmetro NEXT, tanto na primeira linha quanto na última
// não deixa a aplicação travar, ou seja, o middleware roda e continua executando
const logMiddleware = (req, res, next) => {
  console.log(
    `HOST: ${req.headers.host} | URL: ${req.url} | METHOD: ${req.method}`
  );
  req.appName = "GoNode";
  // Deve-se colocar esta linha para "ativar" o next
  return next();
};

// Rota /
// Há duas formas de fazer a aplicação usar o middleware, sendo uam delas passando
// app.get("/", logMiddleware, (req, res) => {
// a variável como parâmetro, ou usando a linha abaixo:
app.use(logMiddleware);

app.get("/", (req, res) => {
  return res.send(`Bem-vindo ao ${req.appName}, ${req.query.name}`);
});

// Rota /login
app.get("/login", (req, res) => {
  return res.send("Login");
});

// Pegando parâmetros via url
app.get("/nome/:name", (req, res) => {
  return res.send(`Welcome, ${req.params.name}`);
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
