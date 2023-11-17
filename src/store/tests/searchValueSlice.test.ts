import { assert, describe, test } from 'vitest';
import searchValueReducer, { setSearchValue } from '../searchValueSlice';

describe('searchValueSlice: ', () => {
  test('- setSearchValue is updated correctly', () => {
    const initialState = { searchValue: '' };
    const newValue = 'newSearchValue';
    const newState = searchValueReducer(initialState, setSearchValue(newValue));

    assert.equal(newState.searchValue, newValue);
  });
});
