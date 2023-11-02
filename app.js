// import 
const express = require('express');
const app = express();
// port
const port = 2317;

// 정적 파일을 제공하기 위한 미들웨어 설정
app.use(express.static('public'));

// 데이터를 파싱하기 위한 선언 
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

// get sendFile
app.get('/', (req,res)=> {
  res.sendFile('./index.html');
})

app.post('/search', (req,res)=> {
  // import id and pw
  const userId= req.body.Id;
  const userPw= req.body.Pw
  // goot id and pw
  const goodId= 'csm';
  const goodPw= '0177';

  if(userId===goodId && userPw === goodPw){
    res.sendFile(__dirname + '/public/search.html');
  }
})



app.listen(port, () =>{
  console.log(`
http://localhost:${port}
  `)
})