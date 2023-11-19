import { FC } from 'react';
import './not-found.scss';
import { Link } from 'react-router-dom';

const NotFound: FC = (): JSX.Element => {
  return (
    <main className="not-found">
      <h2 className="not-found__title">Page not found!</h2>
      <h2 className="not-found__message">404</h2>
      <Link className="not-found__btn btn" to={'/'}>
        Go to the Home
      </Link>
    </main>
  );
};
export default NotFound;
