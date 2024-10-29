// PersonファイルからCompany、Department、Nameコンポーネントをインポート（現在コメントアウト中）
// import { Company, Department, Name } from "./Person";

// Cardコンポーネントをエクスポートし、propsを受け取る
export const Card = (props) => {

    // スタイルオブジェクトの定義（背景色、水色、幅300px、高さ200px、境界線はグレーの1pxの実線）
    const style = {
        backgroundColor: "#ddf",
        width: "300px",
        height: "200px",
        border: "solid 1px #666",
    };

    return (
        <div style={style}>
            {/* Company、Department、Nameコンポーネントを配置（現在コメントアウト中） */}
            {/* <Company ></Company>
            <Department ></Department>
            <Name ></Name> */}
        </div>
    )
}
