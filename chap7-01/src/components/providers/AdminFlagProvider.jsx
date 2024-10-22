import { createContext, useState } from "react";

export const AdminFlagContext = createContext({});

export const AdminFlagProvider = (props) => {
  const { children } = props;

  const sampleObj = { sampleValue: "テスト" };

  // ContextオブジェクトとしてisAdminとsetIsAdminを設定(オブジェクトの省略記法)
  return (
    <AdminFlagContext.Provider value={sampleObj}>
      {children}
    </AdminFlagContext.Provider>
  );
};
