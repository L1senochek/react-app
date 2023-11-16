import IAnime from '../api/IAnime';
import IAnimeResData from '../api/IAnimeResData';

interface IconfigStore {
  searchValue: {
    searchValue: string;
  };
  arrRes: {
    arrRes: IAnime | undefined;
  };
  arrResCard: {
    arrResCard: IAnimeResData | undefined;
  };
}

export default IconfigStore;
