// カードコンポーネントをインポート（現在コメントアウト中）
import { Card } from "./components/Card";

// ReactのuseStateフックをインポート
// import { useState } from "react";

// Appコンポーネントをエクスポート
export const App = () => {

    // stateの初期化（現在コメントアウト中）
    // const [elements, setElements] = useState([{ com: "Yoshida", dep: "jobi", name: "sasaki" }]);
    const onClickVisible = (element) =>{
        console.log(element.target);
    }

    return (
        <div>
            {/* elements配列内の各要素をmapで処理（現在コメントアウト中） */}
            {/* {
                elements.map((e, i) => {
                    // Cardコンポーネントにpropsとしてmeishiを渡す
                    <Card meishi={e}></Card>
                })
            } */}
            {/* <div onClick={onClickVisible} key="123">推してみて</div> */}
            <Card onClick={onClickVisible} key="124"></Card>
        </div>
    )
}
