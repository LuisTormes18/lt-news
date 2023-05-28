import { useRouter } from "next/router";
import { useState } from "react";

import styles from "../../styles/Layout.module.css";
import NavbarCategories from "./NavbarCategories";

const Header = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const handleInputChange = ({ target }) => {
    setSearch(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (search.trim() === "") {
      return;
    }
    setSearch("");
    router.push(`/search/${search}`);
  };
  return (
    <header className={styles.header}>
      <div>
        <div className={styles.logo}>
          <h1>
            LT<span>News</span>
          </h1>
        </div>
        <form onSubmit={handleSubmit} className={styles.search_bar}>
          <input type="text" value={search} onChange={handleInputChange} />
          <button type="submit"></button>
        </form>
      </div>

      <NavbarCategories />
    </header>
  );
};

export default Header;
