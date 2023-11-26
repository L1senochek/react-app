import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import { vi, describe, test, expect, afterEach, beforeEach } from 'vitest';
import CardDescription from './CardDescription';
import IAnimeResData from '@/model/api/IAnimeResData';
import apiResDataMock from '@/tests/mocks/apiResDataMock';
import Modal from '../Modal/Modal';

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

const mockAnimeData = {
  data: apiResDataMock,
};

beforeEach(() => {
  vi.clearAllMocks();
});

describe('CardDescription:', () => {
  test('- the detailed card component correctly displays the detailed card data', async () => {
    render(
      <CardDescription arrResCard={mockAnimeData as unknown as IAnimeResData} />
    );

    await waitFor(() => {
      const titleElement = screen.getByText(mockAnimeData.data.title);
      const scoreElement = screen.getByText(`${mockAnimeData.data.score}`);
      const statusElement = screen.getByText(`${mockAnimeData.data.status}`);

      expect(titleElement).toBeDefined();
      expect(scoreElement).toBeDefined();
      expect(statusElement).toBeDefined();
    });
  });

  test('- clicking the close button hides the component', async () => {
    vi.mock('@/api/getAnime', () => ({
      useGetAnimeIdQuery: () => ({ data: undefined, isLoading: false }),
    }));
    const { unmount } = render(
      <Modal>
        <CardDescription
          arrResCard={mockAnimeData as unknown as IAnimeResData}
        />
      </Modal>
    );

    const closeButton = screen.getByTestId('close-btn-card');
    fireEvent.click(closeButton);
    await waitFor(() => {
      expect(backMock).toHaveBeenCalled();
    });
    unmount();
  });
});
