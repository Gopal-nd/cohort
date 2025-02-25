// converting normal code from sync to async

console.log('start programming')

// sync
// function sum(a,b){
//     return a+b
// }

// console.log(sum(2,3))

// async   using call back

function CbSum(a,b,cb){
    setTimeout(() => {
        cb(a+b)
    }, 2000);
}

CbSum(3,4,(ans)=>{
    console.log(ans)
})



console.log('end prograing')


// creating backup 


// callback hell
readFileWithPromise('./confidential.txt','utf-8')
.then((data)=>writeFileWithPromise('./backup.txt',data))
.then(()=>unlinkFileWithPromise('./confidential.txt'))
.catch((e)=>console.log(e))
.finally(()=>console.log('done'))