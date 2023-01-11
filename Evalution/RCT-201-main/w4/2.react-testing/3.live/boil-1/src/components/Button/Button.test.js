import Button from "./Button"
import React from "react";
import {render,screen,fireEvent,cleanup} from "@testing-library/react";

//reaction

beforeAll(()=>{
    console.log("beforeAll")
})

it ("should render",()=>{
    render(<Button />)
   expect(screen.getByTestId("button")).toBeInTheDocument();
})

it ("should render with label",()=>{
    let label="Hello World"
    render(<Button label={label}/>)
   expect(screen.getByTestId("button")).toBeInTheDocument();
   expect(screen.getByTestId("button")).toHaveTextContent(label);
})

it("should execute onClick function when clicked",()=>{
    let fn=jest.fn(); //mock Function
    render(<Button label="Button" onClick={fn}/>);
    fireEvent.click(screen.getByTestId("button"));
    expect(fn).toBeCalled();
})

afterEach(()=>{
    cleanup()
})