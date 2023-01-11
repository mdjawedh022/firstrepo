import React from "react";
import Counter from "./Counter";
import {render,screen,cleanup,fireEvent} from "@testing-library/react"

it("should render",()=>{
    render(<Counter/>);
    expect(screen.getByText("Counter")).toBeInTheDocument();
expect(screen.getByTestId("coumt-value")).toBeInTheDocument();
expect(screen.getByTestId("minus-button")).toBeInTheDocument();
expect(screen.getByTestId("plus-button")).toBeInTheDocument();

expect(screen.getByTestId("count-value")).toBeInTheDocument();
})

it("should incremen count value when clicked on incremen buttont",()=>{
    render(<Counter/>);
    let incButton=screen.getByTestId("plus-button");
    let decButton=screen.getByTestId("minus-button");
    for(let i=0; i<5; i++){
        fireEvent.click()
    }
})