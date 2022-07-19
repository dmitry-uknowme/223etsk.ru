import React from "react";
import Footer from "../sections/Footer";
import Header from "../sections/Header";

const MainLayout: React.FC = ({ children }) => {
  return (
    <div className="app main-layout">
      <Header />
      <main className="app__content">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
