import { render as rtlRender, screen } from '@testing-library/react';
import React from 'react';
import { Home } from './Home';

describe('Home', () => {
    it('Displays Hello World', () => {
        render( <Home />);
        const displayText = screen.getByText(/Hello, World!/i);
        expect(displayText).toBeInTheDocument();
    });
});