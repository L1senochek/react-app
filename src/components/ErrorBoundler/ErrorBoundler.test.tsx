import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ErrorBoundler from './ErrorBoundler';

describe('ErrorBoundler: ', () => {
  test('- test error message render', () => {
    const ThrowError = () => {
      throw new Error('test');
    };

    render(
      <ErrorBoundler>
        <ThrowError />
      </ErrorBoundler>
    );

    expect(screen.getByText('Error...')).toBeDefined();
  });
});
