const fs = require('fs')  // fs will converted to the 'fs/promise'

function readFileWithPromise(filepath, encoding){
    return new Promise((resolve,reject)=>{
        fs.readFile(filepath,encoding,(err,content)=>{
            if(err){
                reject(err)
            }else{
                resolve(content)
            }

        })
    })
}


function writeFileWithPromise(filepath, encoding){
    return new Promise((resolve,reject)=>{
        fs.writeFile(filepath,encoding,(err)=>{
            if(err){
                reject(err)
            }else{
                resolve()
            }

        })
    })
}

function unlinkFileWithPromise(filepath,){
    return new Promise((resolve,reject)=>{
        fs.unlink(filepath,(err)=>{
            if(err){
                reject(err)
            }else{
                resolve()
            }

        })
    })
}

let info = 'this is more confidential data'

let read = writeFileWithPromise('./confidential.txt',info)
read.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})

 read = readFileWithPromise('./confidential.txt','utf-8')
read.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})


readFileWithPromise('./confidential.txt','utf-8')
.then((data)=>writeFileWithPromise('./backup.txt',data))
.then(()=>unlinkFileWithPromise('./confidential.txt'))
.catch((e)=>console.log(e))
.finally(()=>console.log('done'))


read = writeFileWithPromise('./confidential.txt',info)
read.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})