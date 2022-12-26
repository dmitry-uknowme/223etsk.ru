import React from "react";
import styles from "./index.module.sass";

const FooterContacts = () => {
    return (
        <div className="contacts">
            <h3 className={styles.contacts__title}>Контакты</h3>
            <div className="row mt-5">
                <div className="col-md-4">
                    <div className={styles.contacts__email}>
                        novorostorgi@yandex.ru
                    </div>
                </div>
                <div className="col-md-4">
                    <div className={styles.contacts__email}> 8-800-350-65-79</div>
                </div>
            </div>
            <div className="row mt-2">
                {/* <div className="col-md-4">
                    <div className={styles.contacts__phone}>
                        8-800-350-65-79
                    </div>
                </div> */}
                <div className="col-md-12">
                    <div className={styles.contacts__address}>
                        {/* 450062, г.Уфа, ул. Мира, 54 */}
                        450018, г. Уфа, ул. Кооперативная, д. 67
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterContacts;
