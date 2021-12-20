import styles from "./CustomLoader.module.css";
import CircularProgress from "@mui/material/CircularProgress";

export default function CustomLoader() {
  return (
    <div className={styles.container}>
      <CircularProgress color="secondary" />
    </div>
  );
}
