import React from "react";
import LogoFullIcon from "../../../logo.png";

enum LogoVariants {
  FULL = "full",
}

interface LogoProps {
  variant?: LogoVariants | LogoVariants.FULL;
  alt?: string;
  style?: React.CSSProperties | {};
  className?: string | "";
}

const Logo: React.FC<LogoProps> = ({ variant, className, style, alt }) => {
  switch (variant) {
    default:
      return (
        <img className={className} src={LogoFullIcon} style={style} alt={alt} />
      );
  }
};

export default Logo;
