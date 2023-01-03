import {render, screen, cleanup,fireEvent} from '@testing-library/react'
import Register from '../Register'
import {BrowserRouter, Routes} from "react-router-dom";
import '@testing-library/jest-dom'

test('should render Register component', () => {

    render(
        <BrowserRouter>
            <Register/>
        </BrowserRouter>
    );
    const registerElement = screen.getByTestId('register')
    expect(registerElement).toBeInTheDocument();

})
test('should Render Register button', () => {

    render(
        <BrowserRouter>
            <Register/>
        </BrowserRouter>
    );
    const submitButton = screen.getByRole('button',{name:'Create User'})
    expect(submitButton).toBeInTheDocument()
})
test('initial conditions for register button button', () => {

    render(
        <BrowserRouter>
            <Register/>
        </BrowserRouter>
    );
    const submitButton = screen.getByRole('button',{name:'Create User'})
    expect(submitButton).toBeEnabled();
})