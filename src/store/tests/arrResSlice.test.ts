import { assert, describe, test } from 'vitest';
import arrResReducer, { setArrRes } from '../slices/arrResSlice';
import apiResMock from '../../mocks/apiResMock';

describe('arrResSlice: ', () => {
  test('- arrRes is updated correctly', () => {
    const initialState = { arrRes: undefined };
    const newState = arrResReducer(initialState, setArrRes(apiResMock));

    assert.equal(newState.arrRes, apiResMock);
  });
});
