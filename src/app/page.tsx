import styles from './page.module.scss';
import Link from 'next/link';

const Home = () => {
  return (
    <>
      <main className={`${styles.main} ${styles['main-page']}`}>
        <h1>Home Page</h1>
        <Link href="/?page=2&limit=25">Page 2 Limit 25</Link>
      </main>
    </>
  );
};

export default Home;
