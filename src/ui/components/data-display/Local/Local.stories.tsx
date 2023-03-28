import { ComponentMeta, ComponentStory } from '@storybook/react';
import Local from './Local';

export default {
    title: 'data-display/Local',
    component: Local,
} as ComponentMeta<typeof Local>;

const Template: ComponentStory<typeof Local> = (args) => <Local {...args} />;

export const Default = Template.bind({});
Default.args = {
    place: {
        id: 1,
        nome: 'Loja xyz',
        descricao: 'Informática',
        contato: '28 9999-9999',
        endereco: 'Rua José Silva, 989',
        links: [],
    },
};
