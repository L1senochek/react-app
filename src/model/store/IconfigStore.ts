import IAnime from '../api/IAnime';

interface IconfigStore {
  searchValue: {
    searchValue: string;
  };
  arrRes: {
    arrRes: IAnime | undefined;
  };
}

export default IconfigStore;
