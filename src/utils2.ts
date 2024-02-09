const parser = require('xml2js');

const xmlString = `<?xml version='1.0' encoding='UTF-8'?><S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/"><S:Body><Report xmlns="http://www.asais.fr/ns/Saturne/STG/ws">\x0a    <IdPet>0</IdPet>\x0a    <IdDC>SAG0189002244</IdDC>\x0a    <ReqStatus>0</ReqStatus>\x0a    <Format>0</Format>\x0a    <Payload>&lt;Report IdRpt="S31" IdPet="0" Version="3.1.c"&gt;\x0a    &lt;Cnc Id="SAG0189002244"&gt;\x0a        &lt;Cnt Id="LGZ0020495057"&gt;\x0a            &lt;S31 Fh="20240208095339812W" ClientId="4" Status="1" KeyRequest="00000101"/&gt;\x0a        &lt;/Cnt&gt;\x0a    &lt;/Cnc&gt;\x0a&lt;/Report&gt;</Payload>\x0a</Report></S:Body></S:Envelope>`;

    // Parsear el XML
    parser.parseString(xmlString, (err, result) => {
        if (err) {
            console.error('Error al parsear XML:', err);
        } else {
            // Acceder al valor de IdPet
            const res = result['S:Envelope']['S:Body'][0]['Report'][0];

            //console.log(res['Payload'][0]);
            parser.parseString(res['Payload'][0], (err, result) => {
                if(err) {
                    console.error('Error al parsear XML:', err);
                } else {
                    const idRpt = result.Report.$.IdRpt;
                    const idPet = result.Report.$.IdPet;
                    const version = result.Report.$.Version;
                    //const cncId = result.Report.Cnc[0].$.Id;
                    //const fh = result.Report.Cnc[0].Cnt[0].S31[0].$.Fh;
                    //const clientId = result.Report.Cnc[0].Cnt[0].S31[0].$.ClientId;

                    // Imprimir los valores obtenidos
                    console.log(result);
                    console.log(result.Report.Cnc[0].$.Id);
                    console.log(result.Report.Cnc[0].Cnt[0].$.Id);
                    console.log(result.Report.Cnc[0].Cnt[0].S31[0].$.Fh);
                    console.log(result.Report.Cnc[0].Cnt[0].S31[0].$.ClientId);
                    console.log(result.Report.Cnc[0].Cnt[0].S31[0].$.Et);
                    console.log(result.Report.Cnc[0].Cnt[0].S31[0].$.C);





                }
            })
        }
    });