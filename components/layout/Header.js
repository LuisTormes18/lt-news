import React from "react";
import { useState, useContext } from "react";

import { context } from "./../../context/AppProvider";
import NavbarCategories from './NavbarCategories';

import styles from "../../styles/Layout.module.css";

const Header = () => {
    const [search, setSearch] = useState('');
    const {category, setCategory} = useContext(context);    

    const handleInputChange = ({target}) => {

        setSearch(target.value);

    }

    const handleSubmit = (e) => {

        e.preventDefault();
        setCategory(search);
        setSearch('');
    }
    return (

        <header className={styles.header}>
            <div>
            <div className={styles.logo}>
                <h1>LT<span>News</span></h1>
            </div>
            <form onSubmit={handleSubmit} className={styles.search_bar}>
                <input type='text' value={search} onChange={handleInputChange} />
                <button type='submit'>Q</button>
            </form>
            </div>

            <NavbarCategories />
            
        </header>
    );
};

export default Header;
