

const promise = new Promise((resolve,reject)=>{
    setTimeout(function(){
        if(Math.random() < 0.5) {
            resolve ('hello world');
        } else {
            reject('hello error');
        }
    }, 1300);
})

promise
    .then(response => console.log(response.toUpperCase()))
    .catch(err => console.error(err));