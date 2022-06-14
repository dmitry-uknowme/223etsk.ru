import React from "react";
import Button, { ButtonVariants } from "../../../ui/Button";
import styles from "./index.module.sass";

export interface ISectionItem {
    title: string;
    desc: string;
    btnText: string;
    link?: string;
    btnOnClick: () => any;
}

interface SectionCardProps {
    section: ISectionItem;
}

const SectionCard: React.FC<SectionCardProps> = ({ section }) => {
    const { title, desc, btnText, btnOnClick } = section;
    return (
        <div className={styles.card}>
            <h4 className={styles.card__title}>{title}</h4>
            <div className={styles.card__divider}></div>
            <p className={styles.card__desc}>{desc}</p>
            <div className="row">
                <div className="col-md-6">
                    <Button
                        variant={ButtonVariants.PRIMARY}
                        label={btnText}
                        className={styles.card__btn}
                    />
                </div>
            </div>
        </div>
    );
};
export default SectionCard;
