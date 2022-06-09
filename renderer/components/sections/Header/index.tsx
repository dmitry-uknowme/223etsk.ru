import React from "react";
import Button, { ButtonVariants } from "../../ui/Button";
import Logo from "../../ui/Logo";
import Navbar from "./Navbar";
import styles from "./index.module.sass";
import Support from "./Support";
import { Link } from "../../../Link";

const Header = () => {
    return (
        <div className={`header ${styles.header}`}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-2">
                        <Link href="/">
                            <Logo />
                        </Link>
                    </div>
                    <div className="col-md-5">
                        <Navbar />
                    </div>
                    <div className="col-md-2 offset-md-1">
                        <Support />
                    </div>
                    <div className="col-md-2">
                        <Button
                            label="Вход"
                            variant={ButtonVariants.SECONDARY}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
