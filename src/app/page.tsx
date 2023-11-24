import MainSection from '@/components/MainSection/MainSection';
import styles from './page.module.scss';
import Link from 'next/link';

const Home = () => {
  return (
    <>
      <main className={`${styles.main} ${styles['main-page']}`}>
        <Link href="/?page=2&limit=25">Page 2 Limit 25</Link>
        <MainSection />
      </main>
    </>
  );
};

export default Home;
