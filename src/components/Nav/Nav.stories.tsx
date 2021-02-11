import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Nav from ".";

export default {
  title: "Example/Nav",
  component: Nav,
} as Meta;

const Template: Story = (args) => <Nav {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {};
