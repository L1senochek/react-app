'use client';
import { FC, useEffect } from 'react';
import './card-info.scss';
import Loading from '../Loading/Loading';
import {
  PAGE_PATH_PART,
  LIMIT_PATH_PART,
  QUERY_PATH_PART,
  API_PAGE,
  API_LIMIT,
  API_SEARCH_PARAM,
} from '../../utils/constants/constants';
import { setArrResCard } from '../../store/slices/arrResCardSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useGetAnimeIdQuery } from '../../api/getAnime';
import { RootState } from '../../store/configStore';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

const CardInfo: FC<{ cardId: string }> = ({ cardId }): JSX.Element => {
  const arrResCard = useAppSelector(
    (state: RootState) => state.arrResCard.arrResCard
  );
  const searchValue = useAppSelector(
    (state: RootState) => state.searchValue.searchValue
  );
  const dispatch = useAppDispatch();
  // const navigate = useNavigate();
  const router = useRouter();
  const searchParams = useSearchParams();
  const pageNum = searchParams.get('page');
  const limitNum = searchParams.get('limit');
  const query = searchParams.get('q') || searchValue;

  console.log(cardId, 'CardInfo');
  // const id = cardId?.toString();
  // const { data, isLoading } = useGetAnimeIdQuery({ id });

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

  // useEffect(() => {
  //   dispatch(setArrResCard(data));
  // }, [data, dispatch]);

  return (
    // <div className="card-info">
    //   <Link
    //     href={`/${PAGE_PATH_PART}${pageNum}/${LIMIT_PATH_PART}${limitNum}${
    //       searchValue ? `/${QUERY_PATH_PART}${searchValue}` : ''
    //     }`}
    //     className="card-info__btn btn"
    //   >
    //     x
    //   </Link>
    //   {arrResCard && !isLoading ? (
    <div className="card-info__wrapper">
      {cardId}
      {/* <h1 className="card-info__title">{arrResCard.data.title}</h1>
          <span className="card-info__img"> */}
      {/* <img
              className="card-info__img_src"
              src={`${arrResCard.data.images.jpg.large_image_url}`}
            /> */}
      {/* </span>
          {createStructureRender('Score', arrResCard.data.score)}
          {createStructureRender('Status', arrResCard.data.status)}
          {createStructureRender('Type', arrResCard.data.type)}
          {createStructureRender('Episodes', arrResCard.data.episodes)}
          {createStructureRender('Duration', arrResCard.data.duration)}
          {createStructureRender('Synopsis', arrResCard.data.synopsis)} */}
    </div>
    //   ) : (
    //     <Loading />
    //   )}
    //   <div
    //     className="background-window"
    //     onClick={() =>
    //       router.push(
    //         `/?${API_PAGE}${pageNum}&${API_LIMIT}${limitNum}${
    //           searchValue ? `/${API_SEARCH_PARAM}${searchValue}` : ''
    //         }`
    //       )
    //     }
    //   ></div>
    // </div>
  );
};

export default CardInfo;
