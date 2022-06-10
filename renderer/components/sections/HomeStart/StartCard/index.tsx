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
                <div className="d-flex align-items-center justify-content-between">
                    {/* <Link href={btnPrimaryLink}> */}
                    <Button
                        label={btnPrimaryText}
                        variant={ButtonVariants.SECONDARY}
                        className={styles.card__btn}
                    />
                    {/* </Link> */}
                    {/* <Link href={btnSecondaryLink}> */}
                    <Button
                        label="Посмотреть тарифы"
                        variant={ButtonVariants.SECONDARY_OUTLINE}
                        className={styles.card__btn}
                    />
                    {/* </Link> */}
                </div>
            </div>
        </div>
    );
};

export default StartCard;
