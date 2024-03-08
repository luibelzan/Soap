import { getData } from "./controllers/EventsController";
import express from 'express';
import { AppDataSource } from "./data-source"


const bodyParser = require('body-parser');
const bodyParserXml = require('body-parser-xml');

const app = express();
const host = '192.168.1.5:8080';

//Conexion con la base de datos
AppDataSource.initialize().then(async () => {

// Configurar body-parser para manejar solicitudes JSON
app.use(bodyParser.json());

// Configurar body-parser-xml para manejar solicitudes XML
bodyParserXml(bodyParser);
app.use(bodyParser.xml());

// Middleware personalizado para capturar tramas XML de un host específico
app.use((req, res, next) => {
  // Comprueba si la solicitud es un POST y si proviene del host específico
  if (req.method == 'POST' && req.headers.host == host && req.path==='WS_STGSoapService') {
    // Verifica si el cuerpo de la solicitud es XML
    if (req.headers['content-type'].includes('xml')) {
      //console.log('Trama XML recibida desde el host específico:', req.body);
      next();
    } else {
      console.log('Solicitud POST recibida desde el host específico, pero no es XML.');
    }
  } else {
    next();
  }
});

// Ruta de prueba para recibir solicitudes
app.post('/WS_STGSoapService', getData);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});

}).catch(error => console.log(error))