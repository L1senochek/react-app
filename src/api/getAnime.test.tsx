import { afterEach, describe, expect, test, vi } from 'vitest';
import apiResMock from '../mocks/apiResMock';
import getAnime from './getAnime';
import { API_URL } from '../utils/constants/constants';

const fetchMock = vi.fn();
globalThis.fetch = fetchMock;

describe('getAnime: ', () => {
  test('- correct URL parameters.', async () => {
    fetchMock.mockResolvedValue({
      json: vi.fn().mockResolvedValue(apiResMock),
    });

    await getAnime(1, 25, 'naruto');

    expect(fetchMock).toHaveBeenCalledWith(
      `${API_URL}?sfw=true&q=naruto&page=1&limit=25`
    );
  });
});

afterEach(() => {
  fetchMock.mockReset();
});
