import React from "react";
import Navbar, { INavbarItem } from "../../Navbar";
import styles from "./index.module.sass";

const items: INavbarItem[] = [
  { id: 0, label: "Закупки", link: "/tenders" },
  // { id: 1, label: "Клиентам", link: "/users" },
  // { id: 2, label: "Услуги и сервисы", link: "/services" },
  { id: 1, label: "Тарифы", link: "/pricelist" },
  { id: 2, label: "Помощь", link: "/support" },
  { id: 5, label: "О площадке", link: "/about" },
];

const HeaderNavbar = () => {
  return (
    <div className="header__navbar">
      <Navbar items={items} />
    </div>
  );
};

export default HeaderNavbar;
