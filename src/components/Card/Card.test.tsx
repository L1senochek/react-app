import { describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Card from './Card';
import { MainPageProvider } from '../../context/MainPageContext/MainPageContext';
import apiResDataMock from '../../mocks/apiResDataMock';
import IAnimeData from '../../model/api/IAnimeData';
import CardInfo from '../CardInfo/CardInfo';

describe('Card: ', () => {
  test('- the Card component renders the relevant card data', () => {
    render(
      <MemoryRouter>
        <MainPageProvider>
          <Card {...(apiResDataMock as IAnimeData)} />
        </MainPageProvider>
      </MemoryRouter>
    );

    const nameElement = screen.getByText(apiResDataMock.title);
    expect(nameElement).toBeDefined();

    const scoreElement = screen.getByText(/Score:/);
    expect(scoreElement).toBeDefined();

    const statusElement = screen.getByText(/Status:/);
    expect(statusElement).toBeDefined();

    const typeElement = screen.getByText(/Type:/);
    expect(typeElement).toBeDefined();

    const episodesElement = screen.getByText(/Episodes:/);
    expect(episodesElement).toBeDefined();

    const durationElement = screen.getByText(/Duration:/);
    expect(durationElement).toBeDefined();
  });

  test('- clicking on a card opens a detailed card component.', async () => {
    render(
      <MemoryRouter initialEntries={['/mock/path']}>
        <Routes>
          <Route
            path="/mock/path"
            element={<Card {...(apiResDataMock as IAnimeData)} />}
          />
          <Route
            path="/:pageNum/:limitNum/:query/:cardId"
            element={<CardInfo />}
          />
        </Routes>
      </MemoryRouter>
    );

    const cardLink = screen.getByText(/Test Anime/i);
    fireEvent.click(cardLink);
  });
});
