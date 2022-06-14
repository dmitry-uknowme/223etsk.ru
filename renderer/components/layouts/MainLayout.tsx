import React from "react";
import Header from "../sections/Header";

const MainLayout: React.FC = ({ children }) => {
    return (
        <div className="app main-layout">
            <Header />
            <main className="app__content">{children}</main>
            <Header />
        </div>
    );
};

export default MainLayout;
