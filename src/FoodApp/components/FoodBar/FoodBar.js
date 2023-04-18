import React from "react";
import styles from "./FoodBar.module.css"
import CartButton from "../CartButton/CartButton";

const FoodBar = () => {

    return (
        <>
            <div className={styles.navbarTitle}>Burger App</div>
            <CartButton/>
        </>
    )
}


export default FoodBar;