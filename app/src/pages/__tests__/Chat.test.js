import {render, screen, cleanup,fireEvent} from '@testing-library/react'
import Chat from '../Chat'
import {BrowserRouter, Routes} from "react-router-dom";
import '@testing-library/jest-dom'

test('should render Chat component', () => {

    render(
        <BrowserRouter>
            <Chat/>
        </BrowserRouter>
    );
    const chatElement = screen.getByTestId('chat')
    expect(chatElement).toBeInTheDocument();

})
