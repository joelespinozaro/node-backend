const os = require('os');

// console.table(os.cpus());
// console.log("IP address", os.networkInterfaces().enp8s0.map(i => i.address));
// console.log("Free memory", os.freemem()/1024/1024/1024, 'GB');
// console.log("type", os.type());
console.log("SO version", os.release());
console.table(os.userInfo());