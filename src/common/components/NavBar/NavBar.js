import React from "react";
import styles from "./NavBar.module.css"
const NavBar = ({children}) => {
    return (
        <>
            <nav className={styles.navbar}>
                {children}
            </nav>
        </>
    )
}

export default NavBar;