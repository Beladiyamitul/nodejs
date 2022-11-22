const http = require("http");

const server = http.createServer((request , response) => {
    response.end("Hello from the others side college");
});

server.listen(5000, () => {
    console.log("listening ");
});