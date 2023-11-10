import MainPage from './MainPage';
import { render, screen } from '@testing-library/react';
import { describe, test } from 'vitest';

describe('MainPage: ', () => {
  test('- MainPage renders. ', () => {
    render(<MainPage />);
    screen.debug();
  });
});
