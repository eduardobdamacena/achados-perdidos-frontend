import React from 'react';
import { Container } from '@mui/material';
import { FormElementsContainer } from '@styles/pages/object.style.page';
import Head from 'next/head';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import Table from 'ui/components/data-display/Table/Table';
import RoudedButton from 'ui/components/inputs/RoudedButton/RoudedButton';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Link from 'next/link';
import useMyObjects from 'data/hooks/pages/useMyObjects.page';

export const MyObjects: React.FC = () => {
    const { objects } = useMyObjects();
    return (
        <Container sx={{ alignItems: 'center' }}>
            <Head>
                <title>Lista de Objetos Disponíveis</title>
            </Head>
            <PageTitle
                title="Lista de Objetos Disponíveis"
                subtitle="Lista dos objetos não entregues ao dono"
            />
            <FormElementsContainer sx={{ marginBottom: '52px' }}>
                <Table
                    data={objects}
                    rowElement={(item, index) => (
                        <TableRow key={index}>
                            <TableCell>{item.nome}</TableCell>
                            <TableCell>{item.descricao}</TableCell>
                            <TableCell>
                                <Link href={`/edit-object?id=${item.id}`}>
                                    Editar
                                </Link>
                                <span>, </span>
                                <Link href={'#'}>Apagar</Link>
                                <span>, </span>
                                <Link href={'#'}>Informar Entrega</Link>
                            </TableCell>
                        </TableRow>
                    )}
                    header={['Nome', 'Descrição', 'Ações']}
                ></Table>
                <Link href="/new-object">
                    <RoudedButton variant="contained">Novo Objeto</RoudedButton>
                </Link>
            </FormElementsContainer>
        </Container>
    );
};
