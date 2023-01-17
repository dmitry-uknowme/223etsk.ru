import React from "react";
import Logo from "../../../ui/Logo";
import styles from "./index.module.sass";

const FooterNavbar = () => {
  return (
    <div className={styles.navbar}>
      <div className="row">

        <div className="col-md-8 col-8">
          <div className={`${styles.navbar__menu} row align-items-center`}>
            <div className="col-md-4 col-6 offset-0 offset-md-2">
              <a className={styles.navbar__item} href="/tenders">
                Закупки
              </a>
            </div>
            <div className="col-md-4 col-6">
              <a className={styles.navbar__item} href="/pricelist">
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
            <div className="col-md-4 col-6 offset-0 offset-md-2">
              <a className={styles.navbar__item} href="/about">
                О площадке
              </a>
            </div>
            <div className="col-md-4 col-6">
              <a className={styles.navbar__item} href="/support">
                Помощь
              </a>
            </div>
          </div>
        </div> <div className="col-md-4 col-4">
          <Logo />
        </div>
      </div>
    </div>
  );
};

export default FooterNavbar;
