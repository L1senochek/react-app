import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import MainPage from '../../pages/MainPage/MainPage';
import NotFound from '../NotFound/NotFound';
import MainSection from '../MainSection/MainSection';
import { CardsLoader } from '../Cards/Cards';
import {
  PATH_INITIAL,
  PATH_MAIN_SECTION,
  SEARCH_VALUE,
} from '../../utils/constants/constants';
import CardInfo, { CardInfoLoader } from '../CardInfo/CardInfo';

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainPage />} errorElement={<div>Error</div>}>
        <Route
          path=""
          index
          element={
            <Navigate
              to={`${PATH_INITIAL}${
                localStorage.getItem(SEARCH_VALUE)
                  ? localStorage.getItem(SEARCH_VALUE)
                  : ''
              }`}
            />
          }
        />
        <Route
          id="cards"
          path={PATH_MAIN_SECTION}
          element={<MainSection />}
          loader={CardsLoader}
        >
          <Route
            id="cardId"
            path={`card-id/:cardId`}
            element={<CardInfo />}
            loader={CardInfoLoader}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </>
  )
);

export default Router;
