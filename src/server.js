const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Inciando o projeto de backend...");
  })
  .listen(port, hostname, () => {
    console.log(`Servidor está sendo executado em http://${hostname}:${port}/`);
  });
