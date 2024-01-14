
class OddError extends Error {

    private desc: string;
    private code: number;
    constructor(desc:string) {
        super(`${desc} must be Odd`)
        this.desc = desc;
        this.code = 54;
    }

}

function divideByTwo(amount:number){ 

    return new Promise((resolve, reject)=>{

        if (typeof amount != 'number') {
            reject(new TypeError(`Expected Number, Got ${typeof amount}`))
        }

        if (amount <= 0){
            reject(new Error('Amount must be greater than zero'))
        }

        if (amount % 2 != 0) {
            reject(new OddError('amount'))
        }

        resolve(amount / 2);
    })

}

console.log(1)
divideByTwo(89)
.then((res:any) => console.log(res))
.catch((err:any) => console.log(err.code))
console.log(2)



async function run () {
    try{
        const result  = await divideByTwo(43)
    }catch (error) {
        console.log("Caught an error", error.code, error)
    }
}



const threeSecondpromise = new Promise((resolve, reject) => {
    setTimeout(()=>{reject('Timeout Exception')}, 3000)
})

const fiveSecondpromise = new Promise((resolve, reject) => {
    setTimeout(()=>{resolve(5)}, 5000)
})


const truthOfOrigin = Promise.all([
    threeSecondpromise, 
    fiveSecondpromise
])


truthOfOrigin.then((res) => {console.log("res: ", res)}).catch((err)=>{console.log(err)})