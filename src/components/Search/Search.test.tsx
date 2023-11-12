import { describe, test, expect, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Params, RouterProvider, createMemoryRouter } from 'react-router-dom';
import Search from './Search';
import { MainPageProvider } from '../../context/MainPageContext/MainPageContext';
import { SEARCH_VALUE } from '../../utils/constants/constants';

describe('Search component: ', () => {
  test('- clicking the Search button saves the entered value to the local storage', async () => {
    vi.mock('react-router-dom', async () => {
      const current =
        await vi.importActual<typeof import('react-router-dom')>(
          'react-router-dom'
        );
      const mockNavigate = vi.fn();
      return {
        ...current,
        useParams: (): Readonly<Params<string>> => ({
          limit: '25',
        }),
        useNavigate: (): typeof mockNavigate => mockNavigate,
      };
    });

    const routes = [
      {
        path: '/mock/path',
        element: <Search />,
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

    const inputElement = screen.getByPlaceholderText('Search...');
    fireEvent.change(inputElement, { target: { value: 'testValue' } });
    fireEvent.keyUp(inputElement, { key: 'Enter' });
    const storedValue = localStorage.getItem(SEARCH_VALUE);

    expect(storedValue).toBe('testValue');
  });
});
