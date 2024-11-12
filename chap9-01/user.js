//簡易サーバー

const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const PORT = 3333;


// ダミーデータ
const users = [
  { id: 1, firstname: "Alice", lastname: "Johnson",  age: 25, hobbies: ["reading", "swimming", "coding"] ,personalColor: "blue"},
  { id: 2, firstname: "Bob", lastname: "Brown",age: 30 },
  { id: 3, firstname: "Charlie", lastname: "Wilson",age: 35, hobbies: ["gaming", "traveling", "photography"] },
];

// /users エンドポイント
app.get('/users', (req, res) => {
  res.json(users);
});

// サーバー起動
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
