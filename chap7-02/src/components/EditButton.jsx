import { useContext } from "react";

// import { AdminFlagContext } from "./providers/AdminFlagProvider";

const style = {
  width: "100px",
  padding: "6px",
  borderRadius: "8px",
};

export const EditButton = () => {
  // Context内のisAdminを取得

  return (
    <button style={style}>
      編集
    </button>
  );
};
