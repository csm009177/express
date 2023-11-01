// import module 
const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
// port 
const port = 2317;

// get
app.get('/', (req,res)=> {
  res.sendFile(__dirname +'/index.html');
})
//post
app.post('/login', (req, res) => {
  // make body
  const userid = req.body.userid;
  const userpw = req.body.userpw;
  
  const goodid = 'csm';
  const goodpw = '0177';
  
  if ( userid=== goodid && userpw === goodpw ) {
    res.sendFile( __dirname + '/search.html');
  } else {
    res.send('Invalid login');
  }
});

app.listen(port, ()=> {
  console.log(`
http://localhost:${port}  
  `)
});