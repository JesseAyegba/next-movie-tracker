import Navbar from "../Navbar/Navbar";
import styles from "./Layout.module.css";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Movie tracker</title>
      </Head>
      <Navbar />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
