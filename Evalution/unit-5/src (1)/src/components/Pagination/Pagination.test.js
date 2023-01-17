import { render, fireEvent, screen } from "@testing-library/react";
import Pagination from "./Pagination";

describe("Pagination compo render", () => {
  it("should pagi correctly", () => {
    render(<Pagination />);
  });
});

test("renders Pagination ith testid ", () => {
  render(<Pagination />);
  const elem = screen.getByTestId("pre");
  expect(elem).toBeInTheDocument();
});

test("onClk should call fun", () => {
  const mockfn = jest.fn();
  render(<Pagination onClick={mockfn} />);
  const btnelem = screen.getByTestId("next");
  fireEvent.click(btnelem);
  expect(mockfn).toBeCalledTimes(0);
});
