import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';

import NotFound from './NotFound';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import { NextRouter } from 'next/router';

const mockRouter = {
  basePath: '',
  pathname: '/invalid-route',
  route: '/invalid-route',
  query: {},
  asPath: '/invalid-route',
};

describe('NotFound:', () => {
  test('- 404 page is displayed when navigating to an invalid route', () => {
    render(
      <RouterContext.Provider value={mockRouter as NextRouter | null}>
        <NotFound />
      </RouterContext.Provider>
    );

    const titleElement = screen.getByText('Page not found!');
    const messageElement = screen.getByText('404');
    const linkElement = screen.getByText('Go to the Home');

    expect(titleElement).toBeDefined();
    expect(messageElement).toBeDefined();
    expect(linkElement).toBeDefined();
  });
});
