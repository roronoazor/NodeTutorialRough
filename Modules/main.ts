// using common js module 
const math = require('../math')
//const fs = require('fs')

console.log(math.add(24, 12))
console.log(math.subtract(16, 16))


process.on('uncaughtException', (err:any) => {
    console.log("Your applicaiton is about to fail")
    console.log(err.stack)
})

import fs from 'fs';

fs.readFile('./someFile.txt', (err: NodeJS.ErrnoException | null, data: Buffer) => {
    if (err) {
        console.error(err);
        return;
    }
    // Log the file contents if no error
    console.log(data.toString());
});


function square(num:any, callback:any) {
    if (typeof callback !== 'function') {
        throw new TypeError(`Callback must be a function, got ${typeof callback}`)
    }

    setTimeout(() => {
        if (typeof num !== 'number') {
            callback(new TypeError(`Expected number, but got ${typeof num}`))
            return
        }

        const result = num * num;
        callback(null, result)
    }, 100)
}


square('8', (err:any, result:any) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(result)
})