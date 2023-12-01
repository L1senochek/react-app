import { FC } from 'react';
import { Link } from 'react-router-dom';
import './not-found.scss';

const NotFound: FC = (): JSX.Element => {
  return (
    <div className="not-found">
      <h2 className="not-found__title">Page not found!</h2>
      <h2 className="not-found__message">404</h2>
      <Link className="not-found__btn btn" to={'/'}>
        Go to the Home
      </Link>
    </div>
  );
};

export default NotFound;
