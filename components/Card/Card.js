import styles from "./Card.module.css";
import Truncate from "react-truncate";
import { useRouter } from "next/router";

export default function Card({ title, rating, imageUrl, movieId }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/movie/${movieId}`);
  };
  return (
    <div onClick={() => handleClick()} className={styles.container}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={imageUrl} alt="Movie thumbnail" />
      </div>
      <div className={styles.text}>
        <p className={styles.title}>
          <Truncate lines={1} ellipsis={<span>...</span>}>
            {title}
          </Truncate>
        </p>
        <p className={styles.rating}>{rating}</p>
      </div>
    </div>
  );
}
