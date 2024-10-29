import { useState } from 'react'; // useStateフックをインポート
import { Card } from './components/Card2'; // Card2コンポーネントをインポート

// Appコンポーネント
export const App = () => {
    // カードの状態をuseStateで管理（初期値として4つのカードを設定）
    const [cards, setCards] = useState([
        { id: 1, title: "Card 1" },
        // { id: 2, title: "Card 2" },
        // { id: 3, title: "Card 3" },
        // { id: 4, title: "Card 4" },
    ]);

    // 指定されたidのカードを非表示にする関数
    const removeCard = (id) => {
        // setCards関数を使って、指定したid以外のカードのみを保持する（現在はコメントアウト中）
        // setCards(cards.filter(card => card.id !== id));
    };

    return (
        // カードを横並びにして中央に配置し、折り返し可能にするスタイル
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
            {/* cards配列をmapで処理し、各カードをCardコンポーネントとして表示 */}
            {cards.map((card) => (
                // keyにcard.idを指定し、idとtitleをCardコンポーネントに渡す
                <Card key={card.id} id={card.id} title={card.title} onRemove={removeCard} />
            ))}
        </div>
    );
};
