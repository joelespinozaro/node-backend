const fs = require('fs');


const file = process.argv[2];

fs.readFile(file, function(err,content) {
    if(err) {
        console.error(err);
        return;
    }    
    const lines = content.toString().split("\n").length;
    console.log(lines);
});
