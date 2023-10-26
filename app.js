const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

// 가상 사용자 데이터베이스
const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' }
];

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // 사용자 인증 로직: 간단한 배열을 사용한 검증
  const user = users.find((user) => user.username === username && user.password === password);

  if (user) {
    // 로그인 성공 시, 인증된 사용자에게 index.html 파일 제공
    res.sendFile(__dirname + '/index.html');
  } else {
    res.send('로그인 실패');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port 
  http://localhost:${port}`);
});