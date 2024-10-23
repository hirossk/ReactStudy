import { ColoredButton } from "./components/ColoredButton";
import { Child1 } from "./components/Child1";
import { Child4 } from "./components/Child4";

export const App = () => {
    console.log("App2レンダリング");

    return (
        <>
            <ColoredButton color="red" message="推してください"></ColoredButton>
            <Child1 />
            <Child4 />
        </>
    );
};