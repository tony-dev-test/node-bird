const express = require('express');

const app = express();

app.post('/api/post', (req, res) => {
  //   res.json('작성 완료');
  res.json({ id: 1, content: 'hello' });
});

app.delete('/api/post', (req, res) => {
  res.json({ id: 1 });
});

app.get('/api/posts', (req, res) => {
  res.json([
    { id: 1, content: 'hello' },
    { id: 2, content: 'hello' },
    { id: 3, content: 'hello' },
  ]);
});

app.get('/api', (req, res) => {
  res.send('hello api');
});

app.get('/', (req, res) => {
  res.send('hello express');
});

app.listen(3065, () => {
  console.log('서버 실행 중');
});
