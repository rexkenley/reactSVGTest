import { ComponentStory, ComponentMeta } from "@storybook/react";

import svgFile from "./Orange_sport_car.svg";
import svgString from "./orangeSportCar";
import SvgCar, { ISvgCarProps } from "./SvgCar";

export default {
  title: "SvgCar",
  component: SvgCar,
} as ComponentMeta<typeof SvgCar>;

const Template: ComponentStory<typeof SvgCar> = (args: ISvgCarProps) => (
  <SvgCar {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const SvgFile = Template.bind({});
SvgFile.args = { svgSource: svgFile };

export const SvgString = Template.bind({});
SvgString.args = { svgSource: svgString };
