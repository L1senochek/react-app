import { FC, useEffect } from 'react';
import './card-info.scss';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import {
  PAGE_PATH_PART,
  LIMIT_PATH_PART,
  QUERY_PATH_PART,
} from '../../utils/constants/constants';
import { setArrResCard } from '../../store/arrResCardSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useGetAnimeIdQuery } from '../../api/getAnime';
import { RootState } from '../../store/configStore';

const CardInfo: FC = (): JSX.Element => {
  const arrResCard = useAppSelector(
    (state: RootState) => state.arrResCard.arrResCard
  );
  const searchValue = useAppSelector(
    (state: RootState) => state.searchValue.searchValue
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pageNum, limitNum, cardId } = useParams();
  const id = cardId?.toString();
  const { data, isLoading } = useGetAnimeIdQuery({ id });

  const createStructureRender = (
    propsTitle: string,
    propsValue: string | number | undefined
  ): string | number | JSX.Element | undefined => {
    return (
      propsValue && (
        <h3 className={`card-info__description ${propsTitle.toLowerCase()}`}>
          <span className="card-info__description_title">{propsTitle}: </span>
          <span className="card-info__description_value">{propsValue}</span>
        </h3>
      )
    );
  };

  useEffect(() => {
    dispatch(setArrResCard(data));
  }, [data, dispatch]);

  return (
    <div className="card-info">
      <Link
        to={`/${PAGE_PATH_PART}${pageNum}/${LIMIT_PATH_PART}${limitNum}${
          searchValue ? `/${QUERY_PATH_PART}${searchValue}` : ''
        }`}
        className="card-info__btn btn"
      >
        x
      </Link>
      {arrResCard && !isLoading ? (
        <div className="card-info__wrapper">
          <h1 className="card-info__title">{arrResCard.data.title}</h1>
          <span className="card-info__img">
            <img
              className="card-info__img_src"
              src={`${arrResCard.data.images.jpg.large_image_url}`}
            />
          </span>
          {createStructureRender('Score', arrResCard.data.score)}
          {createStructureRender('Status', arrResCard.data.status)}
          {createStructureRender('Type', arrResCard.data.type)}
          {createStructureRender('Episodes', arrResCard.data.episodes)}
          {createStructureRender('Duration', arrResCard.data.duration)}
          {createStructureRender('Synopsis', arrResCard.data.synopsis)}
        </div>
      ) : (
        <Loading />
      )}
      <div
        className="background-window"
        onClick={() =>
          navigate(
            `/${PAGE_PATH_PART}${pageNum}/${LIMIT_PATH_PART}${limitNum}${
              searchValue ? `/${QUERY_PATH_PART}${searchValue}` : ''
            }`
          )
        }
      ></div>
    </div>
  );
};

export default CardInfo;
