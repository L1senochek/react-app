import { describe, test, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { MainPageProvider } from '../../context/MainPageContext/MainPageContext';
import NotFound from './NotFound';

describe('NotFound: ', () => {
  test('- 404 page is displayed when navigating to an invalid route.', async () => {
    const routes = [
      {
        path: '/invalid-route',
        element: <NotFound />,
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ['/invalid-route'],
    });

    render(
      <MainPageProvider>
        <RouterProvider router={router} />
      </MainPageProvider>
    );

    await waitFor(() => {
      const titleElement = screen.getByText('Page not found!');
      const messageElement = screen.getByText('404');
      const btnElement = screen.getByText('Go to the Home');

      expect(titleElement).toBeDefined();
      expect(messageElement).toBeDefined();
      expect(btnElement).toBeDefined();
    });
  });
});
