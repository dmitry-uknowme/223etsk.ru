import React from "react";
import styles from "./index.module.sass";

interface CardProps {
  className?: string;
  style?: any;
}

const Card: React.FC<CardProps> = ({ children, className, style }) => {
  return <div className={`card ${styles.card} ${className}`} style={{ height: '100%', ...style }} > {children}</div >;
};

const CardHeader: React.FC<CardProps> = ({ children, className, style }) => {
  return (
    <div
      className={`card-header ${styles.card__header} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

const CardBody: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`card-body ${styles.card__body} ${className}`}>
      {children}
    </div>
  );
};
const CardFooter: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`card-footer ${styles.card__footer} ${className}`}>
      {children}
    </div>
  );
};

export default Object.assign(Card, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
});
