"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseXML = void 0;
var parser = require('xml2js');
//const xmlString = `<?xml version='1.0' encoding='UTF-8'?><S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/"><S:Body><Report xmlns="http://www.asais.fr/ns/Saturne/STG/ws">\x0a    <IdPet>0</IdPet>\x0a    <IdDC>SAG0189002244</IdDC>\x0a    <ReqStatus>0</ReqStatus>\x0a    <Format>0</Format>\x0a    <Payload>&lt;Report IdRpt="S31" IdPet="0" Version="3.1.c"&gt;\x0a    &lt;Cnc Id="SAG0189002244"&gt;\x0a        &lt;Cnt Id="LGZ0020495057"&gt;\x0a            &lt;S31 Fh="20240208095339812W" ClientId="4" Status="1" KeyRequest="00000101"/&gt;\x0a        &lt;/Cnt&gt;\x0a    &lt;/Cnc&gt;\x0a&lt;/Report&gt;</Payload>\x0a</Report></S:Body></S:Envelope>`;
function parseXML(xmlString) {
    // Parsear el XML
    parser.parseString(xmlString, function (err, result) {
        if (err) {
            console.error('Error al parsear XML:', err);
        }
        else {
            // Acceder al valor de IdPet
            var res = result['S:Envelope']['S:Body'][0]['Report'][0];
            //console.log(res['Payload'][0]);
            parser.parseString(res['Payload'][0], function (err, result) {
                if (err) {
                    console.error('Error al parsear XML:', err);
                }
                else {
                    var idRpt = result.Report.$.IdRpt;
                    var idPet = result.Report.$.IdPet;
                    var version = result.Report.$.Version;
                    //var cncId = result.Report.Cnc[0].$.Id;
                    //var fh = result.Report.Cnc[0].Cnt[0].S31[0].$.Fh;
                    //var clientId = result.Report.Cnc[0].Cnt[0].S31[0].$.ClientId;
                    // Imprimir los valores obtenidos
                    console.log('IdRpt:', idRpt);
                    console.log('IdPet:', idPet);
                    console.log('Version:', version);
                    //console.log('Cnc Id:', cncId);
                    //console.log('Fh:', fh);
                    //console.log('ClientId:', clientId);
                }
            });
        }
    });
}
exports.parseXML = parseXML;
