const Telnet = require("telnet-client");

//var hosts = ["smtp.gmail.com:465","smtp.gmail.com:25"];
var hosts = process.env.TELNET_HOSTS.split(",");

exports.telnetHosts = async () => {
  let summary = [];
  for (let host of hosts) {
    let connection = new Telnet();

    let hostInfo = host.split(":");
    console.log(`hostInfo: ${host}`);

    let ipAddress = hostInfo[0];
    let port = hostInfo[1];

    let isAlive = false;
    try {
      await connection.connect({
        host: ipAddress,
        port: port,
        negotiationMandatory: false,
        timeout: 1500,
      });
      isAlive = true;
      console.log(`${host} is alive. Nothing to see here.`);

      await connection.end();
      await connection.destroy();

    } catch (error) {
      console.log(`RED ALERT! Cannot connect to ${host}.`);
    } 
    summary.push({ host: host, alive: isAlive });
  }
  console.log(summary);
  return summary;
};
