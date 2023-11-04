import { FC } from 'react';
import getAnime from '../../api/getAnime';
import { SEARCH_VALUE } from '../../utils/constants/constants';

const Pagination: FC = (): JSX.Element => {
  return (
    <ul className="pagination">
      <button
        onClick={async () => {
          const local = localStorage.getItem(SEARCH_VALUE);
          const res = await getAnime(local ? local : undefined, 1, 5);
          // /anime?q=naruto&page=1&limit=10 || 5 || 25
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
