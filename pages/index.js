import { useState } from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setSearch as actionSetSearch } from "../store/actions/search";
import Head from "next/head";

export default function Home() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (search.trim().length < 1) {
      return null;
    }
    dispatch(actionSetSearch(search));
    router.push(`/search?q=${search}`);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Movie tracker | Home</title>
      </Head>
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <h1 className={styles.header}>Moovies</h1>
          <p className={styles.body}>
            Find your favourite movies, series, tv shows and much more.
          </p>
        </div>
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
      </div>
    </div>
  );
}
