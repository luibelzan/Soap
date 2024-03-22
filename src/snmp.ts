var snmp = require ("net-snmp");

var options = {
    port: 1161,
    retries: 1,
    timeout: 5000,
    backoff: 1.0,
    trapPort: 162,
    version: snmp.Version2c,
    backwardsGetNexts: true,
    reportOidMismatchErrors: false,
    idBitsSize: 32
};

var session = snmp.createSession ("188.171.38.203", "public", options);

var oids = ["1.3.6.1.4.1.39959.2.4.1.7.0", "1.3.6.1.4.1.2021.100.4.0"];

session.get (oids, function (error, varbinds) {
    if (error) {
        console.error (error);
    } else {
        for (var i = 0; i < varbinds.length; i++) {
            if (snmp.isVarbindError (varbinds[i])) {
                console.error (snmp.varbindError (varbinds[i]));
            } else {
                console.log (varbinds[i].oid + " = " + varbinds[i].value);
            }
        }
    }
    session.close ();
});

session.trap (snmp.TrapType.LinkDown, function (error) {
    if (error) {
        console.error (error);
    }
});
