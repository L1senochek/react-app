import { render, screen, waitFor } from '@testing-library/react';
import CardInfo from './CardInfo';
import { MainPageProvider } from '../../context/MainPageContext/MainPageContext';
import { vi, describe, test, expect } from 'vitest';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import apiResDataMock from '../../mocks/apiResDataMock';

describe('CardInfo:', () => {
  vi.mock('react-router-dom', async () => {
    const current =
      await vi.importActual<typeof import('react-router-dom')>(
        'react-router-dom'
      );
    return {
      ...current,
      useParams: () => ({
        pageNum: '1',
        limitNum: '25',
        cardId: '1',
      }),
      useNavigate: () => vi.fn(),
    };
  });

  test('- the detailed card component correctly displays the detailed card data.', async () => {
    const routes = [
      {
        path: `/page/1/limit/25/card-id/1`,
        element: <CardInfo />,
        loader: () => ({ cardId: { data: apiResDataMock } }),
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: [`/page/1/limit/25/card-id/1`],
    });

    render(
      <MainPageProvider>
        <RouterProvider router={router} />
      </MainPageProvider>
    );

    await waitFor(() => {
      expect(screen.getByText('Test Anime!!!!!!!!!!')).toBeDefined();
      expect(screen.getByText('24 min per episode')).toBeDefined();
      expect(screen.getByText(`Finished`)).toBeDefined();
    });
  });

  test('- clicking the close button hides the component.', async () => {
    const routes = [
      {
        path: `/page/1/limit/25/card-id/1`,
        element: <CardInfo />,
        loader: () => ({ cardId: { data: apiResDataMock } }),
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: [`/page/1/limit/25/card-id/1`],
    });

    render(
      <MainPageProvider>
        <RouterProvider router={router} />
      </MainPageProvider>
    );

    await waitFor(() => {
      const closeButton = screen.getByText('x');
      expect(closeButton.getAttribute('href')).toBe('/page/1/limit/25');
    });
  });
});
