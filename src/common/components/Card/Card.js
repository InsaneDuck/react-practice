import React from "react";
import style from "./Card.module.css"

const Card = ({children, className, id, onClick}) => {

    return (
        <div
            className={className? `${style.card} ${className}`:`${style.card}`}
            onClick={onClick}
            key={id}
        >
            {children}
        </div>
    )
}

export default Card;