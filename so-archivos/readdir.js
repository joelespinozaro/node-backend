const fs = require('fs');

const files = fs.readdir(__dirname, function(err, files) {
    if(err){
        console.error(err);
        return;
    }
    console.log(files);
})