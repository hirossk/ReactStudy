const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
const port = 3333;
app.listen(port, () => {
  console.log("Server running on PORT:" + port);
});

// JSONデータの準備
// このプログラムを複数productsとして返すAPIにします。
const products = [
  {
    id: 1,
    image: "https://th.bing.com/th/id/R.789317f025fca4f498baab185d01001d?rik=hZ1SpcVQvjbqdg&riu=http%3a%2f%2fniceillust.com%2fwp-content%2fuploads%2f2018%2f11%2ftabemono01_035.png&ehk=E3EbQI8DOMmwOhNBZCdyukxwBxMIkBva%2bm4%2f1r4lRPE%3d&risl=&pid=ImgRaw&r=0",  // 画像URL  商品1 画像   
    title: "Sample Product 1",  // 商品1 タイトル
    details: "This is a sample product 1.",  // 商品1 詳細
    rating: 4.5,  // 商品1 評価
    reviews: 10,  // 商品1 レビュー数
    price: 1000,  // 商品1 価格
    shipping: 500 // 商品1 配送情報
  },
  {
    id: 2,
    image: "https://illustkun.com/wp-content/uploads/2018/08/illustkun-01029-shampoo.png",  // 画像URL  商品2 画像
    title: "Sample Product 2",  // 商品2 タイトル
    details: "This is a sample product 2.",  // 商品2 詳細
    rating: 3.5,  // 商品2 評価
    reviews: 5,  // 商品2 レビュー数
    price: 2000,  // 商品2 価格
    shipping: 0 // 商品2 配送情報
    }
];


// エンドポイントの設定
app.get('/products', (req, res) => {
  res.json(products);
});