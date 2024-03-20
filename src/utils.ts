import { parseString } from 'xml2js';

var xmlstr = '<?xml version="1.0" encoding="UTF-8"?><SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:ns3="http://www.asais.fr/ns/Saturne/DC/ws/WS_DCSoap" xmlns:ns1="http://www.asais.fr/ns/Saturne/DC/ws" xmlns:ns4="http://www.asais.fr/ns/Saturne/DC/ws/WS_DCSoap12" xmlns:ns5="http://www.asais.fr/ns/Saturne/STG/ws/WS_STGSoap" xmlns:ns2="http://www.asais.fr/ns/Saturne/STG/ws" xmlns:ns6="http://www.asais.fr/ns/Saturne/STG/ws/WS_STGSoap12"><SOAP-ENV:Body><ns2:Report><ns2:IdPet>0</ns2:IdPet><ns2:IdRTU>CIRR208232004207</ns2:IdRTU><ns2:ReqStatus>0</ns2:ReqStatus><ns2:Format>0</ns2:Format><ns2:Payload>&lt;Report IdRpt="S63" IdPet="0" Version="1.6"&gt;&#xD;&#xA;	&lt;Rtu Id="CIRR208232004207"&gt;&#xD;&#xA;		&lt;LVSLine Id="CIRN211231500500" Pos="99"&gt;&#xD;&#xA;			&lt;S63 Fh="20240215152649000W" Et="1" C="39"/&gt;&#xD;&#xA;			&lt;S63 Fh="20240215152649000W" Et="1" C="39"/&gt;&#xD;&#xA;			&lt;S63 Fh="20240215152649000W" Et="1" C="39"/&gt;&#xD;&#xA;			&lt;S63 Fh="20240215152649000W" Et="1" C="39"/&gt;&#xD;&#xA;			&lt;S63 Fh="20240215152649000W" Et="1" C="39"/&gt;&#xD;&#xA;			&lt;S63 Fh="20240215152709000W" Et="1" C="26"/&gt;&#xD;&#xA;			&lt;S63 Fh="20240215222039000W" Et="1" C="27"/&gt;&#xD;&#xA;			&lt;S63 Fh="20240216094545000W" Et="1" C="26"/&gt;&#xD;&#xA;			&lt;S63 Fh="20240216143217000W" Et="1" C="1"/&gt;&#xD;&#xA;			&lt;S63 Fh="20240216143217000W" Et="1" C="98"&gt;&#xD;&#xA;				&lt;D1&gt;19700101010230000W&lt;/D1&gt;&#xD;&#xA;			&lt;/S63&gt;&#xD;&#xA;			&lt;S63 Fh="20240216225837000W" Et="1" C="27"/&gt;&#xD;&#xA;			&lt;S63 Fh="20240217144553000W" Et="1" C="26"/&gt;&#xD;&#xA;			&lt;S63 Fh="20240217232029000W" Et="1" C="27"/&gt;&#xD;&#xA;			&lt;S63 Fh="20240218145057000W" Et="1" C="26"/&gt;&#xD;&#xA;			&lt;S63 Fh="20240218235047000W" Et="1" C="27"/&gt;&#xD;&#xA;			&lt;S63 Fh="20240219100414000W" Et="1" C="26"/&gt;&#xD;&#xA;			&lt;S63 Fh="20240220033907000W" Et="1" C="27"/&gt;&#xD;&#xA;			&lt;S63 Fh="20240220093945000W" Et="1" C="26"/&gt;&#xD;&#xA;		&lt;/LVSLine&gt;&#xD;&#xA;	&lt;/Rtu&gt;&#xD;&#xA;&lt;/Report&gt;&#xD;&#xA;</ns2:Payload></ns2:Report></SOAP-ENV:Body></SOAP-ENV:Envelope>'

parseString(xmlstr, (err, result) => {
    if(err) {
        console.error('Error al parsear XML:', err);
    } else { 
        var res = result['SOAP-ENV:Envelope']['SOAP-ENV:Body'][0]['ns2:Report'][0]['ns2:Payload'][0];

        console.log(res);
        parseString(res, (err, result) => {
            var s65 = result.Report.Rtu[0].S65;
            for(let i=0; i<Object.keys(s65).length; i++) {
                //console.log(s65[i].$.Fh);
            }
        })
    }
})

function recorrerObjetos(objeto: any) {
    for (const clave in objeto) {
        if (objeto.hasOwnProperty(clave)) {
            const valor = objeto[clave];
            if (typeof valor === 'object') {
                // Si el valor es un objeto, lo recorremos de forma recursiva
                recorrerObjetos(valor);
            } else {
                // Si el valor no es un objeto, lo mostramos
                console.log(`Clave: ${clave}, Valor: ${valor}`);
            }
        }
    }
}