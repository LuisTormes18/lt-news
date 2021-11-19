import React from "react";
import Image from "next/image";
import styles from "../../styles/Layout.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.logo}>
                <h1>LT<span>News</span></h1>
            </div>
                
                <span className={styles.licence}>
                    Luis Tormes | &copy Todos los derechos reservados
                </span>
        </footer>
    );
};

export default Footer;
