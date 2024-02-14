import { Request, Response } from 'express';
import { parseString } from 'xml2js';

export const getData = async (req: Request, result: Response) => {
    //var xmlToString = new XMLSerializer().serializeToString(req.body);
    //console.log(xmlToString);
          // Acceder al valor de IdPet
          const res = req.body['S:Envelope']['S:Body'][0]['Report'][0];
        console.log(res);
          //console.log(res['Payload'][0]);
          parseString(res['Payload'][0], (err, result) => {
              if(err) {
                  console.error('Error al parsear XML:', err);
              } else {
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
                      var fin = [idRpt, idPet, version, cncId, cntId, fh, et, c, d1, d2, errCat, errCode];
                      console.log(cncId);
                      console.log(fh);
                      console.log(et);
                      console.log(c);

                  } else if(idRpt == 'S15') {
                      var cncId = result.Report.Cnc[0].$.Id;
                      var fh = result.Report.Cnc[0].S15[0].$.Fh;
                      var et = result.Report.Cnc[0].S15[0].$.Et;
                      var c = result.Report.Cnc[0].S15[0].$.C;
                      var d1 = result.Report.Cnc[0].S15[0].$.D1;
                      var d2 = result.Report.Cnc[0].S15[0].$.D2;
                      var fin = [idRpt, idPet, version, cncId, fh, et, c, d1, d2, errCat, errCode];
  
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
          })
  result.send('<h1>XML received and processed successfully!6</h1>')
};