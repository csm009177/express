// import 
const express = require('express');
const app = express();
// port
const port = 2317;

app.get('/', (req,res)=> {
  res.send('hello')
})

app.listen(port, () =>{
  console.log(`
http://localhost:${port}
  `)
})