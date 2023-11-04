import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import MainPage from '../../pages/MainPage/MainPage';
import NotFound from '../NotFound/NotFound';

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainPage />}>
        <Route path="?page=pageNum" element={<MainPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </>
  )
);

export default Router;
