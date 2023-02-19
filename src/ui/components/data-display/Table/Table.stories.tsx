import { ComponentMeta, ComponentStory } from '@storybook/react';
import Table from './Table';
import { TableCell, TableRow } from '@mui/material';
import Link from 'next/link';

export default {
    title: 'data-display/Table',
    component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
    header: ['Nome', 'Descrição', 'Ações'],
    data: [['Notebook Lenovo', 'Cor preta']],
    rowElement: (_item, index) => {
        const item = _item as string[];
        return (
            <TableRow key={index}>
                <TableCell>{item[0]}</TableCell>
                <TableCell>{item[1]}</TableCell>
                <TableCell>
                    <Link href={'#'}>Editar</Link>
                    <span>, </span>
                    <Link href={'#'}>Apagar</Link>
                    <span>, </span>
                    <Link href={'#'}>Informar Entrega</Link>
                </TableCell>
            </TableRow>
        );
    },
};
