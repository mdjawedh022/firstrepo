import Button from "../Button/Button";
import Slider from "./Slider";
import { render, screen, fireEvent } from "@testing-library/react";

let data = [
  { id: 1, question: "what is testing1", ans: "code test" },
  { id: 2, question: "what is testing2", ans: "code test" },
  { id: 3, question: "what is testing3", ans: "code test" },
  { id: 4, question: "what is testing4", ans: "code test" },
];

describe("should slider components", function () {
  it("should not crash on render", () => {
    render(<Slider data={data} />);
    let question = screen.getByTestId("question");
    let ans = screen.getByTestId("ans");
    expect(question).toBeInTheDocument();
    expect(ans).toBeInTheDocument();
  });

  it("should call without any data", function () {
    render(<Slider data={data} />);
    let slider = screen.getByTestId("slider");
    expect(slider).toBeInTheDocument();
  });

  it("should call next function", function () {
    let mockfn = jest.fn();
    render(<Button onClick={mockfn}>prev</Button>);
    let prev = screen.getByText("prev");
    fireEvent.click(prev);
    expect(mockfn).toBeCalled();
  });
});
