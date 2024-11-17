import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css';
import { ProductCard } from "./components/ProductCard";

export const App =() => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    // APIからデータを取得する際に複数の商品データを取得する
    //　APIのエンドポイントはhttp://localhost:3333/products
    // データ取得に成功した場合はsetProductで取得したデータをセットする
    
    axios
      .get("http://localhost:3333/products") 
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("データ取得エラー:", error);
      });
  }, []);

  return (
    <div className="App" style={{ backgroundColor: 'darkblue', padding: '20px' }}>
      <h1>Product List</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', margin: '-8px' }}>
        {products.map((product) => (
          <div key={product.id} style={{ margin: '8px' }}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
