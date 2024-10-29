// Companyコンポーネントをエクスポート
export const Company = () => {
    // スタイルオブジェクトを定義（境界線は薄いグレーの1pxの実線）
    const companyStyle = {
        border: "solid 1px #999",
    };

    return(
        // スタイルを適用し、会社名（props.com）を表示（propsが未定義、"yoshida"と表示される）
        <div style={companyStyle}>{props.com}yoshida</div>
    );
};

// Departmentコンポーネントをエクスポート
export const Department = () => {
    // スタイルオブジェクトを定義（境界線は薄いグレーの1pxの実線）
    const departmentStyle = {
        border: "solid 1px #999",
    };

    return(
        // スタイルを適用し、部署名（engineer）を表示
        <div style={departmentStyle}>engineer</div>
    );
};

// Nameコンポーネントをエクスポート（現在コメントアウト中）
// export const Name = () => {
//     // スタイルオブジェクトを定義（境界線は薄いグレーの1pxの実線）
//     const NameStyle = {
//         border: "solid 1px #999",
//     };

//     // スタイルを適用し、名前（sasaki hiroyuki）を表示
//     return(
//         <div style={NameStyle}>sasaki hiroyuki</div>
//     );
// };
