import Loading from '@/components/Loading/Loading';
import style from './page.module.scss';

const PreLoader = () => {
  return (
    <div className={style['wrapper-loading']}>
      <Loading />
    </div>
  );
};

export default PreLoader;
