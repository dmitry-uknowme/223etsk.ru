import React from "react";
import { Checkbox } from "antd";
import "antd/dist/antd.min.css";
import styles from "./index.module.sass";

const TendersFilter = () => {
    return (
        <div className={styles.filter}>
            <div className="container">
                <h4 className={styles.filter__title}>Фильтры</h4>
                <div className="filter__criteries mt-4">
                    <div className={styles.filter__criterie}>
                        <h5 className={styles.filter__criterieLabel}>
                            Секции размещения:
                        </h5>
                        <div className={styles.filter__criterieVariants}>
                            <Checkbox.Group
                                options={[
                                    {
                                        label: "Коммерческие закупки",
                                        value: "da",
                                    },
                                    {
                                        label: "Закупки по 223-ФЗ",
                                        value: "da",
                                    },
                                    {
                                        label: "ЭТСК-маркет",
                                        value: "da",
                                    },
                                ]}
                                defaultValue={["Apple"]}
                            />
                        </div>
                    </div>
                    <div className={styles.filter__criterie}>
                        <h5 className={styles.filter__criterieLabel}>
                            Способы проведения:
                        </h5>
                        <div className={styles.filter__criterieVariants}>
                            <Checkbox.Group
                                options={[
                                    {
                                        label: "Аукцион",
                                        value: "da",
                                    },
                                    {
                                        label: "Конкурс",
                                        value: "da",
                                    },
                                    {
                                        label: "Запрос котировок",
                                        value: "da",
                                    },

                                    {
                                        label: "Запрос предложений",
                                        value: "da",
                                    },
                                    {
                                        label: "Предложение делать оферты",
                                        value: "da",
                                    },
                                    {
                                        label: "Конкурентный отбор",
                                        value: "da",
                                    },
                                ]}
                                defaultValue={["Apple"]}
                            />
                        </div>
                    </div>
                    <div className={styles.filter__criterie}>
                        <h5 className={styles.filter__criterieLabel}>
                            Статусы:
                        </h5>
                        <div className={styles.filter__criterieVariants}>
                            {/* <div className="d-flex align-items-center">
                                <Checkbox
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                    className="da"
                                >
                                    <div
                                        style={{
                                            width: "7px",
                                            height: "7px",
                                            borderRadius: "50%",
                                            background: "var(--bs-success)",
                                        }}
                                    ></div>
                                    Прием заявок
                                </Checkbox>
                            </div>
                            <div className="d-flex align-items-center">
                                <Checkbox>Рассмотрение заявок</Checkbox>
                                &nbsp;&nbsp;
                                <div
                                    style={{
                                        width: "7px",
                                        height: "7px",
                                        borderRadius: "50%",
                                        background: "var(--bs-success)",
                                    }}
                                ></div>
                            </div> */}

                            <Checkbox.Group
                                options={[
                                    {
                                        label: "Прием заявок",
                                        value: "da",
                                    },
                                    {
                                        label: "Рассмотрение заявок",
                                        value: "da",
                                    },
                                    {
                                        label: "Подведение итогов",
                                        value: "da",
                                    },

                                    {
                                        label: "Закупка завершена",
                                        value: "da",
                                    },
                                    {
                                        label: "Закупка отменена",
                                        value: "da",
                                    },
                                ]}
                                defaultValue={["Apple"]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TendersFilter;
