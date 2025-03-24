// const http = require('http')
// const express = require('express')

// const customHandler = function(req,res){
//     console.log('incoming req')
//     console.log(req.method)
//     console.log(req.url)

//     switch(req,method){
//         case 'GET':{
//             if(req.url=='/') res.end('home  page')
//             if(req.url=='/contact') res.end('contact page')
            
//         }
//     }
//     res.end('hello there')
// }

// const expressHandler = express()
// expressHandler.use(express.json())

// expressHandler.get('/',(req,res)=>res.end('home page'))
// expressHandler.post('/',(req,res)=>{
//     console.log(req.body)
//     res.send('reived')
// })

// const server = http.createServer(expressHandler)


// server.listen(5000,()=>console.log('server is running in port 5000'))



const express = require('express');
const app = express();
app.use(express.json()); // for JSON payloads
app.use(express.urlencoded({extended:true}))
app.use(express.text())

app.post('/data', (req, res) => {
  console.log(req.body);
  
  res.send('Data received');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
