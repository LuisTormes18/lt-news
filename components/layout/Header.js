import { useState } from "react";
import { useRouter } from "next/router";

import NavbarCategories from './NavbarCategories';
import styles from "../../styles/Layout.module.css";
import imgSearch from "../../public/q.png";

const Header = () => {
    const router = useRouter();
    const [search, setSearch] = useState('');
    const handleInputChange = ({target}) => {
        setSearch(target.value);
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        if(search.trim() === ''){


            return;
        }
        
        router.push(`/search/${search}`);

    }
    return (

        <header className={styles.header}>
            <div>
            <div className={styles.logo}>
                <h1>LT<span>News</span></h1>
            </div>
            <form onSubmit={handleSubmit} className={styles.search_bar}>
                <input type='text' value={search} onChange={handleInputChange} />
                <button type='submit'></button>
            </form>
            </div>

            <NavbarCategories />
            
        </header>
    );
};

export default Header;
