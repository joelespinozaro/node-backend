const asyncCallback = function(cb) {
    setTimeout(function(){
        if(Math.random() < 0.5) {
            return cb(null, 'hello world');
        } else {
            return cb('hello error');
        }
    }, 1300);
};

asyncCallback(function(err, msg) {
    if(err){
        console.error(err);
    } else {
        console.log(msg);
    }
})