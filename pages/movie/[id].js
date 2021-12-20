import styles from "../../styles/MovieDetail.module.css";
import { useRouter } from "next/router";
import Layout from "../../components/Layout/Layout";

export default function MovieDetail() {
  const router = useRouter();

  return (
    <Layout>
      <div className={styles.container}>{router.query.id}</div>
    </Layout>
  );
}
