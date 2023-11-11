import { afterEach, describe, expect, test, vi } from 'vitest';
import getAnimeId from './getAnimeId';
import { API_URL } from '../utils/constants/constants';

const fetchMock = vi.fn();
globalThis.fetch = fetchMock;

describe('getAnimeId: ', () => {
  const animeId = '123';
  const mockResponse = { key: 'value' };
  const mockResolvedValue = {
    json: vi.fn().mockResolvedValue(mockResponse),
  };

  test('- get request with correct URL with id.', async () => {
    fetchMock.mockResolvedValue(mockResolvedValue);
    await getAnimeId(animeId);
    expect(fetchMock).toHaveBeenCalledWith(`${API_URL}/${animeId}`);
  });

  test('- get request with correct URL when id is not provided (id by default "1").', async () => {
    fetchMock.mockResolvedValue(mockResolvedValue);
    await getAnimeId();
    expect(fetchMock).toHaveBeenCalledWith(`${API_URL}/1`);
  });

  test('- returns JSON response.', async () => {
    fetchMock.mockResolvedValue(mockResolvedValue);
    expect(await getAnimeId(animeId)).toEqual(mockResponse);
  });
});

afterEach(() => {
  fetchMock.mockReset();
});
