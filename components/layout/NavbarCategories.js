import Link from "next/link";
import styles from "../../styles/Layout.module.css";

const NavbarCategories = () => {
   return (
        <nav className={ styles.navbar_categories_dark }>
            <a href="/">Home</a> 
            <a href="/business">Business</a>       
            <a href="/entertainment">Entertainment</a>
            <a href="/sports">Sports</a>
            <a href="/science">Science</a>
            <a href="/technology">Technology</a>
            <a href="/health">Health</a>
        </nav>
    );
};

export default NavbarCategories;
 