/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Button.stories.tsx                                 :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jaeskim <jaeskim@student.42seoul.kr>       +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/02/12 17:51:26 by jaeskim           #+#    #+#             */
/*   Updated: 2021/02/12 17:58:00 by jaeskim          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";

import Button, { ButtonProps } from "./index";

export default {
  title: "Component/Button",
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

export const RoundButton = Template.bind({});
RoundButton.args = {
  children: "BUTTON",
  onClick: action("onClick"),
  round: true,
} as ButtonProps;

export const DisableButton = Template.bind({});
DisableButton.args = {
  children: "BUTTON",
  onClick: action("onClick"),
  disabled: true,
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

export const NonTranstionButton = Template.bind({});
NonTranstionButton.args = {
  children: "BUTTON",
  onClick: action("onClick"),
  transition: false,
} as ButtonProps;

export const CustionStyleButton = Template.bind({});
CustionStyleButton.args = {
  children: "BUTTON",
  onClick: action("onClick"),
  className: "Custom Class Name",
} as ButtonProps;
