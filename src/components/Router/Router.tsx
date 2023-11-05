import {
  // Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import MainPage from '../../pages/MainPage/MainPage';
import NotFound from '../NotFound/NotFound';
import MainSection from '../MainSection/MainSection';
import { CardsLoader } from '../Cards/Cards';
import { PATH_MAIN_SECTION } from '../../utils/constants/constants';

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainPage />} errorElement={<div>Error</div>}>
        <Route
          path=""
          loader={CardsLoader}
          element={<MainSection />}
          // element={<Navigate to="/page/1/limit/25" />}
        />
        <Route
          index
          path={PATH_MAIN_SECTION}
          // path="/page/:pageNum/limit/:limitNum/query?/:query?"
          element={<MainSection />}
          loader={CardsLoader}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </>
  )
);

export default Router;
