/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Nav.stories.tsx                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jaeskim <jaeskim@student.42seoul.kr>       +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/02/12 17:51:43 by jaeskim           #+#    #+#             */
/*   Updated: 2021/02/13 15:30:42 by jaeskim          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from "react";
import StoryRouter from "storybook-react-router";
import { Story, Meta } from "@storybook/react/types-6-0";

import Nav, { NavProps } from ".";
import Link from "./Link";

export default {
  title: "Component/Nav",
  component: Nav,
  parameters: {
    docs: {
      inlineStories: false,
    },
  },
  decorators: [StoryRouter()],
  subcomponents: { Link },
} as Meta;

const Template: Story<NavProps> = (args) => <Nav {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {} as NavProps;
