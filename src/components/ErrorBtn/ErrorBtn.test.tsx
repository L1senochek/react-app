import { describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import ErrorBtn from './ErrorBtn';

describe('ErrorBtn: ', () => {
  test('- renders the button and generate an error on click.', () => {
    render(<ErrorBtn />);
    const errorButton = screen.getByText('Error');

    expect(() => fireEvent.click(errorButton)).toThrowError('This is error!');
  });
});
