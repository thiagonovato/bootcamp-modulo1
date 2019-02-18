// Http é um pacote que já vem dentro do node.
// A linah abaixo faz a requisição desta lib
const http = require("http");

// Criando um novo servidor.
// Todo servidor possui req (requisição) e res (resposta).
// Na linha abaixo, estamos criando um servidor, que vai escrever o req no console
// e por fim o servidor fica rodando no console. Ao abrir localhost:3000, deve aparecer
// a mensagem do res.end.
http
  .createServer((req, res) => {
    console.log(req);
    return res.end("Hello World");
  })
  .listen(3000);
