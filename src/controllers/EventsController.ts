import { Request, Response } from 'express';
import { parseString } from 'xml2js';
import { S13 } from '../entities/S13';
import { S15 } from '../entities/S15';
import { S31 } from '../entities/S31';
import { S63 } from '../entities/S63';
import { S65 } from '../entities/S65';
import { AppDataSource } from "../data-source"

export const getData = async (req: Request, result: Response) => {

    // Acceder al valor de IdPet
    if(req.body && req.body?.['S:Envelope']?.['S:Body']?.[0]?.['Report']?.[0]){
        const res = req.body['S:Envelope']['S:Body'][0]['Report'][0];
        parseString(res['Payload'][0], (err, result) => {
            if(err) {
                console.error('Error al parsear XML:', err);
            } else {
                var idRpt = result.Report.$.IdRpt;
                var idPet = result.Report.$.IdPet;
                var version = result.Report.$.Version;
                if(idRpt == 'S13') {
                    var s13Repository = AppDataSource.getRepository(S13);
                    var s13 = new S13();
                    s13.idRpt = idRpt;
                    s13.idPet = parseInt(idPet);
                    s13.version = version;
                    s13.cnc = result.Report.Cnc[0].$.Id;
                    s13.cnt = result.Report.Cnc[0].Cnt[0].$.Id;
                    s13.fh = result.Report.Cnc[0].Cnt[0].S13[0].$.Fh;
                    s13.et = parseInt(result.Report.Cnc[0].Cnt[0].S13[0].$.Et);
                    s13.c = parseInt(result.Report.Cnc[0].Cnt[0].S13[0].$.C);
                    s13.d1 = result.Report.Cnc[0].Cnt[0].S13[0].$.D1;
                    s13.d2 = result.Report.Cnc[0].Cnt[0].S13[0].$.D2;
                    if(result.Report.Cnc[0].Cnt[0].S13[0].$.ErrCat !== undefined) {
                        s13.errCat = parseInt(result.Report.Cnc[0].Cnt[0].S13[0].$.ErrCat);
                        s13.errCode = parseInt(result.Report.Cnc[0].Cnt[0].S13[0].$.ErrCode);
                    }
                    s13Repository.save(s13);
                    console.log('S13 event inserted on DB')
    
                } else if(idRpt == 'S15') {
                    const s15Repository = AppDataSource.getRepository(S15);
                    var s15 = new S15();
                    s15.idRpt = idRpt;
                    s15.idPet = parseInt(idPet);
                    s15.version = version;
                    s15.cnc = result.Report.Cnc[0].$.Id;
                    s15.fh = result.Report.Cnc[0].S15[0].$.Fh;
                    s15.et = parseInt(result.Report.Cnc[0].S15[0].$.Et);
                    s15.c = parseInt(result.Report.Cnc[0].S15[0].$.C);
                    s15.d1 = result.Report.Cnc[0].S15[0].$.D1;
                    s15.d2 = result.Report.Cnc[0].S15[0].$.D2;
                    s15Repository.save(s15);
                    console.log('S15 event inserted on DB')
      
                } else if(idRpt == 'S31') {
                    var s31Repository = AppDataSource.getRepository(S31)
                    var s31 = new S31();
                    s31.idRpt = idRpt;
                    s31.idPet = parseInt(idPet);
                    s31.version = version;
                    s31.cnc = result.Report.Cnc[0].$.Id;
                    s31.cnt = result.Report.Cnc[0].Cnt[0].$.Id;
                    s31.fh = result.Report.Cnc[0].Cnt[0].S31[0].$.Fh;
                    s31.clientId = parseInt(result.Report.Cnc[0].Cnt[0].S31[0].$.ClientId);
                    s31.status = parseInt(result.Report.Cnc[0].Cnt[0].S31[0].$.Status);
                    s31.keyRequest = result.Report.Cnc[0].Cnt[0].S31[0].$.KeyRequest;
                    s31Repository.save(s31);
                    console.log('S31 event inserted on DB')
                } 
            }
        })

    } else if(req.body && req.body?.['SOAP-ENV:Envelope']?.['SOAP-ENV:Body']?.[0]?.['ns2:Report']?.[0]){
        const res2 = req.body['SOAP-ENV:Envelope']['SOAP-ENV:Body'][0]['ns2:Report'][0];
        parseString(res2['ns2:Payload'][0], (err, result) => {
            if(err) {
                console.error('Error al parsear XML:', err);
            } else {
                var idRpt = result.Report.$.IdRpt;
                var idPet = result.Report.$.IdPet;
                var version = result.Report.$.Version;
                if(idRpt == 'S63') {
                    for(let i=0; i<Object.keys(result.Report.Rtu[0].LVSLine[0].S63).length; i++) {
                        var s63Repository = AppDataSource.getRepository(S63);
                        var s63 = new S63();
                        s63.idRpt = idRpt;
                        s63.idPet = parseInt(idPet);
                        s63.version = version;
                        s63.rtuId = result.Report.Rtu[0].$.Id;
                        s63.lvsId = result.Report.Rtu[0].LVSLine[0].$.Id;
                        s63.lvsPos = parseInt(result.Report.Rtu[0].LVSLine[0].$.Pos);
                        if(result.Report.Rtu[0].LVSLine[0].$.ErrCat !== undefined) {
                            s63.errCat = parseInt(result.Report.Rtu[0].LVSLine[0].$.ErrCat);
                            s63.errCode = parseInt(result.Report.Rtu[0].LVSLine[0].$.ErrCode);
                        }
                        s63.fh = result.Report.Rtu[0].LVSLine[0].S63[i].$.Fh;
                        s63.et = parseInt(result.Report.Rtu[0].LVSLine[0].S63[i].$.Et);
                        s63.c = parseInt(result.Report.Rtu[0].LVSLine[0].S63[i].$.C);
                        s63.d1 = result.Report.Rtu[0].LVSLine[0].S63[i].$.D1;
                        s63.d2 = result.Report.Rtu[0].LVSLine[0].S63[i].$.D2;
                        s63Repository.save(s63);
                        console.log('S63 event inserted on DB')
                    }
                    
      
                } else if(idRpt == 'S65') {
                    for(let i=0; i<Object.keys(result.Report.Rtu[0].S65).length; i++) {
                        var s65Repository = AppDataSource.getRepository(S65);
                        var s65 = new S65();
                        s65.idRpt = idRpt;
                        s65.idPet = parseInt(idPet);
                        s65.version = version;
                        s65.rtuId = result.Report.Rtu[0].$.Id;
                        if(result.Report.Rtu[0].$.ErrCat !== undefined) {
                            s65.errCat = parseInt(result.Report.Rtu[0].$.ErrCat);
                            s65.errCode = parseInt(result.Report.Rtu[0].$.ErrCode);
                        }
                        s65.fh = result.Report.Rtu[0].S65[i].$.Fh;
                        s65.et = parseInt(result.Report.Rtu[0].S65[i].$.Et);
                        s65.c = parseInt(result.Report.Rtu[0].S65[i].$.C);
                        s65.d1 = result.Report.Rtu[0].S65[i].$.D1;
                        s65.d2 = result.Report.Rtu[0].S65[i].$.D2;
                        s65Repository.save(s65);
                        console.log('S65 event inserted on DB')
                    }
                }
            }
        })
    }
    
  result.send('<h1>XML received and processed successfully!6</h1>')

};