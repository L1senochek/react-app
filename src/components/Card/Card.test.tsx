import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import { vi, describe, test, expect, afterEach, beforeEach } from 'vitest';
import Card from './Card';
import IAnimeData from '@/model/api/IAnimeData';
import apiResDataMock from '@/tests/mocks/apiResDataMock';
import * as getAnimeModule from '@/api/getAnime';

afterEach(() => {
  cleanup();
  vi.resetModules();
  vi.clearAllMocks();
});

const replaceMock = vi.fn();
const backMock = vi.fn();

vi.mock('next/navigation', () => {
  const actual = vi.importActual('next/navigation');
  return {
    ...actual,
    useRouter: vi.fn(() => ({
      replace: replaceMock,
      back: backMock,
    })),
  };
});

const mockDispatch = vi.fn();

vi.mock('@/store/hooks', async () => {
  const originalModule =
    await vi.importActual<typeof import('@/store/hooks')>('@/store/hooks');
  return {
    ...originalModule,
    useAppDispatch: () => mockDispatch,
  };
});

beforeEach(() => {
  vi.clearAllMocks();
});

describe('Card:', () => {
  test('- the Card component renders the relevant card data', () => {
    render(<Card {...(apiResDataMock as unknown as IAnimeData)} />);

    const titleElement = screen.getByText(apiResDataMock.title);
    const scoreElement = screen.getByText(`${apiResDataMock.score}`);
    const statusElement = screen.getByText(apiResDataMock.status);

    expect(titleElement).toBeDefined();
    expect(scoreElement).toBeDefined();
    expect(statusElement).toBeDefined();
  });

  test('- clicking on a card opens a detailed card component', async () => {
    vi.mock('next/link', () => {
      const actual = vi.importActual('next/link');
      return {
        ...actual,
        default: ({ children }: { children: React.ReactNode }) => (
          <div>{children}</div>
        ),
      };
    });

    render(<Card {...(apiResDataMock as unknown as IAnimeData)} />);

    await waitFor(() => {
      const cardLink = screen.getByTestId('card-link');
      expect(cardLink).toBeDefined();
      fireEvent.click(cardLink!);
      const detailedCardTitle = screen.getByText(apiResDataMock.title);
      expect(detailedCardTitle).toBeDefined();
    });
  });

  test('- clicking triggers an additional API call to fetch detailed information', async () => {
    vi.mock('next/link', () => {
      const actual = vi.importActual('next/link');
      return {
        ...actual,
        default: ({ children }: { children: React.ReactNode }) => (
          <div>{children}</div>
        ),
      };
    });

    vi.mock('@/api/getAnime', () => {
      const useGetAnimeIdQuery = vi.fn();
      return { useGetAnimeIdQuery };
    });

    vi.spyOn(getAnimeModule, 'useGetAnimeIdQuery');

    render(<Card {...(apiResDataMock as unknown as IAnimeData)} />);

    await waitFor(() => {
      const cardLink = screen.getByTestId('card-link');
      expect(cardLink).toBeDefined();
      fireEvent.click(cardLink!);
      const detailedCardTitle = screen.getByText(apiResDataMock.title);
      expect(detailedCardTitle).toBeDefined();
    });
  });
});
