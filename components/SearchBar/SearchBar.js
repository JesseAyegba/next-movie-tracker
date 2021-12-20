import { useState } from "react";
import { useRouter } from "next/router";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (search.trim().length < 1) {
      return null;
    }
    router.push(`/search?q=${search}`);
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
      <div className={styles.formField}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a movie, tv show, person..."
          type="text"
          className={styles.input}
        />
      </div>
      <div className={styles.btnWrapper}>
        <button type="submit" className={styles.btn}>
          Search
        </button>
      </div>
    </form>
  );
}
