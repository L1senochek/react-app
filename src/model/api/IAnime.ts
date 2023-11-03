import IAnimeData from './IAnimeData';

type IAnime = {
  pagination: {
    last_visible_page: number;
    has_next_page: boolean;
    current_page: number;
    items: {
      count: number;
      total: number;
      per_page: number;
    };
  };
  data: IAnimeData[];
};

export default IAnime;
