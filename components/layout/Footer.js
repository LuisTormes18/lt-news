import React from "react";
import Image from "next/image";
import styles from "../../styles/Layout.module.css";


const Footer = () => {
    const date = new Date();

    return (
        <footer className={styles.footer}>
            <hr />
            <div className={styles.logo}>
                <h1>
                    LT<span>News</span>
                </h1>
            </div>

            <span className={styles.licence}>
                © Luis Tormes - {date.getFullYear()} | All rights reserved
            </span>
        </footer>
    );
};

export default Footer;
// <NavbarCategories theme='light' />
