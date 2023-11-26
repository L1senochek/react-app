import { assert, describe, test } from 'vitest';
import arrResReducer, { setArrRes } from '../slices/arrResSlice';
import apiResMock from '@/tests/mocks/apiResMock';
import IAnime from '@/model/api/IAnime';

const arrResMock = {
  arrRes: apiResMock,
};

describe('arrResSlice: ', () => {
  test('- arrRes is updated correctly', () => {
    const initialState = { arrRes: undefined };
    const newState = arrResReducer(
      initialState,
      setArrRes(arrResMock as unknown as IAnime)
    );

    assert.equal(newState.arrRes, arrResMock as unknown as IAnime);
  });
});
