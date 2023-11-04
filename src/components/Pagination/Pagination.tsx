import { FC } from 'react';
import getAnime from '../../api/getAnime';

const Pagination: FC = (): JSX.Element => {
  return (
    <ul className="pagination">
      <button
        onClick={async () => {
          const local = localStorage.getItem('searchValue');
          const res = await getAnime(local ? local : undefined, 2);
          console.log(res);
        }}
      >
        btn
      </button>
      <li></li>
    </ul>
  );
};

export default Pagination;
