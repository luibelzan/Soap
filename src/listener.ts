const http =require('http');

const host = '192.168.1.5';
const port = 8080;

//Escucha de solicitudes
const requestListener = function(req, res) {
    if(req.method == 'POST' && JSON.stringify(req.headers).substring(17, 25) == 'text/xml'){
        let data = '';

        req.on('data', chunk => {
            data += chunk;
        });

        req.on('end', () => {
            console.log('XML Data:', data);
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('XML received and processed successfully!');
        });
        console.log(data);
    } else{
        console.log('No ha funcionado');
       /*
        console.log(req.method);
        console.log(JSON.stringify(req.headers));
        console.log(JSON.stringify(req.headers).substring(17, 25));
        */

    }
    
    //res.setHeader("Content-Type", "text/html");
    //res.writeHead(200);
    //res.end(`<html><body><h1>This is HTML</h1></body></html>`);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
