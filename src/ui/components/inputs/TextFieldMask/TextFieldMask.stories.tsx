import { ComponentMeta, ComponentStory } from '@storybook/react';
import TextFieldMask from './TextFieldMask';

export default {
    title: 'inputs/TextFieldMask',
    component: TextFieldMask,
} as ComponentMeta<typeof TextFieldMask>;

const Template: ComponentStory<typeof TextFieldMask> = (args) => (
    <TextFieldMask {...args} />
);

export const Default = Template.bind({});
Default.args = {
    label: 'CPF',
    mask: '999.999.999-99',
};
