import { parseString } from 'xml2js';

var xmlstr = '<?xml version="1.0" encoding="UTF-8"?><SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:ns3="http://www.asais.fr/ns/Saturne/DC/ws/WS_DCSoap" xmlns:ns1="http://www.asais.fr/ns/Saturne/DC/ws" xmlns:ns4="http://www.asais.fr/ns/Saturne/DC/ws/WS_DCSoap12" xmlns:ns5="http://www.asais.fr/ns/Saturne/STG/ws/WS_STGSoap" xmlns:ns2="http://www.asais.fr/ns/Saturne/STG/ws" xmlns:ns6="http://www.asais.fr/ns/Saturne/STG/ws/WS_STGSoap12"><SOAP-ENV:Body><ns2:Report><ns2:IdPet>0</ns2:IdPet><ns2:IdRTU>CIRR208232004207</ns2:IdRTU><ns2:ReqStatus>0</ns2:ReqStatus><ns2:Format>0</ns2:Format><ns2:Payload>&lt;Report IdRpt="S65" IdPet="0" Version="1.6"&gt;&#xD;&#xA;	&lt;Rtu Id="CIRR208232004207"&gt;&#xD;&#xA;		&lt;S65 Fh="20240216132617391W" Et="4" C="16"&gt;&#xD;&#xA;		&lt;/S65&gt;&#xD;&#xA;	&lt;/Rtu&gt;&#xD;&#xA;&lt;/Report&gt;&#xD;&#xA;</ns2:Payload></ns2:Report></SOAP-ENV:Body></SOAP-ENV:Envelope>'

parseString(xmlstr, (err, result) => {
    if(err) {
        console.error('Error al parsear XML:', err);
    } else {
        var res = result['SOAP-ENV:Envelope']['SOAP-ENV:Body'][0]['ns2:Report'][0];
        console.log(res);
    }
})