import { Params, RouterProvider, createMemoryRouter } from 'react-router-dom';
import { describe, test, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import Pagination from './Pagination';
import {
  LIMIT_PATH_PART,
  PAGE_PATH_PART,
} from '../../utils/constants/constants';
import { MainPageProvider } from '../../context/MainPageContext/MainPageContext';
import apiResDataMock from '../../mocks/apiResDataMock';

const dataMock = {
  pagination: {
    last_visible_page: 5,
    has_next_page: false,
    current_page: 1,
    items: {
      count: 12,
      total: 12,
      per_page: 15,
    },
  },
  data: Array.from({ length: 12 }, () => apiResDataMock),
};

describe('Pagination: ', () => {
  vi.mock('react-router-dom', async () => {
    const current =
      await vi.importActual<typeof import('react-router-dom')>(
        'react-router-dom'
      );
    return {
      ...current,
      useParams: (): Readonly<Params<string>> => ({
        pageNum: '1',
        limitNum: '10',
      }),
      useNavigate: () => vi.fn(),
    };
  });

  test('- the component updates URL query parameter when page changes.', async () => {
    const routes = [
      {
        path: `/page/:pageNum/limit/:limitNum/query?/:query?`,
        element: <Pagination />,
        loader: () => ({ data: dataMock }),
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: [`/page/1/limit/10`],
    });

    render(
      <MainPageProvider>
        <RouterProvider router={router} />
      </MainPageProvider>
    );

    await waitFor(async () => {
      const pageTwoBtn = screen.getByText('2');

      expect(pageTwoBtn.tagName).toBe('A');
      expect(pageTwoBtn.getAttribute('href')).toBe(
        `/${PAGE_PATH_PART}2/${LIMIT_PATH_PART}10`
      );
    });
  });
});
