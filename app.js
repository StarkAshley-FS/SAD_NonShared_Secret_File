require("dotenv").config();

const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");

    const key = process.env.API_KEY;
    if (!key) {
        res.end("Missing secret. Please add a .env file.");
        return;
    }

    res.end(`Your protected secret is: ${key}`);
});

server.listen(port, hostname, ()=>{});