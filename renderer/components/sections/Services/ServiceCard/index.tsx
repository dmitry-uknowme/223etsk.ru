import React from "react";
import Button, { ButtonVariants } from "../../../ui/Button";
import styles from "./index.module.sass";

export interface IServiceItem {
    title: string;
    btnText: string;
    btnOnClick: () => any;
}

interface SectionCardProps {
    service: IServiceItem;
}

const ServiceCard: React.FC<SectionCardProps> = ({ service }) => {
    const { title, btnText, btnOnClick } = service;
    return (
        <div className={styles.card}>
            <h4 className={styles.card__title}>{title}</h4>
            <div className="row">
                <div className="col-md-12">
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
export default ServiceCard;
