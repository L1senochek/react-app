import apiResDataMock from './apiResDataMock';

export const apiResMock = {
  pagination: {
    last_visible_page: 1,
    has_next_page: false,
    current_page: 1,
    items: {
      count: 11,
      total: 11,
      per_page: 11,
    },
  },
  data: apiResDataMock,
};

export default apiResMock;
