// TODO
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("its for button compo", () => {
  it("should render correctly", () => {
    render(<Button />);
  });
});

test("renders btn testid", () => {
  render(<Button />);
  const linkk = screen.getByTestId("my");
  expect(linkk).toBeInTheDocument();
});

test("call onClick fun", () => {
  const mockfn = jest.fn();
  render(<Button onClick={mockfn} />);

  const btn = screen.getByTestId("my");
  fireEvent.click(btn);
  expect(mockfn).toBeCalledTimes(1);
});
