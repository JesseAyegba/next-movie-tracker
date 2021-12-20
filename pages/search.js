import { useEffect, useState } from "react";
import styles from "../styles/Search.module.css";
import { useRouter } from "next/router";
import Layout from "../components/Layout/Layout";
import Card from "../components/Card/Card";
import CustomLoader from "../components/CustomLoader/CustomLoader";
import { useDispatch } from "react-redux";
import { setSearch } from "../store/actions/search";

export default function Search() {
  const dispatch = useDispatch();
  const router = useRouter();
  const query = router.query;
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const getMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&query=${query.q}`
    );
  };

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const res = await getMovies();
        const data = await res.json();
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [router]);
  return (
    <Layout>
      {loading ? (
        <CustomLoader />
      ) : (
        <div className={styles.container}>
          {movies[0]?.title !== "UNdefined"
            ? movies.map((item) =>
                item.poster_path ? (
                  <Card
                    key={item.id}
                    title={item.title}
                    rating={item.vote_average}
                    imageUrl={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                    movieId={item.id}
                  />
                ) : null
              )
            : null}
        </div>
      )}
    </Layout>
  );
}
