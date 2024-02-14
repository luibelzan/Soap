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
                    if(idRpt == 'S13') {
                        var cncId = result.Report.Cnc[0].$.Id;
                        var cntId = result.Report.Cnc[0].Cnt[0].$.Id;
                        var fh = result.Report.Cnc[0].Cnt[0].S13[0].$.Fh;
                        var et = result.Report.Cnc[0].Cnt[0].S13[0].$.Et;
                        var c = result.Report.Cnc[0].Cnt[0].S13[0].$.C;
                        var d1 = result.Report.Cnc[0].Cnt[0].S13[0].$.D1;
                        var d2 = result.Report.Cnc[0].Cnt[0].S13[0].$.D2;
                        var errCat = result.Report.Cnc[0].Cnt[0].S13[0].$.ErrCat;
                        var errCode = result.Report.Cnc[0].Cnt[0].S13[0].$.ErrCode;

                        console.log(cncId);
                        console.log(cntId);
                        console.log(fh);
                        console.log(et);
                        console.log(c);
                        console.log(d1);
                        console.log(d2);
                        console.log(errCat);
                        console.log(errCode);
                    } else if(idRpt == 'S15') {
                        var cncId = result.Report.Cnc[0].$.Id;
                        var fh = result.Report.Cnc[0].S15[0].$.Fh;
                        var et = result.Report.Cnc[0].S15[0].$.Et;
                        var c = result.Report.Cnc[0].S15[0].$.C;
                        var d1 = result.Report.Cnc[0].S15[0].$.D1;
                        var d2 = result.Report.Cnc[0].S15[0].$.D2;;

                        console.log(cncId);
                        console.log(fh);
                        console.log(et);
                        console.log(c);
                        console.log(d1);
                        console.log(d2);
                    } else if(idRpt == 'S31') {
                        var cncId = result.Report.Cnc[0].$.Id;
                        var cntId = result.Report.Cnc[0].Cnt[0].$.Id;
                        var fh = result.Report.Cnc[0].Cnt[0].S31[0].$.Fh;
                        var clientId = result.Report.Cnc[0].Cnt[0].S31[0].$.ClientId;
                        var status = result.Report.Cnc[0].Cnt[0].S31[0].$.Status;
                        var keyRequest = result.Report.Cnc[0].Cnt[0].S31[0].$.KeyRequest;

                        console.log(cncId);
                        console.log(cntId);
                        console.log(fh);
                        console.log(clientId);
                        console.log(status);
                        console.log(keyRequest);
                    } else if(idRpt == 'S63') {
                        var rtu = result.Report.Rtu[0].$.Id;
                        var lvsid = result.Report.Rtu[0].LVSLine[0].$.Id;
                        var lvspos = result.Report.Rtu[0].LVSLine[0].$.Pos;
                        var errCat = result.Report.Rtu[0].LVSLine[0].$.ErrCat;
                        var errCode = result.Report.Rtu[0].LVSLine[0].$.ErrCode;
                        var fh = result.Report.Rtu[0].LVSLine[0].S63[0].$.Fh;
                        var et = result.Report.Rtu[0].LVSLine[0].S63[0].$.Et;
                        var c = result.Report.Rtu[0].LVSLine[0].S63[0].$.C;
                        var d1 = result.Report.Rtu[0].LVSLine[0].S63[0].$.D1;
                        var d2 = result.Report.Rtu[0].LVSLine[0].S63[0].$.D2;

                    } else if(idRpt == 'S65') {
                        var rtu = result.Report.Rtu[0].$.Id;
                        var errCat = result.Report.Rtu[0].$.ErrCat;
                        var errCode = result.Report.Rtu[0].$.ErrCode;
                        var fh = result.Report.Rtu[0].S65[0].$.Fh;
                        var et = result.Report.Rtu[0].S65[0].$.Et;
                        var c = result.Report.Rtu[0].S65[0].$.C;
                        var d1 = result.Report.Rtu[0].S65[0].$.D1;
                        var d2 = result.Report.Rtu[0].S65[0].$.D2;
                    }
                }
            });
        }
    });
}
exports.parseXML = parseXML;
