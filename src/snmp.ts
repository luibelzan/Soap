
var dgram = require('dgram');
//var snmp = require('snmpjs');
var snmp2 = require('snmp-native');

var server = dgram.createSocket("udp4");

server.on("listening", function() {
    var addr = server.address();
    console.log("Server listening "+ addr.address + ":" + addr.port);
});

server.on("message", function (msg, rinfo) {
    console.log("From " + rinfo.address + ":" + rinfo.port);
    console.log("server got: " + msg);
    //console.log("Parse: " + snmp.parseMessage({raw:msg}));
    console.log("Parse: " + snmp2.parse(msg));
});

server.bind(162);


var snmp = require ("net-snmp");

var options = {
    port: 1161,
    trapPort: 162,
    version: snmp.Version2c,
    disableAuthorization: true
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
    //session.close ();
});

session.trap (snmp.TrapType.LinkDown, function (error) {
  if (error) {
      console.error (error);
  }
});


