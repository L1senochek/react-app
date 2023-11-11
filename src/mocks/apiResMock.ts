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
  data: {
    mal_id: 1,
    url: 'https://test.com/anime',
    images: {
      jpg: {
        image_url: 'https://test.com/image.jpg',
        small_image_url: 'https://test.com/small_image.jpg',
        large_image_url: 'https://test.com/large_image.jpg',
      },
      webp: {
        image_url: 'https://test.com/image.webp',
        small_image_url: 'https://test.com/small_image.webp',
        large_image_url: 'https://test.com/large_image.webp',
      },
    },
    trailer: {
      youtube_id: 'test',
      url: 'https://test.com/trailer',
      embed_url: 'https://test.com/embed_trailer',
    },
    approved: true,
    titles: [{ type: 'main', title: 'Test Anime' }],
    title: 'Test Anime',
    title_english: 'Test Anime (English)',
    title_japanese: 'アニメ',
    title_synonyms: ['Anime Test', 'Test Anime'],
    type: 'TV',
    source: 'Manga',
    episodes: 12,
    status: 'Finished',
    airing: true,
    aired: {
      from: '2020-01-01',
      to: '2023-03-31',
      prop: {
        from: {
          day: 1,
          month: 1,
          year: 2022,
        },
        to: {
          day: 31,
          month: 3,
          year: 2022,
        },
        string: 'Test 2023',
      },
    },
    duration: '24 min per episode',
    rating: 'PG-13',
    score: 8.5,
    scored_by: 1000,
    rank: 1,
    popularity: 500,
    members: 2000,
    favorites: 300,
    synopsis: 'This is an test anime synopsis.',
    background: 'This is an test background information.',
    season: 'Test',
    year: 2022,
    broadcast: {
      day: 'Sunday',
      time: '20:00',
      timezone: 'JST',
      string: 'Sundays at 20:00 (JST)',
    },
    producers: [
      {
        mal_id: 2,
        type: 'anime',
        name: 'Test',
        url: 'https://test.com/test',
      },
    ],
    licensors: [
      {
        mal_id: 3,
        type: 'anime',
        name: 'Test',
        url: 'https://test.com/test',
      },
    ],
    studios: [
      {
        mal_id: 4,
        type: 'anime',
        name: 'Test Studio',
        url: 'https://test.com/test_studio',
      },
    ],
    genres: [
      {
        mal_id: 5,
        type: 'anime',
        name: 'Test',
        url: 'https://test.com/genre/test',
      },
    ],
    explicit_genres: [
      {
        mal_id: 6,
        type: 'anime',
        name: 'Test',
        url: 'https://test.com/genre/test',
      },
    ],
    themes: [
      {
        mal_id: 7,
        type: 'anime',
        name: 'Test',
        url: 'https://test.com/theme/test',
      },
    ],
    demographics: [
      {
        mal_id: 8,
        type: 'anime',
        name: 'Test',
        url: 'https://test.com/demographic/test',
      },
    ],
    relations: [
      {
        relation: 'Prequel',
        entry: [
          {
            mal_id: 9,
            type: 'anime',
            name: 'Test',
            url: 'https://test.com/test',
          },
        ],
      },
    ],
    theme: {
      openings: ['Opening 1', 'Opening 2'],
      endings: ['Ending 1', 'Ending 2'],
    },
    external: [
      { name: 'Official Site', url: 'https://test.com/official_site' },
    ],
    streaming: [{ name: 'Test', url: 'https://test.com/test' }],
  },
};

export default apiResMock;
