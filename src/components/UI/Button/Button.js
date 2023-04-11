import React from "react";
import style from "./Button.module.css"

const Button = ({type, children}) => {
    return (
        <button className={style.buttonRounded} type={type}>{children}</button>
    )
}

export default Button;