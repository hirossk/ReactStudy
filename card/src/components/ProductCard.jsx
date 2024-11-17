import React from "react";

export const ProductCard = ({ product }) => {
  if (!product) {
    return <div className="text-center">Loading...</div>;
  }

return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* 商品画像 */}
        <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
        
        <div className="p-4">
            {/* タイトル */}
            <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
            
            {/* 詳細情報 */}
            <p className="text-sm text-gray-600 mt-2">{product.details}</p>

            {/* レビュー */}
            <div className="flex items-center mt-3">
                <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                        <svg
                            key={i}
                            className={`w-4 h-4 ${
                                i < Math.round(product.rating) ? "text-yellow-400" : "text-gray-300"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M10 15l-5.878 3.09 1.122-6.545L.366 6.91l6.562-.955L10 0l3.072 5.955 6.562.955-4.878 4.635 1.122 6.545z" />
                        </svg>
                    ))}
                </div>
                <span className="text-sm text-gray-600 ml-2">({product.reviews} 件)</span>
            </div>

            {/* 価格 */}
            <p className="text-lg font-bold text-gray-800 mt-4">¥{product.price.toLocaleString()}</p>

            {/* 配送情報 */}
            <p className="text-sm text-gray-600 mt-1">送料¥{product.shipping.toLocaleString()}</p>
        </div>
    </div>
);
};

