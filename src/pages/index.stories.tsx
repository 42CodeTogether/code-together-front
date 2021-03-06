import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import storyRouterDecorator from "storybook-react-router";

import HomePage, { HomePageProps } from "./index";
import Nav from "../components/Nav";

export default {
  title: "Page/HomePage",
  component: HomePage,
  subcomponents: { Nav },
  parameters: {
    docs: {
      inlineStories: false,
    },
  },
  decorators: [storyRouterDecorator()],
} as Meta;

const Template: Story<HomePageProps> = (args) => <HomePage {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {} as HomePageProps;
