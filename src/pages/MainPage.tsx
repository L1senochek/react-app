import { FC } from 'react';
import { Outlet } from 'react-router';

const MainPage: FC = (): JSX.Element => {
  return (
    <>
      <Outlet />
      <div>submit info</div>
    </>
  );
};

export default MainPage;
