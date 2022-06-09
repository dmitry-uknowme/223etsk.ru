import React from "react";
import Header from "../sections/Header";

const MainLayout: React.FC = ({ children }) => {
  return (
    <div className="app main-layout">
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
