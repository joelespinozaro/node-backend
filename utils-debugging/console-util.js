// %s string
// %d número
// %j JSON



// console.log("Un %s y un %s", "perrito", "gatito");

// console.info("Hello world");
// console.warn("Hello error");

// console.assert(42 === "42");


// console.trace("hello");


const util = require('util');

const debuglog = util.debuglog("foo");


debuglog("hello from foo");