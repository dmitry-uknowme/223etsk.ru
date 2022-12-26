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
              {/* <Contacts /> */}
              <Navbar />
            </div>
          </div>
          {/* <div className="col-md-5">
            <div className={styles.footer__mapContainer}>
              <iframe
                className={styles.footer__map}
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa594e472453180d8414bc754b149fba2fdf8bb600d821d8b3f20a5e0ea839f76&amp;source=constructor"
                width="100%"
                height="100%"
                frameBorder="0"
              ></iframe>
              <div className={styles.footer__mapBorder}></div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
