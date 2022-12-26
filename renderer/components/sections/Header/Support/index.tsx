import React from "react";
import PhoneIcon from "../../../../assets/icons/phone.svg";
import styles from "./index.module.sass";

const HeaderSupport = () => {
    return (
        <div className="support">
            <div className="row align-items-center">
                <div className="col-md-2">
                    <img className={styles.support__icon} src={PhoneIcon} />
                </div>
                <div className="col-md-10">
                    <div className="row">
                        <div className="col-md-12">
                            <div className={styles.support__text}>
                                Тех. поддержка
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className={styles.support__phone}>
                                8-800-350-65-79
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderSupport;
