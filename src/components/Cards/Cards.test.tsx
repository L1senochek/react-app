import { describe, test, vi } from 'vitest';
import apiResDataMock from '../../mocks/apiResDataMock';
import { render } from '@testing-library/react';
import Cards from './Cards';
import { MainPageProvider } from '../../context/MainPageContext/MainPageContext';

const mockAnimeData = {
  data: [apiResDataMock, apiResDataMock, apiResDataMock],
};

describe('Cards: ', () => {
  test('- component Cards renders correctly', async () => {
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
});
