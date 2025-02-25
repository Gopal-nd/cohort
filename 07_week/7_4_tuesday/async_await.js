const fs = require('fs')  
const fsv2= require('fs/promises')  


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


    let read =  fsv2.writeFile('./confidential.txt',info)
        read.then((read)=>{

            console.log(read)
        })


async function wait(s) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve()
        }, s*1000);
    })
}

async function doTasks() {
    try {
        const data =await readFileWithPromise('./confidential.txt','utf-8')
        await writeFileWithPromise('./backup.txt',data)
        await wait(10)
        await unlinkFileWithPromise('./confidential.txt')
        
    } catch (error) {
        console.log('error',error)
    }finally{
        console.log('finally done')
    }
 
}


doTasks()