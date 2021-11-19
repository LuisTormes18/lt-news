import React from "react";
import Header from "./Header";
import Footer from './Footer';
import NavbarCategories from './NavbarCategories';

import styles from '../../styles/Layout.module.css';

const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <Header />
            <NavbarCategories />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
