import Link from "next/link";
import styles from "../../styles/Layout.module.css";

const NavbarCategories = () => {

   return (
        <nav className={styles.navbar_categories}>
            <Link href="/">
                <a href="">Home</a>
           </Link> 
            <Link href="/business">
                <a href="">Business</a>
           </Link> 
        
             <Link href="/entertainment">
                <a href="">Entertainment</a>
           </Link> 
            <Link href="/sports">
                <a href="">Sports</a>
           </Link> 
            <Link href="/science">
                <a href="">Science</a>
           </Link> 
           <Link href="/technology">
                <a href="">Technology</a>
           </Link> 
          <Link href="/healt">
                <a href="">Healt</a>
           </Link>  
        </nav>
    );
};

export default NavbarCategories;
 