

const promise1 = new Promise((resolve, reject) => {
    const string1 = "geeksforgeeks"
    const string2 = "geeksforgeeks"
    if ( string1 == string2 ) { 
        resolve("Strings are equal");
    } else {
        reject("Strings not equal")
    }
});

// promise1.then((res)=>{
//     console.log(res)
// }).then((res)=>{
//     console.log('another res', res)
// }).catch((err) =>{ 
//     console.log(err);
// }).finally(()=>{
//     console.log("finallly");
// });


(
    async function () {        
        try{
        const x = await promise1;
        console.log("Resolved", x);
        }catch(error) {
        console.log(error)
        }
    }
)()

console.log("i like apples")


let a = 1
let b = 2

setTimeout((x: any)=>{
 console.log("Time", a,x)
}, 100, a)

a = 15