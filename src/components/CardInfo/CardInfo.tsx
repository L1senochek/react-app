import { FC, Suspense, useContext } from 'react';
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
import IAnimeData from '../../model/api/IAnimeData';
import Loading from '../Loading/Loading';
import { MainPageContext } from '../../context/MainPageContext/MainPageContext';
import {
  PAGE_PATH_PART,
  LIMIT_PATH_PART,
  QUERY_PATH_PART,
} from '../../utils/constants/constants';

const CardInfo: FC = (): JSX.Element => {
  const { cardId } = useLoaderData() as { cardId: Promise<IAnimeData> };
  const context = useContext(MainPageContext);
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

  return (
    <div className="card-info">
      <Link
        to={`/${PAGE_PATH_PART}${pageNum}/${LIMIT_PATH_PART}${limitNum}${
          context?.searchValue
            ? `/${QUERY_PATH_PART}${context?.searchValue}`
            : ''
        }`}
        className="card-info__btn btn"
      >
        x
      </Link>
      <Suspense fallback={<Loading />}>
        <Await resolve={cardId}>
          {(cardsInfo) => {
            return (
              <>
                <div className="card-info__wrapper">
                  <h1 className="card-info__title">{cardsInfo.data.title}</h1>
                  <span className="card-info__img">
                    <img
                      className="card-info__img_src"
                      src={`${cardsInfo.data.images.jpg.large_image_url}`}
                    />
                  </span>
                  {createStructureRender('Score', cardsInfo.data.score)}
                  {createStructureRender('Status', cardsInfo.data.status)}
                  {createStructureRender('Type', cardsInfo.data.type)}
                  {createStructureRender('Episodes', cardsInfo.data.episodes)}
                  {createStructureRender('Duration', cardsInfo.data.duration)}
                  {createStructureRender('Synopsis', cardsInfo.data.synopsis)}
                </div>
                <div
                  className="background-window"
                  onClick={() =>
                    navigate(
                      `/${PAGE_PATH_PART}${pageNum}/${LIMIT_PATH_PART}${limitNum}${
                        context?.searchValue
                          ? `/${QUERY_PATH_PART}${context?.searchValue}`
                          : ''
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
