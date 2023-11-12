import { describe, expect, test } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import {
  MemoryRouter,
  Route,
  RouterProvider,
  Routes,
  createMemoryRouter,
} from 'react-router-dom';
import Card from './Card';
import { MainPageProvider } from '../../context/MainPageContext/MainPageContext';
import IAnimeData from '../../model/api/IAnimeData';
import CardInfo from '../CardInfo/CardInfo';
import apiResDataMock from '../../mocks/apiResDataMock';

describe('Card: ', () => {
  test('- the Card component renders the relevant card data', () => {
    render(
      <MemoryRouter>
        <MainPageProvider>
          <Card
            key={apiResDataMock.mal_id}
            {...(apiResDataMock as IAnimeData)}
          />
        </MainPageProvider>
      </MemoryRouter>
    );

    const nameElement = screen.getByText(apiResDataMock.title);
    expect(nameElement).toBeDefined();

    const scoreElement = screen.getByText(/Score:/);
    expect(scoreElement).toBeDefined();

    const statusElement = screen.getByText(/Status:/);
    expect(statusElement).toBeDefined();

    const typeElement = screen.getByText(/Type:/);
    expect(typeElement).toBeDefined();

    const episodesElement = screen.getByText(/Episodes:/);
    expect(episodesElement).toBeDefined();

    const durationElement = screen.getByText(/Duration:/);
    expect(durationElement).toBeDefined();
  });

  test('- clicking on a card opens a detailed card component.', async () => {
    render(
      <MemoryRouter initialEntries={['/mock/path']}>
        <Routes>
          <Route
            path="/mock/path"
            element={<Card {...(apiResDataMock as IAnimeData)} />}
          />
          <Route
            path="/:pageNum/:limitNum/:query/:cardId"
            element={<CardInfo />}
          />
        </Routes>
      </MemoryRouter>
    );

    const cardLink = screen.getByText(/Test Anime/i);
    fireEvent.click(cardLink);
  });

  test('- clicking triggers an additional API call to fetch detailed information.', async () => {
    const routes = [
      {
        path: '/mock/path',
        element: <CardInfo />,
        loader: () => ({ cardId: { data: apiResDataMock } }),
      },
      {
        path: '/:pageNum/:limitNum/:query/:cardId',
        element: <CardInfo />,
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ['/mock/path'],
    });

    render(
      <MainPageProvider>
        <RouterProvider router={router} />
      </MainPageProvider>
    );

    await waitFor(() => {
      const cardLink = screen.getByText('Test Anime');
      fireEvent.click(cardLink);

      expect(screen.queryByText('Score:')).toBeDefined();
      expect(screen.queryByText(/Status:/)).toBeDefined();
      expect(screen.queryByText(/Type:/)).toBeDefined();
      expect(screen.queryByText(/Episodes:/)).toBeDefined();
      expect(screen.queryByText(/Duration:/)).toBeDefined();
      expect(screen.queryByText(/Synopsis:/)).toBeDefined();
    });
  });
});
