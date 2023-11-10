import http from 'http';
import express from 'express'
import fs from 'fs';
const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.json());

// port 
const port = 2317;

// 정적 파일을 제공하기 위한 미들웨어 설정
app.use(express.static('public'));

// 데이터를 파싱하기 위한 선언 
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

// get sendFile
app.get('/', (req,res)=> {
  res.sendFile(__dirname +'/doc/login.html');
})
//post
app.post('/login', (req, res) => {
  // make body
  const userid = req.body.userid;
  const userpw = req.body.userpw;
  
  const goodid = 'csm';
  const goodpw = '0177';
  
  if ( userid=== goodid && userpw === goodpw ) {
    res.sendFile( __dirname + '/doc/index.html');
  } else {
    res.send('Invalid login');
  }
});

app.listen(port, ()=> {
  console.log(`
http://localhost:${port}
  `)
})