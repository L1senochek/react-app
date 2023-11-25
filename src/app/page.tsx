import MainSection from '@/components/MainSection/MainSection';
import styles from './page.module.scss';
import IHomeProps from '@/model/app/page';

const Home = ({ searchParams }: IHomeProps) => {
  return (
    <>
      <main className={`${styles.main} ${styles['main-page']}`}>
        <MainSection searchParams={searchParams} />
      </main>
    </>
  );
};

export default Home;
