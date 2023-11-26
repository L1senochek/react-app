import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Cards from './Cards';
import IAnime from '@/model/api/IAnime';
import apiResMock from '@/tests/mocks/apiResMock';

describe('Cards: ', () => {
  test('- component Cards renders correctly', () => {
    const data = apiResMock;

    render(<Cards data={data as unknown as IAnime} />);

    const card1Title = screen.queryByText(/Test Anime 1/);
    const card2Title = screen.queryByText(/Test Anime 2/);

    expect(card1Title).toBeDefined();
    expect(card2Title).toBeDefined();
  });

  test('- the component renders the specified number of cards', () => {
    const data = apiResMock;
    render(<Cards data={data as unknown as IAnime} />);

    const cards = screen.getAllByTestId('card-link');
    expect(cards).toHaveLength(15);
  });

  test('- an appropriate message is displayed if no cards are present', () => {
    const data = {
      data: [],
    };

    render(<Cards data={data as unknown as IAnime} />);

    const message = screen.getByText('Sorry, nothing found.');
    expect(message).toBeDefined();
  });
});
