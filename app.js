// import module 
const express = require('express');
const app = express();
// port 
const port = 2317;


// get
app.get('/', (req,res)=> {
  res.send('hello');
})
//post
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.post('/login', (req,res)=> {
  res.send('hello world')
});


app.listen(port, ()=> {
  console.log(`
http://localhost:${port}  
  `)
});