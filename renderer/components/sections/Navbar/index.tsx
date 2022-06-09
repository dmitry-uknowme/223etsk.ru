import React from "react";
import styles from "./index.module.sass";

export interface INavbarItem {
    label: string;
    link: string;
}

interface NavbarProps {
    items: INavbarItem[];
}

const Navbar: React.FC<NavbarProps> = ({ items }) => {
    return (
        <nav className={`navbar ${styles.navbar}`}>
            {items.map(({ label, link }) => (
                <a className={styles.navbar__item} href={link}>
                    {label}
                </a>
            ))}
        </nav>
    );
};

export default Navbar;
