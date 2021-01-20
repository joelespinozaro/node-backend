

const promiseFunction = () => new Promise((resolve,reject)=>{
    setTimeout(function(){
        if(Math.random() < 0.5) {
            resolve ('hello world');
        } else {
            reject('hello error');
        }
    }, 1300);
});

async function asyncAwait() {
    try{
        const msg = await promiseFunction();
        console.log(msg);
    }catch(e){
        console.error(e);
    }
}

asyncAwait();
