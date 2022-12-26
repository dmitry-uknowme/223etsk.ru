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
      return (<div style={{ textAlign: "center", lineHeight: "1.1rem", maxWidth: "100px", fontFamily: "Montserrat" }}>
        <b style={{ color: '#FF3838' }}>НОВОРОС</b>
        <br />
        {/* <div style={{ width: "100 %", display: "block", background: "blue", height: "1px", margin: "0.3rem 0" }}></div> */}
        <span style={{ color: "#3BB1E3", fontSize: "1.2rem" }}>ТОРГИ</span>
      </div>
        // <img className={className} src={LogoFullIcon} style={style} alt={alt} />
      );
  }
};

export default Logo;
