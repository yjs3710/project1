const express = require('express');
const app = express();

// 내가 원하는 포트 번호 (예: 5000)
const PORT = 5000;

// // GET 요청 처리
// app.get('/', (req, res) => {
//   res.send('Hello from my custom port! Welcome my server');
// });

app.use(express.static('test-web')); // HTML/JS 파일이 있는 폴더

// 서버 실행
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
