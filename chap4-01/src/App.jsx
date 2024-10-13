import { Fragment } from "react";
export const App = () => {
    // const onClickButton = () => {
    //     alert("ボタンの反応");
    // };
    // const contentStyle = {
    //     color: "blue",
    //     fontSize: "20px"
    // };
    return (
        <Fragment>
            {/* JavaScriptが記述可能 */}
            {console.log("TEST")}
            <h1>こんにちは</h1>
            <p>お元気ですか？</p>
            {/* <p style={contentStyle}>お元気ですか？</p> */}
            {/* <button>ボタン</button> */}
            {/* <button onClick={onClickButton}>ボタン</button> */}
        </Fragment>
    );
}