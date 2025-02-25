// how to make code async  and use of call backs



const fs = require('fs')
const fsv2 = require('fs/promises')



console.log('start programming')

// sync
// let data = fs.readFileSync('./confidential.txt','utf-8')
// console.log("result is ", data)

//async   using call back

// fs.readFile('./confidential.txt','utf-8',function(err, data){
//     if(err){
//         console.log("error in the operation",err)
//     }else{

//         console.log("result is ", data)
//     }
// })

//async   using promise

fsv2.readFile('./confidential.txt','utf-8')
.then((content)=>{
    console.log(content)
})

console.log('end prograing')


// creating backup 
// callback hell

fs.readFile('./confidential.txt','utf-8',(error,data)=>{
if(error){
    console.log(error)
}else(
    fs.writeFile('./backup.txt',data,(err)=>{
        if(err){
            console.log(err)
        }else{
            fs.unlink('./confidential.txt',(err)=>{
                if(err){
                    console.log(err)
                }
            })
        }
    })
)
})
.then((data)=>writeFileWithPromise('./backup.txt',data))
.then(()=>unlinkFileWithPromise('./confidential.txt'))
.catch((e)=>console.log(e))
.finally(()=>console.log('done'))