// Button.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Book</Button>
);

export const Primary = Template.bind({});

Primary.args = {
  variant: "primary",
  size: "lg",
};

export const Secondary = Template.bind({});

Secondary.args = {
  variant: "secondary",
  size: "lg",
};

export const Success = Template.bind({});

Success.args = {
  variant: "success",
  size: "lg",
};

export const Warning = Template.bind({});

Warning.args = {
  variant: "warning",
  size: "lg",
};
export const Danger = Template.bind({});

Danger.args = {
  variant: "danger",
  size: "lg",
};
export const Info = Template.bind({});

Info.args = {
  variant: "info",
  size: "lg",
};

export const Dark = Template.bind({});

Dark.args = {
  variant: "dark",
  size: "lg",
};

export const Light = Template.bind({});

Light.args = {
  variant: "light",
  size: "lg",
};

export const Link = Template.bind({});

Link.args = {
  variant: "link",
  size: "lg",
};

export const OutlinePrimary = Template.bind({});

OutlinePrimary.args = {
  variant: "outline-primary",
  size: "lg",
};

export const OutlineSecondary = Template.bind({});

OutlineSecondary.args = {
  variant: "outline-secondary",
  size: "lg",
};
export const OutlineSuccess = Template.bind({});

OutlineSuccess.args = {
  variant: "outline-success",
  size: "lg",
};
export const OutlineWarning = Template.bind({});

OutlineWarning.args = {
  variant: "outline-warning",
  size: "lg",
};
export const OutlineDanger = Template.bind({});

OutlineDanger.args = {
  variant: "outline-danger",
  size: "lg",
};
export const OutlineInfo = Template.bind({});

OutlineInfo.args = {
  variant: "outline-info",
  size: "lg",
};

export const OutlineDark = Template.bind({});

OutlineDark.args = {
  variant: "dark",
  size: "lg",
};
export const OutlineLight = Template.bind({});

OutlineLight.args = {
  variant: "outline-light",
  size: "lg",
};
