// TODO
import { render, screen,fireEvent } from '@testing-library/react';

import Button from './Button';


describe("renders button", () => {
  it("should render correctly", () => {
    render(<Button />);
  });
});


  test('onClick should call handleClick no change', () => {
    const fn=jest.fn();
    const label="Hello";
    render(<Button  label={label} handleClick={fn}/>);

    const buttonElement = screen.getByTestId("button");
    fireEvent.click(buttonElement);
    expect(fn).toBeCalledTimes(0);
  });