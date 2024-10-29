// Cardコンポーネント
// propsとしてid, title, onRemove関数を受け取る
export const Card = ({ id, title, onRemove }) => {
    // カードのスタイル設定（枠線、丸角、幅、高さ、中央寄せ、余白、カーソルをポインターに設定）
    const cardStyle = {
        border: "1px solid #ccc",
        borderRadius: "8px",
        width: "150px",
        padding: "16px",
        textAlign: "center",
        margin: "8px",
        cursor: "pointer",
    };

    return (
        // カード全体がクリック可能で、クリック時にonRemove関数にidを渡して実行
        <div style={cardStyle} onClick={() => onRemove(id)}>
            {/* カードタイトルを表示 */}
            <h3>{title}</h3>
        </div>
    );
};
