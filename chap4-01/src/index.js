import ReactDOM from "react-dom/client";
// import {Fragment} from "react";
import { App } from "./App";

// const App = () => {
// return null;
// return <h1>こんにちは</h1>;
//     return (
//         <h1>こんにちは</h1>
//         <p>お元気ですか？</p>
// );
//      // 一つの要素をreturnさせる必要がある。
//     return (
//         <div>
//         <h1>こんにちは</h1>
//         <p>お元気ですか？</p>
//         </div>
// );
//      // 不要なDOMを生成させないようにしたい。
//     return (
//         <Fragment>
//         <h1>こんにちは</h1>
//         <p>お元気ですか？</p>
//         </Fragment>
// );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)