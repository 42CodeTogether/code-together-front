/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Nav.stories.tsx                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jaeskim <jaeskim@student.42seoul.kr>       +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/02/12 17:51:43 by jaeskim           #+#    #+#             */
/*   Updated: 2021/02/14 19:00:50 by jaeskim          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from "react";
import StoryRouter from "storybook-react-router";
import { Story, Meta } from "@storybook/react/types-6-0";

import Nav, { NavProps } from ".";
import Link from "./Link";
import SideNav from "./SideNav";
import shortid from "shortid";

export default {
  title: "Component/Nav",
  component: Nav,
  parameters: {
    docs: {
      inlineStories: false,
    },
  },
  decorators: [StoryRouter()],
  subcomponents: { Link, SideNav },
} as Meta;

const Template: Story<NavProps<{}>> = (args) => <Nav {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  links: [
    {
      id: shortid.generate(),
      to: "/projects",
      children: "Project List",
    },
    {
      id: shortid.generate(),
      to: "/profile",
      children: "Profile",
    },
  ],
} as NavProps<{}>;
