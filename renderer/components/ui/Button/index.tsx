import React from "react";
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
  variant?: ButtonVariants | ButtonVariants.PRIMARY;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  label,
  variant,
  onClick,
  className,
  children,
}) => {
  return (
    <button className={`btn btn-${variant} ${className}`} onClick={onClick}>
      {label} {children}
    </button>
  );
};

export default Button;
