const { Transform } = require('stream');

const transformStream = new Transform({
    transform(chunk, encoding, cb) {
        let words = chunk.toString().split(' ');

        let camelcase = '';

        for(let i = 0; i < words.length; i++) {
              camelcase += camelCase(words[i]);
        }

        this.push(camelcase);
        cb();
    }
});

function camelCase(word) {
    let firstLetter = word.charAt(0).toUpperCase();
    let leftover = word.substring(1,word.length).toLowerCase();

    return firstLetter + leftover;
}

process.stdin.pipe(transformStream).pipe(process.stdout);
