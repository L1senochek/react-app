import { describe, it } from 'vitest';
import React, { ReactElement } from 'react';
import { render, screen } from '@testing-library/react';

describe('App', () => {
  const App = ({ title }: { title: string }): ReactElement => {
    return <h1 title={title}>Test h1</h1>;
  };

  it('renders headline', () => {
    render(<App title="React" />);

    screen.debug();
  });
});
