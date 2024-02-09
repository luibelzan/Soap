const { parseXML } = require('../src/utils.js');
const modulo = require('xml2js');
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
            //console.log(data);
            /*
            data = modulo.parseString(data, (err, result) => {
                if (err) {
                    console.error('Error al parsear XML:', err);
                } else {
                    console.log('XML parseado:', result);
                    //const body = result['S:Envelope']['S:Body'][0]['Report'][0];
                    //console.log(body);
                    //console.log(body['IdPet']);
                    parseXML(result);
                }
            });
            */
           parseXML(data);
            
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('XML received and processed successfully!');
        });
        
    
    } else{
        console.log('No ha funcionado');
    }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
