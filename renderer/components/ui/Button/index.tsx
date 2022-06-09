import React from "react";
// import styles from "./index.sass";

export enum ButtonVariants {
  PRIMARY = "primary",
  SECONDARY = "secondary",
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
}) => {
  return (
    <button className={`btn btn-${variant} ${className}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
