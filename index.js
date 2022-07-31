const http = require("http");
const { readFileSync } = require("fs");

const indexPage = readFileSync("./index.html");
const aboutPage = readFileSync("./about.html");
const contactPage = readFileSync("./contact-me.html");
const errorPage = readFileSync("./404.html");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(indexPage);
    res.end();
  } else if (req.url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(aboutPage);
    res.end();
  } else if (req.url === "/contact-me") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(contactPage);
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write(errorPage);
    res.end();
  }
});

server.listen(8080);
