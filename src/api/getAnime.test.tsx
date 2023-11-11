import { afterEach, describe, expect, test, vi } from 'vitest';
import apiResMock from '../mocks/apiResMock';
import getAnime from './getAnime';
import {
  API_LIMIT,
  API_PAGE,
  API_SEARCH_PARAM,
  API_URL,
} from '../utils/constants/constants';

const fetchMock = vi.fn();
globalThis.fetch = fetchMock;

describe('getAnime: ', () => {
  const mockResolvedValue = {
    json: vi.fn().mockResolvedValue(apiResMock),
  };

  test('- get request with correct URL parameters when search is not provided.', async () => {
    fetchMock.mockResolvedValue(mockResolvedValue);
    await getAnime();

    expect(fetchMock).toHaveBeenCalledWith(
      `${API_URL}?sfw=true&${API_PAGE}1&${API_LIMIT}25`
    );
  });

  test('- get request with correct URL parameters with only page provided.', async () => {
    fetchMock.mockResolvedValue(mockResolvedValue);
    await getAnime(1);

    expect(fetchMock).toHaveBeenCalledWith(
      `${API_URL}?sfw=true&${API_PAGE}1&${API_LIMIT}25`
    );
  });

  test('- get request with correct URL parameters with only limit provided.', async () => {
    fetchMock.mockResolvedValue(mockResolvedValue);
    await getAnime(undefined, 25);

    expect(fetchMock).toHaveBeenCalledWith(
      `${API_URL}?sfw=true&${API_PAGE}1&${API_LIMIT}25`
    );
  });

  test('- get request with correct URL parameters with only search provided.', async () => {
    fetchMock.mockResolvedValue(mockResolvedValue);
    await getAnime(undefined, undefined, 'naruto');

    expect(fetchMock).toHaveBeenCalledWith(
      `${API_URL}?sfw=true&${API_PAGE}1&${API_LIMIT}25&${API_SEARCH_PARAM}naruto`
    );
  });

  test('- get request with correct URL parameters with page & limit provided.', async () => {
    fetchMock.mockResolvedValue(mockResolvedValue);
    await getAnime(1, 25);

    expect(fetchMock).toHaveBeenCalledWith(
      `${API_URL}?sfw=true&${API_PAGE}1&${API_LIMIT}25`
    );
  });

  test('- get request with correct URL parameters with all values provided.', async () => {
    fetchMock.mockResolvedValue(mockResolvedValue);
    await getAnime(1, 25, 'naruto');

    expect(fetchMock).toHaveBeenCalledWith(
      `${API_URL}?sfw=true&${API_PAGE}1&${API_LIMIT}25&${API_SEARCH_PARAM}naruto`
    );
  });

  test('- getAnime equals to the mock API response.', async () => {
    fetchMock.mockResolvedValue(mockResolvedValue);
    const result = await getAnime(1, 25, 'naruto');

    expect(result).toEqual(apiResMock);
  });
});

afterEach(() => {
  fetchMock.mockReset();
});
