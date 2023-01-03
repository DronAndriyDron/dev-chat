import {render, screen, cleanup,fireEvent} from '@testing-library/react'
import Login from '../Login'
import {BrowserRouter, Routes} from "react-router-dom";
import '@testing-library/jest-dom'

test('should render Login component', () => {

    render(
        <BrowserRouter>
            <Login/>
        </BrowserRouter>
    );
    const loginElement = screen.getByTestId('login')
    expect(loginElement).toBeInTheDocument();

})
test('should Render Login button', () => {

    render(
        <BrowserRouter>
            <Login/>
        </BrowserRouter>
    );
    const submitButton = screen.getByRole('button',{name:'Log In'})
    expect(submitButton).toBeInTheDocument()
})
test('initial conditions for login button', () => {

    render(
        <BrowserRouter>
            <Login/>
        </BrowserRouter>
    );
    const submitButton = screen.getByRole('button',{name:'Log In'})
    expect(submitButton).toBeEnabled();
})