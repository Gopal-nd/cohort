const fs = require('fs')
const math = require('./math')
const express = require('express')
function wrapperFunction({exports,require, modules,__filename,__dirname}){
    fs.writeFile('./data.txt','utf-8',(data,err)=>{
        if(!err)
        console.log(data)
    })
}
fs.writeFile('./data.txt','utf-8',(data,err)=>{
    if(!err)
    console.log(data)
})

const app = express()

app.del('/user/:12',(req,res)=>{
    res.send('deleted')
})

console.log({__filename,__dirname})
console.log(math.mul(1,2))


/**
 package-lock.json
 it will lock version thto that dependency of the dependencies
 it will make the tree of dependency with the versions

 it use graphs DSA
 Topological sorting
 */










// console.log(math.add(100,10))


/**
   "dependencies": {
    "express": "^4.21.2"
  }
}
  ^ ~ = >= {  (sem versioning)
  '4.21.2' -> exactly this version
  '^4.21.2' -> upgrade the minior and patch version, will not change the major version which will break the code 
    '~4.21.2' -> upgrade only patch version
  }
  4  Major braking change ,code will break 
  21 minor  added functionality
  2  patch - small security, readme, documentation

  can see in changelog


 */