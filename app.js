// import module 
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
// port 
const port = 2317;
// 
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req,res)=> {
  res.send('hello');
})

app.listen(port, ()=> {
  console.log(`
http://localhost:${port}  
  `)
});