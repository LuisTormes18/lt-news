import Link from "next/link";
import styles from "../../styles/Layout.module.css";
import NavbarItem from "../ui/NavbarItem";

const NavbarCategories = () => {
  return (
    <nav className={styles.navbar_categories_dark}>
      <Link href="/">
        <a>General</a>
      </Link>

      <NavbarItem to="business" text="Business" />
      <NavbarItem to="entertainment" text="Entertainment" />
      <NavbarItem to="sports" text="Sports" />
      <NavbarItem to="science" text="Science" />
      <NavbarItem to="technology" text="Technology" />
      <NavbarItem to="health" text="Health" />
    </nav>
  );
};

export default NavbarCategories;
