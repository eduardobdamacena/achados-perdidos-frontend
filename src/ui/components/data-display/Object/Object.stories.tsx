import { ComponentMeta, ComponentStory } from '@storybook/react';
import ObjectComponent from './Object';

export default {
    title: 'data-display/Object',
    component: ObjectComponent,
} as ComponentMeta<typeof ObjectComponent>;

const Template: ComponentStory<typeof ObjectComponent> = (args) => (
    <ObjectComponent {...args} />
);

export const Default = Template.bind({});
Default.args = {
    object: {
        id: 1,
        nome: 'Tablet',
        descricao: 'Cor preta, fabricante x',
        data_cadastro: new Date(),
        entregue: false,
        imagem: '',
    },
    onClickSeeContact: () => {},
};
