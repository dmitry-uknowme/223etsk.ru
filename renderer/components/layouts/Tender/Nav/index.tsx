import React from "react";
import { Link } from "../../../../Link";
import Button, { ButtonVariants } from "../../../ui/Button";
import styles from "./index.module.sass";

const TenderNav = ({ link }) => {
  return (
    <div className={styles.nav}>
      <h4 className="nav__title text-center mb-0">Навигация</h4>
      <div className={`${styles.nav__menu} mt-1`}>
        <li className={styles.nav__item}>Сведения о закупке</li>
        <li className={styles.nav__item}>Сведения об организаторе</li>
        <li className={styles.nav__item}>Временные этапы</li>
      </div>
      <div className="mt-5 d-flex justify-content-center">
        <Link href={link}>
          <Button label="Подать заявку" variant={ButtonVariants.SECONDARY} />
        </Link>
      </div>
    </div>
  );
};
export default TenderNav;
