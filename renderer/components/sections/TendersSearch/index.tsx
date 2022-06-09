import React from "react";
import Button, { ButtonVariants } from "../../ui/Button";
import styles from "./index.module.sass";

const TendersSearch = () => {
    return (
        <div className="search mt-5">
            <div className="row">
                <div className="col-md-9">
                    <input className={`${styles.search__input}`} />
                </div>
                <div className="col-md-2 offset-md-1">
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
