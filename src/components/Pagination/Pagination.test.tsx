import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import Pagination from './Pagination';
import { NextRouter } from 'next/router';
import IAnime from '@/model/api/IAnime';
import { Provider } from 'react-redux';
import configStore from '@/store/configStore';
import apiResMock from '@/tests/mocks/apiResMock';

vi.mock('next/navigation', () => ({
  useSearchParams: vi.fn(() => ({
    get: vi.fn((param) => (param === 'page' ? '1' : '25')),
  })),
}));

const initialState = configStore({
  searchValue: {
    searchValue: 'mockSearchValue',
  },
});

describe('Pagination:', () => {
  test('- the component updates URL query parameter when page changes', () => {
    const mockRouter = {
      basePath: '',
      pathname: '/',
      route: '/',
      query: {},
      asPath: '/',
      push: vi.fn(),
      prefetch: vi.fn(),
    };

    render(
      <RouterContext.Provider
        value={mockRouter as unknown as NextRouter | null}
      >
        <Provider store={initialState}>
          <Pagination data={apiResMock as unknown as IAnime} />
        </Provider>
      </RouterContext.Provider>
    );

    expect(screen.getByText('2')).toBeDefined();
  });
});
