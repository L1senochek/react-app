import { RouterProvider } from 'react-router';
import './App.css';
import Router from '@/components/Router/Router';

const App = (): JSX.Element => {
  return <RouterProvider router={Router} />;
};

export default App;
