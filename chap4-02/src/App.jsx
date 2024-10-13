import { Fragment } from "react";
import { ColorMessage } from "./components/ColorMessage";

export const App = () => {
    // const onClickButton = () => {
    //     alert("ボタンの反応");
    // };
    // const contentStyle = {
    //     color: "blue",
    //     fontSize: "20px"
    // };
    // const contentPinkStyle = {
    //     color: "pink",
    //     fontSize: "20px"
    // };
    return (
        <Fragment>
            {/* JavaScriptが記述可能 */}
            {console.log("TEST")}
            <h1>こんにちは</h1>
            <p>お元気ですか？</p>
            <ColorMessage />
            {/* <ColorMessage color="green" message="いい日ですか？" /> */}
            {/* <p style={contentStyle}>お元気ですか？</p> */}
            {/* <p style={contentPinkStyle}>元気です！</p> */}
            {/* <button>ボタン</button> */}
            {/* <button onClick={onClickButton}>ボタン</button> */}
        </Fragment>
    );
}