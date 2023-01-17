// TODO
import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";
import Pagination from "./Pagination";

describe("Button Component", () => {
  it("should render correctly", () => {
    render(<Button />);
  });
});

test("pagination component work correctly", async () => {
    const fn = jest.fn();
    const {debug, getByTestId, getAllByTestId, findAllByTestId} = render(<Pagination handlePageChange={fn} totalPage={5} currentPage={2}/>)
  
    const pages = getAllByTestId("page-btn")
    expect(pages.length).toBe(5);
    [(null,true,null,null,null)].forEach((state,i)=>{
        expect(pages[i].textContent.trim()).toBe(`${i+1}`);
        expect(pages[i].getAttribute("disabled")).toBe(state)
    });

    fireEvent.click(pages[1])
    expect(fn).toBeCalledTimes(0)
    
    fireEvent.click(pages[4])
    expect(fn).toBeCalledTimes(1)
    expect(fn).toBeCalledWith(5)
    
    fireEvent.click(pages[4])
    expect(fn).toBeCalledTimes(2)
    expect(fn).toBeCalledWith(5)
   
});

test("onClick should call onClick Function once", () => {
  const fn = jest.fn();
  render(<Button onClick={fn} />);

  const buttonElement = screen.getByTestId("demo");
  fireEvent.click(buttonElement);
  expect(fn).toBeCalledTimes(1);
});