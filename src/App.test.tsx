import { describe, it } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from './App';

describe('App', () => {
  it('App renders: ', () => {
    render(<App />);

    screen.debug();
  });
});

export function sum(a: number, b: number) {
  return a + b;
}

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
