import React from "react";

import TopicInput from "./TopicInput";
import {render,screen,fireEvent} from "@testing-library/react";
import { TopicType } from "../constants";

it ("should render",()=>{
    //here
    render(<TopicInput type={TopicType.Pending} onCancel={()=>{}} />)
    expect(screen.getByTestId("Input-topic")).toBeInTheDocument();
    expect(screen.getByTestId("save-topic-btn")).toBeInTheDocument();
    expect(screen.getByTestId("cancel-add-topic-btn")).toBeInTheDocument();

})

it("should type input in input box",()=>{
    render(<TopicInput type={TopicType.Pending} onCancel={()=>{}}/>)
    let inputElement=screen.getByTestId('input-topic');
    expect(inputElement.value).toBe("");
    fireEvent.change(inputElement,{target:{value:"first Topic"}})
    expect(inputElement.value).toBe("First")
})