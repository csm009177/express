// import 
const express = require('express');
const app = express();
// port
const port = 2317;

// 정적 파일을 제공하기 위한 미들웨어 설정
app.use(express.static('public'));



// get sendFile
app.get('/', (req,res)=> {
  res.sendFile('./index.html');
})

app.post('/login', (req,res)=> {
  const userId= req.body.Id;
  const userPw= req.body.Pw


  if(userId===goodId && userPw === goodPw){
    res.send('./search.html');
  }
})



app.listen(port, () =>{
  console.log(`
http://localhost:${port}
  `)
})