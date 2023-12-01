import { FC } from 'react';
import { Outlet } from 'react-router';

const Layout: FC = (): JSX.Element => {
  return (
    <>
      <header>React. Forms</header>
      <main className="main">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
