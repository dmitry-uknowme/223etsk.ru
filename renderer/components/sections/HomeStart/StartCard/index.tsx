import React from "react";
import { Link } from "../../../../Link";
import Button, { ButtonVariants } from "../../../ui/Button";
import styles from "./index.module.sass";

interface IStartCard {
    title: string;
    desc: string;
    btnPrimaryText: string;
    btnPrimaryLink: string;
    btnSecondaryLink?: string;
}

interface StartCardProps {
    card: IStartCard;
}

const StartCard: React.FC<IStartCard> = ({
    title,
    desc,
    btnPrimaryText,
    btnPrimaryLink,
    btnSecondaryLink,
}) => {
    return (
        <div className={styles.card}>
            <h5 className={styles.card__title}>{title}</h5>
            <p className={styles.card__desc}>{desc}</p>
            <div className="card__actions">
                <div className="align-items-center justify-content-between d-none d-sm-flex d-md-flex">
                    <Link href="/pricelist">
                        <Button
                            label="Показать тарифы"
                            variant={ButtonVariants.SECONDARY}
                            className={styles.card__btn}
                        />
                    </Link>
                </div>
                <div className="align-items-center justify-content-center d-flex d-sm-none d-md-none mt-sm-4 mt-4">
                    <Link href="/pricelist">
                        <Button
                            label="Показать тарифы"
                            variant={ButtonVariants.SECONDARY}
                            className={styles.card__btn}
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default StartCard;
