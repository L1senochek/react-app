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
});

afterEach(() => {
  fetchMock.mockReset();
});
