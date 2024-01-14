const { EventEmitter } = require("events")


const customEmitter = new EventEmitter()


customEmitter.on("attack", (...args:number[])=>{
    console.log("Boss we are under a cyber attack", args)
})


// there is another event listener method called .once()
/**
 * it is similar to the on method
 * however after is responds to an emitted event
 * node removes that listener, so essentially as
 * the name suggests it only responds once
 * 
 */


customEmitter.emit("attack", 54, 54, 3,23)


/**
 * 
 * When working with Event emitters 
 * dont forget to handle the error 
 * by putting a listener for error 
 * which accepts an error object 
 * 
 * customEmitter.on('error', (error) => { doSomethingWithErrorHere() })
 * 
 */


/**
 * 
 * You can get the listener count for an object 
 * using this approach 
 * 
 * cosnt attackListeners = customEmitter.listenerCount('attack') 
 * if (attackListeners > MAX_ADVISED_LIMIT)
 *      trigger another event that lets the user know
 *
 * 
 */

process.nextTick(()=>{
    console.log("This shoudl fire before the next loop starts")
})


const myPromise = new Promise((resolve, reject)=>{
    resolve("foo")
})

myPromise
  .then((value) => `${value} and bar`)
  .then((value) => `${value} and bar again`)
  .then((value) => `${value} and again`)
  .then((value) => `${value} and again`)
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.error(err);
  });


const xx = (x:number) => (`kobe ${x}`);

const res = xx(32);

console.log("res: ", res)

