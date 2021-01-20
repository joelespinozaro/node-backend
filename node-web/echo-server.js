const { read } = require('fs');
const http = require('http');
const server = http.createServer();

const port = 8001;
const DAYS = {
    0: "domingo",
    1: "Lunes",
    2: "martes",
    3: "miercoles",
    4: "jueves",
    5: "viernes",
    6: "sabado"
}
server.on('request', (req,res)=> {
    if(req.method === 'POST' && req.url === '/echo'){
        let body = [];

        req.on('data', chunk => {
            body.push(chunk);
        })
        .on('end', () => {
            res.writeHead(200,{"Content-Type": "text/plain"});
            body = Buffer.concat(body).toString();
            res.end(body);
        })
    } else if (req.method === 'POST' && req.url === '/birthday'){
        let body = [];
        req.on('data', chunk => {
            body.push(chunk);
        })
        .on('end', () => {
            res.writeHead(200,{"Content-Type": "text/plain"});
            body = Buffer.concat(body).toString();
            
            let splitted = body.split("/");
            let day = splitted[0];
            let month = splitted[1] - 1;
            let year = splitted[2];

            let birthday = new Date(year,month,day);

            res.end(DAYS[birthday.getDay()]);

        })
    } else {
        res.statusCode = 404;
        res.end();
    }
});



server.listen(port);
console.log('Server start on http://localhost:'+port);