const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {

    // Página inicial
    if (req.url === '/' || req.url === '/') {
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            if (err) {
                res.writeHead(500, {
                    'Content-Type': 'text/plain'
                });
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, {
                    'Content-Type': 'text/html'
                });
                res.end(data);
            }
        });

        // Arquivo CSS
    } else if (req.url === '/style') {
        fs.readFile(path.join(__dirname, 'style.css'), (err, data) => {
            if (err) {
                res.writeHead(500, {
                    'Content-Type': 'text/plain'
                });
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, {
                    'Content-Type': 'text/css'
                });
                res.end(data);
            }
        });
    } else if (req.url === '/camisapolo') {
        fs.readFile(path.join(__dirname, 'produtos/camisapolo.html'), (err, data) => {
            if (err) {
                res.writeHead(500, {
                    'Content-Type': 'text/plain'
                });
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, {
                    'Content-Type': 'text/html'
                });
                res.end(data);
            }
        });

    } else if (req.url === '/short') {
        fs.readFile(path.join(__dirname, 'produtos/short.html'), (err, data) => {
            if (err) {
                res.writeHead(500, {
                    'Content-Type': 'text/plain'
                });
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, {
                    'Content-Type': 'text/html'
                });
                res.end(data);
            }
        });
    } else if (req.url === '/script') {
        fs.readFile(path.join(__dirname, 'script.js'), (err, data) => {
            if (err) {
                res.writeHead(500, {
                    'Content-Type': 'text/plain'
                });
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, {
                    'Content-Type': 'text/javascript'
                });
                res.end(data);
            }
        });

        // Rota desconhecida
    } else if (req.url.startsWith('/img/')) {
        const imgPath = path.join(__dirname, req.url);
        fs.readFile(imgPath, (err, data) => {
            if (err) {
                res.writeHead(500, {
                    'Content-Type': 'text/plain'
                });
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, {
                    'Content-Type': 'image/png'
                });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/plain'
        });
        res.end('Page Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});