import { ComponentMeta, ComponentStory } from '@storybook/react';
import RoudedButton from './RoudedButton';

export default {
    title: 'inputs/RoudedButton',
    component: RoudedButton,
} as ComponentMeta<typeof RoudedButton>;

const Template: ComponentStory<typeof RoudedButton> = (args) => (
    <RoudedButton {...args}>Click Here</RoudedButton>
);

export const Default = Template.bind({});
Default.args = {
    variant: 'contained',
};
