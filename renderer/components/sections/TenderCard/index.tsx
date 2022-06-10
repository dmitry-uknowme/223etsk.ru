import React from "react";
import Button, { ButtonVariants } from "../../ui/Button";
import styles from "./index.module.sass";
import ArrowIcon from "../../../assets/icons/arrow_right.svg";

const TenderCard = () => {
    return (
        <div className={styles.card}>
            <div className="row">
                <div className="col-md-3">
                    <div className={styles.card__number}>№ 894721</div>
                </div>
                <div className="col-md-3">
                    <div className={`${styles.card__status}`}>
                        <span></span>&nbsp;&nbsp;Подведение итогов
                    </div>
                </div>
                <div className="col-md-3">
                    <div className={styles.card__section}>
                        #Закупки по 223-ФЗ
                    </div>
                </div>
                <div className="col-md-3">
                    <div className={styles.card__method}>
                        #Конкурентный отбор
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-7">
                    <div className={styles.card__field}>
                        <div className="row">
                            <div className="col-md-4">
                                <div
                                    className={`${styles.card__fieldKey} text-muted`}
                                >
                                    Наименование:
                                </div>
                                &nbsp;
                            </div>
                            <div className="col-md-8">
                                <div className={styles.card__fieldValue}>
                                    Поставка продукции для технологического
                                    процесса (смазочные материалы)
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card__field}>
                        <div className="row">
                            <div className="col-md-4">
                                <div
                                    className={`${styles.card__fieldKey} text-muted`}
                                >
                                    Организатор:
                                </div>
                                &nbsp;
                            </div>
                            <div className="col-md-8">
                                <div className={styles.card__fieldValue}>
                                    АО "Башкирская Содовая Компания"
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card__field}>
                        <div className="row">
                            <div className="col-md-4">
                                <div
                                    className={`${styles.card__fieldKey} text-muted`}
                                >
                                    Заказчик:
                                </div>
                                &nbsp;
                            </div>
                            <div className="col-md-8">
                                <div className={styles.card__fieldValue}>
                                    ООО "Башхимтранс"
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <div
                        className={`${styles.card__field} ${styles.card__price}`}
                    >
                        <div className="row">
                            <div className="col-md-5">
                                <div
                                    className={`${styles.card__fieldKey} text-muted`}
                                >
                                    НМЦ закупки:
                                </div>
                                &nbsp;
                            </div>
                            <div className="col-md-7">
                                <div className={styles.card__fieldValue}>
                                    22 142 444,20 ₽
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`${styles.card__field} ${styles.card__date}`}
                    >
                        <div className="row">
                            <div className="col-md-7">
                                <div
                                    className={`${styles.card__fieldKey} text-muted`}
                                >
                                    Окончание приема заявок:
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className={styles.card__fieldValue}>
                                    20.06.2022 16:30
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end">
                        <Button
                            label="Перейти к закупке"
                            variant={ButtonVariants.PRIMARY}
                            className={styles.card__btn}
                            children={
                                <>
                                    &nbsp;
                                    <img
                                        src={ArrowIcon}
                                        style={{ width: "30px" }}
                                    />
                                </>
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TenderCard;
