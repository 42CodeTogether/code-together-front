import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import storyRouterDecorator from "storybook-react-router";

import Home, { HomeProps } from "./index";
import Nav from "../components/Nav";
import "../index.scss";

export default {
  title: "Page/Home",
  component: Home,
  subcomponents: { Nav },
  parameters: {
    docs: {
      inlineStories: false,
    },
  },
  decorators: [storyRouterDecorator()],
} as Meta;

const Template: Story<HomeProps> = (args) => <Home {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {} as HomeProps;
