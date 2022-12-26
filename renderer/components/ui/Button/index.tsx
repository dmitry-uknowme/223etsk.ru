import React from "react";
import { Link } from "../../../Link";
// import styles from "./index.sass";

export enum ButtonVariants {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  PRIMARY_OUTLINE = "primary-outline",
  SECONDARY_OUTLINE = "secondary-outline",
}

interface ButtonProps {
  label: string;
  className?: string;
  style?: React.CSSProperties;
  variant?: ButtonVariants | ButtonVariants.PRIMARY;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  link?: string
}

const Button: React.FC<ButtonProps> = ({
  label,
  variant,
  onClick,
  className,
  children,
  style,
  link
}) => {
  return (
    <>
      {link ? (<Link href={link}>
        <button
          className={`btn btn-${variant} ${className}`}
          style={style}
          onClick={onClick}
        >
          {label} {children}
        </button>
      </Link>) : <button
        className={`btn btn-${variant} ${className}`}
        style={style}
        onClick={onClick}
      >
        {label} {children}
      </button>
      }
    </>
  );
};

export default Button;
