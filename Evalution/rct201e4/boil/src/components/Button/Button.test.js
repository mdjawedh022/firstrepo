// TODO
import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button Component", () => {
  it("should render correctly", () => {
    render(<Button />);
  });
});

test("renders button with testid 'button'", () => {
  render(<Button />);
  const linkElement = screen.getByTestId("demo");
  expect(linkElement).toBeInTheDocument();
});

test("onClick should call onClick Function once", () => {
  const fn = jest.fn();
  render(<Button onClick={fn} />);

  const buttonElement = screen.getByTestId("demo");
  fireEvent.click(buttonElement);
  expect(fn).toBeCalledTimes(1);
});