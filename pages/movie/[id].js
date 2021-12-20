import { useEffect, useState } from "react";
import styles from "../../styles/MovieDetail.module.css";
import { useRouter } from "next/router";
import Layout from "../../components/Layout/Layout";
import CustomLoader from "../../components/CustomLoader/CustomLoader";
import { BsPlayFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

export default function MovieDetail() {
  const router = useRouter();
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(false);

  const getMovie = () => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${router.query.id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
    );
  };

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      try {
        const res = await getMovie();
        const data = await res.json();
        setMovie(data);
        setGenres(data.genres);
        console.log(data.genres);
      } catch {
        console.log("Could not get  movie");
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [router]);
  return (
    <Layout>
      {loading ? (
        <CustomLoader />
      ) : (
        <div className={styles.container}>
          <section className={styles.topSection}>
            <div className={styles.left}>
              <img
                className={styles.img}
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt="Movie image"
              />
              <div className={styles.rating}>
                <AiFillStar className={styles.star} />
                <p className={styles.ratingValue}>{movie.vote_average}</p>
              </div>
            </div>
            <div className={styles.right}>
              <h1 className={styles.title}>{movie.original_title}</h1>
              {genres
                ? genres.map((item) => (
                    <span className={styles.genres} key={item.id}>
                      /{item.name}
                    </span>
                  ))
                : null}

              <p className={styles.descriptionHeader}>Description:</p>
              <p className={styles.description}>{movie.overview}</p>
              <div className={styles.btn}>
                <BsPlayFill className={styles.btnIcon} />
                <p className={styles.btnText}>Watch Trailer</p>
              </div>
            </div>
          </section>
        </div>
      )}
    </Layout>
  );
}
