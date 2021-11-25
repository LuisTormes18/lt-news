import Link from "next/link";
import styles from "../../styles/Layout.module.css";


const NavbarItem = ({to,text}) => {
    return  <Link href={to}>{text}</Link>
}


const NavbarCategories = () => {
   return (
        <nav className={ styles.navbar_categories_dark }>
            <NavbarItem to='/' text='Home' /> 
            <NavbarItem to='/business' text='Business' /> 
            <NavbarItem to='/entertainment' text='Entertainment' /> 
            <NavbarItem to='/sports' text='Sports' /> 
            <NavbarItem to='/science' text='Science' /> 
            <NavbarItem to='/technology' text='Technology' /> 
            <NavbarItem to='/health' text='Health' /> 
        </nav>
    );
};

export default NavbarCategories;
 