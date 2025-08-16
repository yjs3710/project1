const express = require('express');
const app = express();
const port = 5000;

// 정적 파일 제공 (index.html 포함)
app.use(express.static(__dirname));

// API 엔드포인트
app.get('/api/data', (req, res) => {
  res.json({ message: "백엔드에서 온 데이터입니다!" });
});

app.listen(port, () => {
  console.log(`서버 실행 중: http://localhost:${port}`);
});
