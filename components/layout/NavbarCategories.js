import Link from "next/link";
import { useContext } from "react";

import { context } from "../../context/AppProvider";
import styles from "../../styles/Layout.module.css";

const NavbarCategories = () => {
    const { setCategory } = useContext(context);

   return (
        <nav className={styles.navbar_categories}>
             <button
                onClick={() => {
                    setCategory('general');
                }}
            >
                General
            </button>
             <button
                onClick={() => {
                    setCategory('business');
                   
                   
                }}
            >
                Business
            </button>
             <button
                onClick={() => {
                    setCategory("entertainment");
                }}
            >
                Entertainment
            </button>
             <button
                onClick={() => {
                    setCategory("sports");
                }}
            >
                Sports
            </button>
            <button
                onClick={() => {
                    setCategory("science");
                }}
            >
                Science
            </button>
            <button
                onClick={() => {
                    setCategory("technology");
                }}
            >
                Technology
            </button>
                <button
                onClick={() => {
                    setCategory("food");
                }}
            >
                Food
            </button>
            <button
                onClick={() => {
                    setCategory("health");
                }}
            >
                Health
            </button>
        </nav>
    );
};

export default NavbarCategories;
