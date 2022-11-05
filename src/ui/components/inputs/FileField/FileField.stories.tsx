import { ComponentMeta, ComponentStory } from '@storybook/react';
import FileField from './FileField';

export default {
    title: 'inputs/FileField',
    component: FileField,
} as ComponentMeta<typeof FileField>;

const Template: ComponentStory<typeof FileField> = (args) => {
    return <FileField {...args} />;
};

export const Default = Template.bind({});
Default.args = {
    label: 'Selecione a imagem do local',
};
