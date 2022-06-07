import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Logo from "../../renderer/components/ui/Logo";

export default {
  title: "Example/Logo",
  component: Logo,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => (
  <Logo alt="React Logo" {...args} />
);

export const FullLogo = Template.bind({});
FullLogo.args = {};
