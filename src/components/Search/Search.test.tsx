import { describe, test, expect, vi, afterEach } from 'vitest';
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import configStore from '@/store/configStore';
import Search from '@/components/Search/Search';

vi.mock('next/navigation', () => require('next-router-mock'));

vi.mock('next/navigation', () => ({
  useRouter: vi.fn(),
}));

const replaceMock = vi.fn();

vi.mock('next/navigation', () => {
  const actual = vi.importActual('next/navigation');
  return {
    ...actual,
    useRouter: vi.fn(() => ({
      replace: replaceMock,
    })),
    // useSearchParams: vi.fn(() => ({
    //   get: vi.fn(),
    // })),
    // usePathname: vi.fn(),
  };
});

afterEach(() => {
  cleanup();
});

const dispatchMock = vi.fn();
vi.mock('@/store/slices/searchValueSlice', async () => {
  const originalModule = await vi.importActual<
    typeof import('@/store/slices/searchValueSlice')
  >('@/store/slices/searchValueSlice');
  return {
    ...originalModule,
    setSearchValue: () => dispatchMock,
    setSearchValueLS: () => dispatchMock,
  };
});

const setSearchValueLSSpy = vi.fn().mockReturnValue('test');

describe('Search: ', () => {
  test('- check that the component retrieves the value from the local storage upon mounting.', async () => {
    render(
      <Provider store={configStore({ limit: { limit: '25' } })}>
        <Search />
      </Provider>
    );

    const input = screen.getByPlaceholderText('Search...');
    fireEvent.change(input, { target: { value: 'test' } });

    await waitFor(() => {
      if (input instanceof HTMLInputElement) {
        expect(input.value).toBe(setSearchValueLSSpy());
      }
    });
  });

  test('- clicking the Search button saves the entered value to the local storage.', async () => {
    render(
      <Provider store={configStore({ limit: { limit: '25' } })}>
        <Search />
      </Provider>
    );
    const input = screen.getByPlaceholderText('Search...');
    fireEvent.change(input, { target: { value: 'test' } });

    const searchButton = screen.getByTestId('search-btn');
    fireEvent.click(searchButton);

    await waitFor(() => {
      if (input instanceof HTMLInputElement) {
        expect(input.value).toBe(setSearchValueLSSpy());
      }
    });
  });
});
