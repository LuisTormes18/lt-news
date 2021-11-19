import React from "react";
import styles from "../../styles/Layout.module.css";

const Header = () => {
    
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <h1>LT<span>News</span></h1>
            </div>
            <form className={styles.search_bar}>
                <input type='text' />
                <button>Q</button>
            </form>
        </header>
    );
};

export default Header;
