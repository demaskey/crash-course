import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { MainNav } from './MainNav';

test('Main Navigation renders successfully', () => {
    render(
        <BrowserRouter>
            <MainNav />
        </BrowserRouter>
    );
    const homeLinkElement = screen.getByText(/Home/i);
    expect(homeLinkElement).toBeInTheDocument();
    const aboutLinkElement = screen.getByText(/Counter/i);
    expect(aboutLinkElement).toBeInTheDocument();
});