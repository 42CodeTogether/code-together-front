/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Card.stories.tsx                                   :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jaeskim <jaeskim@student.42seoul.kr>       +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/02/13 12:34:00 by jaeskim           #+#    #+#             */
/*   Updated: 2021/02/13 18:23:57 by jaeskim          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";

import Card, { CardProps } from "./index";

export default {
  title: "Component/Card",
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const DefaultCard = Template.bind({});
DefaultCard.args = {
  children: (
    <div>
      <h1>Card Title</h1>
    </div>
  ),
} as CardProps;

export const RoudCard = Template.bind({});
RoudCard.args = {
  children: (
    <div>
      <h1>Card Title</h1>
    </div>
  ),
  round: true,
} as CardProps;

export const HoverEvnetCard = Template.bind({});
HoverEvnetCard.args = {
  children: (
    <div>
      <h1>Card Title</h1>
    </div>
  ),
  handleHover: action("hover Envent!"),
} as CardProps;
