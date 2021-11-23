import React from "react";
import Image from "next/image";
import styles from "../../styles/Layout.module.css";

import NavbarCategories from './NavbarCategories';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.logo}>
                <h1>LT<span>News</span></h1>
            </div>
                
                <span className={styles.licence}>
                     &copy Luis Tormes | Todos los derechos reservados
                </span>
        </footer>
    );
};

export default Footer;
                // <NavbarCategories theme='light' />
