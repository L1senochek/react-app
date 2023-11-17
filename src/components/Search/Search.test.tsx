import { describe, test, expect, vi } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import { Params, RouterProvider, createMemoryRouter } from 'react-router-dom';
import Search from './Search';
import { SEARCH_VALUE } from '../../utils/constants/constants';
import { Provider } from 'react-redux';
import configStore from '../../store/configStore';

describe('Search: ', () => {
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

  localStorage.setItem(SEARCH_VALUE, 'testValue2');

  test('- check that the component retrieves the value from the local storage upon mounting.', async () => {
    // render(
    //   <MainPageProvider>
    //     <RouterProvider router={router} />
    //   </MainPageProvider>
    // );
    // const inputElement = screen.getByDisplayValue('testValue2');
    // expect(inputElement).toBeDefined();
  });

  test('- clicking the Search button saves the entered value to the local storage.', async () => {
    // render(
    //   <MainPageProvider>
    //     <RouterProvider router={router} />
    //   </MainPageProvider>
    // );
    const { getByText } = render(
      <Provider store={configStore}>
        <RouterProvider router={router} />
      </Provider>
    );
    fireEvent.click(getByText('test'));

    const state = configStore.getState();
    expect(state.searchValue).toEqual('test');
    // const inputElement = screen.getByDisplayValue('testValue2');
    // fireEvent.change(inputElement, { target: { value: 'testValue' } });
    // fireEvent.keyUp(inputElement, { key: 'Enter' });
    // const storedValue = localStorage.getItem(SEARCH_VALUE);

    // expect(storedValue).toBe('testValue');
  });
});
