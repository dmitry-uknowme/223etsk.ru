import React from "react";
import styles from "./index.module.sass";
import StartCard from "./StartCard";
import ArrowLeftIcon from "../../../assets/icons/arrow_left.svg";
import ArrowRightIcon from "../../../assets/icons/arrow_right.svg";

const HomeStart = () => {
    return (
        <div className={`home__start`}>
            <div
                className="container"
                style={{
                    padding: "3rem 0",
                    paddingBottom: "5rem",
                    marginTop: "5rem",
                }}
            >
                <h3 className={styles.start__title}>С чего начать</h3>
                <div className="mt-4">
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <StartCard
                                title="Поставщикам"
                                desc="Хотите участвовать в закупках или торгах? Объясним и поможем!"
                                btnPrimaryText="Стать поставщиком"
                                btnPrimaryLink="/suppliers"
                            />
                        </div>
                        <div className="col-md-2 offset-md-1">
                            <div className="d-flex justify-content-between">
                                <img src={ArrowLeftIcon} />
                                <img src={ArrowRightIcon} />
                            </div>
                        </div>
                        <div className="col-md-4 offset-md-1">
                            <StartCard
                                title="Заказчикам"
                                desc="Оптимизируйте закупочную деятельность с помощью ЭТП Новорос Торги"
                                btnPrimaryText="Стать заказчиком"
                                btnPrimaryLink="/customers"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HomeStart;
