const http =require('http');

const host = '192.168.1.5';
const port = 8080;

//Escucha de solicitudes
const requestListener = function(req, res) {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    /*res.end(`<?xml version="1.0" encoding="UTF-8"?>
    <response>
        <result>true</result>
    </response>`);
    */
    res.end(`<html><body><h1>This is HTML</h1></body></html>`);
    console.log(req);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
