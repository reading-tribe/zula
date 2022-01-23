import { Alert } from "react-bootstrap";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Alert",
  component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => (
  <Alert {...args}> Book </Alert>
);

export const Primary = Template.bind({});

Primary.args = {
  variant: "primary",
};

export const Secondary = Template.bind({});

Secondary.args = {
  variant: "secondary",
};

export const Success = Template.bind({});

Success.args = {
  variant: "success",
};

export const Danger = Template.bind({});

Danger.args = {
  variant: "danger",
};

export const Warning = Template.bind({});

Warning.args = {
  variant: "warning",
};

export const Light = Template.bind({});

Light.args = {
  variant: "light",
};

export const Info = Template.bind({});

Info.args = {
  variant: "info",
};

export const Dark = Template.bind({});

Dark.args = {
  variant: "dark",
};
