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
          <div className="col-md-5">
            <div className={styles.footer__mapContainer}>
              {/* <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A832d71fe54349f4b5540e02fdc917fef8e76b4d363c660fa162aad6bfb4ed964&amp;source=constructor" width="500" height="400" frameborder="0"></iframe> */}
              <iframe
                className={styles.footer__map}
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A832d71fe54349f4b5540e02fdc917fef8e76b4d363c660fa162aad6bfb4ed964&amp;source=constructor"
                width="100%"
                height="100%"
                frameBorder="0"
              ></iframe>
              <div className={styles.footer__mapBorder}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
