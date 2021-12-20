import SearchBar from "../SearchBar/SearchBar";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <SearchBar />
      </div>
    </div>
  );
}
