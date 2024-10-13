export const ColorMessage = (props) => {
    const contentStyle = {
        color: "blue",
        fontSize: "20px"
    };
    const contentPinkStyle = {
        color: "pink",
        fontSize: "20px"
    };
    return <p style={contentStyle}>お元気ですか？</p>;
    // return <p style={contentStyle}>{props.message}</p>;
}