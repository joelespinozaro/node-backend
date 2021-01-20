const EventEmitter = require('events');

class Logger extends EventEmitter {
    execute(cb) {
        console.log('before');
        this.emit('start');
        cb();
        this.emit('finish');
        console.log('after');
    }
}

const logger = new Logger();

logger.on('start', ()=> {
    console.log('Starting');
})

logger.on('finish', ()=> {
    console.log('finishing');
})

logger.on('finish', ()=> {
    console.log('It\'s Done');
})

logger.execute(()=>{console.log('hello world')});