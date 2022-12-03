import { ComponentMeta, ComponentStory } from '@storybook/react';
import Header from './Header';

export default {
    title: 'surfaces/Header',
    component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => {
    return <Header {...args} />;
};
export const Default = Template.bind({});
Default.args = {
    userPlace: {
        id: 1,
        imagem: '',
        nome: 'Empresa 01',
        descricao: 'Informática',
        contato: '28 99999-9999',
        endereco: 'Rua 01',
        links: [],
        usuario: {
            id: 1,
            nome: 'João',
            email: 'joao@mail.com',
        },
    },
};
