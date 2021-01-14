import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders App component', () => {
    render(<App />);

    // implicit assertion
    // because getByText would throw error
    // if element wouldn't be there
    screen.getByText('Search:');

    // explicit assertion: recommended
    expect(screen.getByText('Search:')).toBeInTheDocument();

    // get input field
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
