import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";

import Button, { ButtonProps } from ".";

export default {
  title: "Example/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  children: "BUTTON",
  onClick: action("onClick"),
} as ButtonProps;

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  children: "BUTTON",
  onClick: action("onClick"),
  them: "secondary",
} as ButtonProps;

export const RadiusButton = Template.bind({});
RadiusButton.args = {
  children: "BUTTON",
  onClick: action("onClick"),
  radius: true,
} as ButtonProps;

export const FullWidthButton = Template.bind({});
FullWidthButton.args = {
  children: "BUTTON",
  onClick: action("onClick"),
  width: "100%",
} as ButtonProps;

export const FullHeightButton = Template.bind({});
FullHeightButton.args = {
  children: "BUTTON",
  onClick: action("onClick"),
  height: "100%",
} as ButtonProps;
