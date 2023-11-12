import { describe, expect, test } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import LimitPages from './LimitPages';
import {
  AVG_LIMIT_PAGES,
  LIMIT_PATH_PART,
  MAX_LIMIT_PAGES,
  MIN_LIMIT_PAGES,
  PAGE_PATH_PART,
} from '../../utils/constants/constants';

describe('LimitPages: ', () => {
  test('- renders the limit pages buttons.', async () => {
    render(
      <MemoryRouter
        initialEntries={[`/${PAGE_PATH_PART}1/${LIMIT_PATH_PART}10`]}
      >
        <Routes>
          <Route
            path={`/${PAGE_PATH_PART}:pageNum/${LIMIT_PATH_PART}:limitNum/`}
            element={<LimitPages />}
          />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(`${MIN_LIMIT_PAGES}`));
      expect(screen.getByText(`${AVG_LIMIT_PAGES}`));
      expect(screen.getByText(`${MAX_LIMIT_PAGES}`));
    });
  });
});
