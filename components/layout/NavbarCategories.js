import styles from "../../styles/Layout.module.css";
import Link from "next/link";
import { useContext } from "react";
import { context } from "./../../context/AppProvider";

const NavbarCategories = () => {
    const { setCategory } = useContext(context);

    return (
        <nav className={styles.navbar_categories}>
            <Link href="/">
                <a>General</a>
            </Link>
            <Link href="/">
                <a>Business</a>
            </Link>
            <Link href="/">
                <a>Entertainment</a>
            </Link>
            <Link href="/">
                <a>sports</a>
            </Link>
            <Link href="/filter/[c]" as={`/filter/science?from=19-11-2021`}>
                <a>science</a>
            </Link>
            <Link href="/filter/[c]" as={`/filter/technology?from=19-11-2021`}>
                <a>Technology</a>
            </Link>
                <button
                onClick={() => {
                    setCategory("Food");
                }}
            >
                Food
            </button>
            <button
                onClick={() => {
                    setCategory("Health");
                }}
            >
                Health
            </button>
        </nav>
    );
};

export default NavbarCategories;
