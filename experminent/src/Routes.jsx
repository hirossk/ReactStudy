import { Routes, Route } from "react-router-dom"; // ルーティングに必要なRoutesとRouteコンポーネントをインポート
import { Top } from "./Top"; // Topコンポーネントをインポート
import { Login } from "./components/Login"; // Loginコンポーネントをインポート
import { Profile } from "./components/Profile"; // Profileコンポーネントをインポート

// AppRoutesコンポーネントを定義
export const AppRoutes = () => {
    return (
        <Routes>
            {/* Topページのルート設定 */}
            <Route path="/" element={<Top />} />

            {/* ログインページのルート設定 */}
            <Route path="/Login" element={<Login />} />

            {/* プロフィールページのルート設定 */}
            <Route path="/Profile" element={<Profile />} />
        </Routes>
    );
};
