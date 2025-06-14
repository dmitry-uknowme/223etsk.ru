import React from "react";
import Button, { ButtonVariants } from "../../ui/Button";
import styles from "./index.module.sass";

const TendersSearch = () => {
  return (
    <div className="search">
      <div className="row">
        <div className="col-md-9">
          <input
            className={`${styles.search__input}`}
            placeholder="Введите название закупки"
          />
        </div>
        <div className="col-md-2">
          <Button
            variant={ButtonVariants.PRIMARY}
            label="Найти"
            className={styles.search__btn}
          />
        </div>
      </div>
    </div>
  );
};
export default TendersSearch;
