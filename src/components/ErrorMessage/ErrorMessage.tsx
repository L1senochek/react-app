import { FC } from 'react';
import { Link, useRouteError } from 'react-router-dom';
import './error-message.scss';

const ErrorMessage: FC = (): JSX.Element => {
  const error = useRouteError() as Error;

  return (
    <div className="error-message">
      <h2 className="error-message__title">Error message:</h2>
      <h3 className="error-message__message">{error.message}</h3>
      <Link className="error-message__btn btn" to={'/'}>
        Go to the Home
      </Link>
    </div>
  );
};

export default ErrorMessage;