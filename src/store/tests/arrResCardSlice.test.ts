import { assert, describe, test } from 'vitest';
import arrResCardReducer, { setArrResCard } from '../slices/arrResCardSlice';
import apiResDataMock from '@/tests/mocks/apiResDataMock';
import IAnimeResData from '@/model/api/IAnimeResData';

const arrResDataMock = {
  arrResCard: apiResDataMock,
};

describe('arrResCardSlice: ', () => {
  test('- arrResCard is updated correctly', () => {
    const initialState = { arrResCard: undefined };
    const newState = arrResCardReducer(
      initialState,
      setArrResCard(arrResDataMock as unknown as IAnimeResData)
    );

    assert.equal(
      newState.arrResCard,
      arrResDataMock as unknown as IAnimeResData
    );
  });
});
