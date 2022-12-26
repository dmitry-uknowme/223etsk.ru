import React from "react";
import Logo from "../../../ui/Logo";
import styles from "./index.module.sass";

const FooterNavbar = () => {
  return (
    <div className={styles.navbar}>
      <div className="row">
        <div className="col-md-3">
          <Logo />
        </div>
        <div className="col-md-9">
          <div className={`${styles.navbar__menu} row`}>
            <div className="col-md-4 offset-md-2">
              <a className={styles.navbar__item} href="/tenders">
                Закупки
              </a>
            </div>
            <div className="col-md-4">
              <a className={styles.navbar__item} href="/news">
                Тарифы
              </a>
            </div>
            {/* <div className="col-md-4">
                            <a className={styles.navbar__item} href="/users">
                                Клиентам
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a className={styles.navbar__item} href="/services">
                                Услуги и сервисы
                            </a>
                        </div> */}
          </div>
          <div className={`${styles.navbar__menu} row`}>
            {/* <div className="col-md-4">
              <a className={styles.navbar__item} href="/news">
                Новости
              </a>
            </div> */}
            {/* <div className="col-md-4 offset-md-2">
              <a className={styles.navbar__item} href="/about">
                О площадке
              </a>
            </div> */}
            <div className="col-md-4 offset-md-2">
              <a className={styles.navbar__item} href="/support">
                Помощь
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterNavbar;
