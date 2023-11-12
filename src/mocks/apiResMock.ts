import apiResDataMock from './apiResDataMock';

export const apiResMock = {
  pagination: {
    last_visible_page: 1,
    has_next_page: false,
    current_page: 1,
    items: {
      count: 15,
      total: 15,
      per_page: 15,
    },
  },
  data: [
    apiResDataMock,
    apiResDataMock,
    apiResDataMock,
    apiResDataMock,
    apiResDataMock,
    apiResDataMock,
    apiResDataMock,
    apiResDataMock,
    apiResDataMock,
    apiResDataMock,
    apiResDataMock,
    apiResDataMock,
    apiResDataMock,
    apiResDataMock,
    apiResDataMock,
  ],
};

export default apiResMock;
