import React from "react";
import MyButton from "./MyButton";

export default {
  title: "components/MyButton",
  component: MyButton,
};
 const Template=(args)=> <MyButton {...args} />

export const DisabledButton = Template.bind({});
DisabledButton.args={
    disabled:true,
}
export const ClickableButton = Template.bind({});
ClickableButton.args={
    onclick={("hello")}
}
