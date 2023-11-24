import { assert, describe, test } from 'vitest';
import arrResCardReducer, { setArrResCard } from '../slices/arrResCardSlice';
import apiResDataMock from '../../mocks/apiResDataMock';

describe('arrResCardSlice: ', () => {
  test('- arrResCard is updated correctly', () => {
    const initialState = { arrResCard: undefined };
    const newState = arrResCardReducer(
      initialState,
      setArrResCard(apiResDataMock)
    );

    assert.equal(newState.arrResCard, apiResDataMock);
  });
});
