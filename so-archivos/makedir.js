const fs = require('fs');

fs.mkdir('frutas/citricos/naranja', { recursive: true }, (err)=> {
    if(err){
        console.err(err);
        return;
    }
})