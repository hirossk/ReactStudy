import { useNavigate } from "react-router-dom"; // ページ遷移に使用するuseNavigateフックをインポート
import './Top.css'; // スタイルシートをインポート

// Topコンポーネントを定義
export const Top = () => {
    const navigate = useNavigate(); // useNavigateを使って、navigate関数を取得

    // ログイン画面に遷移する関数
    const handleForm = () => {
        navigate('/Login'); // '/Login'パスに遷移
    };

    // 表示画面（プロフィール画面）に遷移する関数
    const handleView = () => {
        navigate('/Profile'); // '/Profile'パスに遷移
    };

    return (
        <>
            {/* ログイン画面に遷移するボタン */}
            <div className="top-container">
                <button className="top-button" onClick={handleForm}>ログイン画面へ</button>
            </div>
            
            {/* 表示画面（プロフィール画面）に遷移するボタン */}
            <div className="top-container">
                <button className="top-button" onClick={handleView}>表示画面へ</button>
            </div>
        </>
    );
};
