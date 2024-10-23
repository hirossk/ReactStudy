export const ColoredButton = (props) => {
    console.log("ColoredButton レンダリング ");
    const { color, message } = props; 
    const buttonStyle = {
        color: color,
    }
    return (
      <button style={buttonStyle}>{message}</button>
    );
  };