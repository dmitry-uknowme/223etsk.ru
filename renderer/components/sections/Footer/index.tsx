import React from "react";
import Logo from "../../ui/Logo";
import Contacts from "./Contacts";
import styles from "./index.module.sass";
import Navbar from "./Navbar";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 col-sm-6">
            <div className="footer__data">
              <Contacts />
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            <Navbar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
