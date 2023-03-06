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
        <div className="row align-items-center justify-content-space-between">
          <div className="col-md-2 col-sm-3 col-3">
            <Link href="/">
              <Logo />
            </Link>
          </div>
          <div className="col-md-2 col-sm-6 col-6 offset-md-1 d-block d-sm-block d-md-none">
            <Support />
          </div>
          <div className="col-md-5">
            <Navbar />
          </div>
          <div className="col-md-2 offset-md-1 d-none d-sm-none d-md-block">
            <Support />
          </div>
          <div className="col-md-2 d-none d-sm-none d-md-block">
            <Button
              label="Вход"
              link="https://lk.novorostorgi.ru/"
              variant={ButtonVariants.SECONDARY}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
