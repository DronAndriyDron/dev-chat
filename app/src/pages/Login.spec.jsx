import {render, screen, cleanup,fireEvent} from '@testing-library/react'
import Login from './Login'
import  user from '@testing-library/user-event'
import {BrowserRouter} from "react-router-dom";



describe('LoginForm',()=> {
    const onSubmit = jest.fn();

    beforeEach(() => {
        onSubmit.mockClear();
        render(
            <BrowserRouter>
                <Login/>)
            </BrowserRouter>)

    })

    it('onSubmit is called when all fields pass validation', () => {
       /* const username = screen.getByRole('textbox', {name: 'username'});
        user.type(username,'andriy')*/
    });

});