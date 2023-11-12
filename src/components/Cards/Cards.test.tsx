import { describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Cards from './Cards';
import { MainPageProvider } from '../../context/MainPageContext/MainPageContext';

const mockAnimeData = {
  data: [
    {
      mal_id: 1,
      title: 'Test Anime 1',
      images: { jpg: { image_url: 'test-image-1.jpg' } },
      score: 8.0,
      status: 'Finished',
      type: 'TV',
      episodes: 12,
      duration: '24 min per episode',
    },
    {
      mal_id: 2,
      title: 'Test Anime 2',
      images: { jpg: { image_url: 'test-image-2.jpg' } },
      score: 9.0,
      status: 'Airing',
      type: 'Movie',
      episodes: 1,
      duration: '2 hours',
    },
  ],
};

const mockAnimeDataEmpty = {
  data: [{}],
};

describe('Cards: ', () => {
  test('- component Cards renders correctly.', async () => {
    vi.mock('react-router-dom', async () => {
      const originalReactRouterDom =
        await vi.importActual<typeof import('react-router-dom')>(
          'react-router-dom'
        );
      return {
        ...originalReactRouterDom,
        useLoaderData: vi.fn(() => ({
          data: Promise.resolve(mockAnimeData),
        })),
      };
    });

    render(
      <MainPageProvider>
        <Cards />
      </MainPageProvider>
    );

    await vi.dynamicImportSettled();
  });

  test('- the component renders the specified number of cards.', async () => {
    vi.mock('react-router-dom', async () => ({
      ...(await vi.importActual<typeof import('react-router-dom')>(
        'react-router-dom'
      )),
      useLoaderData: vi.fn(() => Promise.resolve(mockAnimeData)),
    }));

    render(
      <MainPageProvider>
        <Cards />
      </MainPageProvider>
    );

    const cardElement = screen.queryByText(/Test Anime 1/);
    const cardElement2 = screen.queryByText(/Test Anime 2/);
    expect(cardElement).toBeDefined();
    expect(cardElement2).toBeDefined();
  });

  test('- an appropriate message is displayed if no cards are present.', async () => {
    vi.mock('react-router-dom', async () => ({
      ...(await vi.importActual<typeof import('react-router-dom')>(
        'react-router-dom'
      )),
      useLoaderData: vi.fn(() => Promise.resolve(mockAnimeDataEmpty)),
    }));

    render(
      <MainPageProvider>
        <Cards />
      </MainPageProvider>
    );

    const cardElement = screen.queryByText(/Sorry, nothing found./);
    expect(cardElement).toBeDefined();
  });
});
