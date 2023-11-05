import { Dispatch, SetStateAction } from 'react';
import IAnime from '../../api/IAnime';

interface ISetResObj {
  resObj: IAnime | undefined;
  setResObj: Dispatch<SetStateAction<IAnime | undefined>>;
}

export default ISetResObj;
