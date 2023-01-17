import React from "react";
import Logo from "../../ui/Logo";
import Contacts from "./Contacts";
import styles from "./index.module.sass";
import Navbar from "./Navbar";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="footer__data">
              <Contacts />
              <Navbar />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
