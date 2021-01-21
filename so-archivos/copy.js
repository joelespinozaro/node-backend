const fs = require('fs');

fs.copyFile("naranja.txt", "limon.txt", function(err) {
    if(err){
        console.error(err);
        return;
    }
    console.log('el archivo fue copiado');
})