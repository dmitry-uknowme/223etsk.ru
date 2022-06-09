import React from "react";
import Button, { ButtonVariants } from "../../ui/Button";
import styles from "./index.module.sass";

const Slider = () => {
    return (
        <section className={styles.slider}>
            <div className={styles.slider__intro}>
                <h1 className="slider__title">
                    Площадка для <br />
                    проведения <br />
                    эффективных закупок
                </h1>
                <p className={`${styles.slider__desc} mt-3`}>
                    Задача организации, в особенности же постоянный
                    количественный рост и сфера нашей активности требуют от нас
                    анализа новых предложений.
                </p>
                <div className="slider__search mt-5">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <input
                                className={styles.slider__searchInput}
                                placeholder="Введите название закупки"
                            />
                        </div>
                        <div className="col-md-2 offset-md-1">
                            <Button
                                label="Найти"
                                variant={ButtonVariants.PRIMARY}
                                className={styles.slider__searchBtn}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Slider;
