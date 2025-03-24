const express = require('express');
const app = express();

app.post('/data', (req, res) => {
  let data = '';

  req.on('data', (chunk) => {
    data += chunk;
  });

  req.on('end', () => {
    console.log('Received Data:', data);
    res.send('Data received');
  });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});


//   this  is with out using any middlewares



// different content types headers through which we can send  data to backend
fetch('http://localhost:3000/data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: 'John', age: 30 }),
  })
    .then(response => response.text())
    .then(data => console.log(data));
  
// .-H 'Content-Type: application/json'
//     -d '{'name':'gopal'}'

// -------------------------------------------------------------------------------

// works on url search params
const formData = new URLSearchParams();
formData.append('name', 'John');
formData.append('age', '30');

fetch('http://localhost:3000/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: formData,
})
  .then(response => response.text())
  .then(data => console.log(data));


// 2. -H 'Content-Type: application/x-www-form-urlendoded'
//     -d 'name=gopal&age=20'

//----------------------------------------------------


// multipart/form-data 
const formData = new FormData();
const fileInput = document.querySelector('#fileInput');
formData.append('file', fileInput.files[0]);

fetch('http://localhost:3000/data', {
  method: 'POST',
  body: formData, // No need to set Content-Type, browser handles it
})
  .then(response => response.text())
  .then(data => console.log(data));
<input type="file" id="fileInput" />

//----------------------------------------------------------
Server Middleware: express.text()
fetch('http://localhost:3000/data', {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain',
    },
    body: 'This is a plain text message',
  })
    .then(response => response.text())
    .then(data => console.log(data));
  

// 3. -H "Content-Type: text/plain" \
// -d "Hello, this is a test message."

//--------------------------------------------------------
const xmlData = `<user><name>John</name><age>30</age></user>`;

fetch('http://localhost:3000/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/xml',
  },
  body: xmlData,
})
  .then(response => response.text())
  .then(data => console.log(data));

  //-----------------------------------------------------------


const htmlContent = '<h1>Hello, World!</h1>';

fetch('http://localhost:3000/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'text/html',
  },
  body: htmlContent,
})
  .then(response => response.text())
  .then(data => console.log(data));


  //===========================--------------------------------------


  const jsCode = "console.log('Hello from JavaScript')";

fetch('http://localhost:3000/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/javascript',
  },
  body: jsCode,
})
  .then(response => response.text())
  .then(data => console.log(data));


  //----------------------------------------------------------------

  const fileInput = document.querySelector('#fileInput');

fileInput.addEventListener('change', async () => {
  const file = fileInput.files[0];
  const arrayBuffer = await file.arrayBuffer();

  fetch('http://localhost:3000/data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/octet-stream',
    },
    body: arrayBuffer,
  })
    .then(response => response.text())
    .then(data => console.log(data));
});


<input type="file" id="fileInput" />

