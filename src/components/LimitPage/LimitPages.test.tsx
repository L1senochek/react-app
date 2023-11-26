import { afterEach, describe, expect, test, vi } from 'vitest';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import LimitPages from './LimitPages';
import {
  AVG_LIMIT_PAGES,
  MAX_LIMIT_PAGES,
  MIN_LIMIT_PAGES,
} from '@/utils/constants/constants';
import { Provider } from 'react-redux';
import configStore from '@/store/configStore';

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    replace: vi.fn(),
  }),
  useSearchParams: vi.fn(() => ({
    get: vi.fn(),
  })),
}));

afterEach(() => {
  cleanup();
});

describe('LimitPages: ', () => {
  test('- renders the limit pages buttons.', async () => {
    const store = configStore({
      limit: { limit: '10' },
      searchValue: { searchValue: '' },
    });

    render(
      <Provider store={store}>
        <LimitPages />
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getByText(`${MIN_LIMIT_PAGES}`));
      expect(screen.getByText(`${AVG_LIMIT_PAGES}`));
      expect(screen.getByText(`${MAX_LIMIT_PAGES}`));
    });
  });
});
