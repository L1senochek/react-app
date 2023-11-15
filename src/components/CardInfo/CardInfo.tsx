import { FC, Suspense, useContext, useEffect } from 'react';
import './card-info.scss';
import {
  Await,
  Link,
  LoaderFunction,
  defer,
  useLoaderData,
  useNavigate,
  useParams,
} from 'react-router-dom';
import getAnimeId from '../../api/getAnimeId';
import Loading from '../Loading/Loading';
import { MainPageContext } from '../../context/MainPageContext/MainPageContext';
import {
  PAGE_PATH_PART,
  LIMIT_PATH_PART,
  QUERY_PATH_PART,
} from '../../utils/constants/constants';
import { IMainPageContextState } from '../../model/context/MainPageContext/MainPageContext';
import IAnimeResData from '../../model/api/IAnimeResData';
import IconfigStore from '../../model/store/IconfigStore';
import { useSelector } from 'react-redux';

const CardInfo: FC = (): JSX.Element => {
  const { arrResCard, setArrResCard } = useContext(
    MainPageContext
  ) as IMainPageContextState;
  const searchValue = useSelector(
    (state: IconfigStore) => state.searchValue.searchValue
  );
  const { cardId } = useLoaderData() as { cardId: Promise<IAnimeResData> };
  const { pageNum, limitNum } = useParams();
  const navigate = useNavigate();

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
    (async () => {
      setArrResCard(await cardId);
    })();
  }, [cardId, setArrResCard]);

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
      <Suspense fallback={<Loading />}>
        <Await resolve={cardId}>
          {() => {
            return (
              <>
                <div className="card-info__wrapper">
                  <h1 className="card-info__title">
                    {arrResCard?.data?.title}
                  </h1>
                  <span className="card-info__img">
                    <img
                      className="card-info__img_src"
                      src={`${arrResCard?.data?.images.jpg.large_image_url}`}
                    />
                  </span>
                  {createStructureRender('Score', arrResCard?.data?.score)}
                  {createStructureRender('Status', arrResCard?.data?.status)}
                  {createStructureRender('Type', arrResCard?.data?.type)}
                  {createStructureRender(
                    'Episodes',
                    arrResCard?.data?.episodes
                  )}
                  {createStructureRender(
                    'Duration',
                    arrResCard?.data?.duration
                  )}
                  {createStructureRender(
                    'Synopsis',
                    arrResCard?.data?.synopsis
                  )}
                </div>
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
              </>
            );
          }}
        </Await>
      </Suspense>
    </div>
  );
};

export default CardInfo;

export const CardInfoLoader: LoaderFunction = async ({ params }) => {
  return defer({ cardId: getAnimeId(params.cardId) });
};
