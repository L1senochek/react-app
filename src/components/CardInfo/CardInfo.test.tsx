import { cleanup, render, screen } from '@testing-library/react';
import { vi, describe, test, expect, afterEach } from 'vitest';
import CardInfo from './CardInfo';

afterEach(() => {
  cleanup();
  vi.resetModules();
  vi.clearAllMocks();
});

vi.mock('@/store/hooks', () => ({
  useAppDispatch: vi.fn(),
}));

describe('CardInfo:', () => {
  test('- loading indicator is displayed while fetching data', async () => {
    vi.mock('@/api/getAnime', () => ({
      useGetAnimeIdQuery: () => ({ data: undefined, isLoading: true }),
    }));

    render(<CardInfo cardId="1" />);

    const loadingIndicator = screen.getByTestId('loading');
    expect(loadingIndicator).toBeTruthy();
  });
});
