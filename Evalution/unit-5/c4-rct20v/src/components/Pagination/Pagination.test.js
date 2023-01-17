import React from "react";

import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import Pagination from './Pagination.tsx';
// import renderer from 'react-test-renderer';

// test('onClick should call handleClick Function once', () => {
//     const fn = jest.fn(); //mock function
    
//     render(<Pagination handleClick={fn} />);
//     const buttonElement = screen.data-testid("Previous_button");
//     fireEvent.click(buttonElement);
//     expect(fn).toBeCalledTimes(1);
// });


test('renders button with text ""', () => {
    const label = "Pagination"

    // const [pages, setpages] = React.useState<number>(1);

    // const updateCurrentPage = (number) => {
    //   // let value = val + page;
    //   setpages(val);
    // };
    
    render(
    <Pagination  

        label={label} />);
    const buttonElement = screen.getByText(label);
    expect(buttonElement).toBeInTheDocument();
});