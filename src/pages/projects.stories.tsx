import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import storyRouterDecorator from "storybook-react-router";

import ProjectsPage, { ProjectsPageProps } from "./projects";
import Nav from "../components/Nav";

export default {
  title: "Page/ProjectsPage",
  component: ProjectsPage,
  subcomponents: { Nav },
  parameters: {
    docs: {
      inlineStories: false,
    },
  },
  decorators: [storyRouterDecorator()],
} as Meta;

const Template: Story<ProjectsPageProps> = (args) => <ProjectsPage {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {} as ProjectsPageProps;
