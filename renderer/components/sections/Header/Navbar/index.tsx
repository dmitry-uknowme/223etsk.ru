import React from "react";
import Navbar, { INavbarItem } from "../../Navbar";
import styles from "./index.module.sass";

const items: INavbarItem[] = [
    { label: "Закупки", link: "/tenders" },
    { label: "Услуги и сервисы", link: "/services" },
    { label: "Тарифы", link: "/pricelist" },
    { label: "Помощь", link: "/support" },
    { label: "О площадке", link: "/about" },
];

const HeaderNavbar = () => {
    return (
        <div className="header__navbar">
            <Navbar items={items} />
        </div>
    );
};

export default HeaderNavbar;
