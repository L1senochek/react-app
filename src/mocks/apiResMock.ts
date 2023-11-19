import apiResDataMock from './apiResDataMock';

export const apiResMock = {
  pagination: {
    last_visible_page: 2,
    has_next_page: false,
    current_page: 1,
    items: {
      count: 35,
      total: 35,
      per_page: 25,
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
