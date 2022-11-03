import { ComponentMeta, ComponentStory } from '@storybook/react';
import PageTitle from './PageTitle';

export default {
    title: 'data-display/PageTitle',
    component: PageTitle,
} as ComponentMeta<typeof PageTitle>;

const Template: ComponentStory<typeof PageTitle> = (args) => (
    <PageTitle {...args} />
);

export const Default = Template.bind({});
Default.args = {
    title: 'Cadastre-se na plataforma',
    subtitle: 'Primeiro vamos precisar de alguns dados pessoais',
};
