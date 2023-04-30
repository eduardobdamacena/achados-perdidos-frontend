import React from 'react';
import { Button, Container, Snackbar, Typography } from '@mui/material';
import { FormElementsContainer } from '@styles/pages/object.style.page';
import Head from 'next/head';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import Table, { TablePagination } from 'ui/components/data-display/Table/Table';
import RoudedButton from 'ui/components/inputs/RoudedButton/RoudedButton';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Link from 'next/link';
import useMyObjects from 'data/hooks/pages/useMyObjects.page';
import { grey } from '@mui/material/colors';
import { RemoveDialog } from './_object-dialogs';
import { ObjectInterface } from 'data/@types/ObjectInterface';

export const MyObjects: React.FC = () => {
    const {
        objects,
        currentPage,
        setCurrentPage,
        totalPages,
        itemsPerPage,
        removeObject,
        messageSnackbar,
        objectRemove,
        setObjectRemove,
        setMessageSnackbar,
    } = useMyObjects();
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
                {objects.length > 0 ? (
                    <>
                        <Table
                            data={objects}
                            itemsPerPage={itemsPerPage}
                            currentPage={currentPage}
                            rowElement={(item, index) => (
                                <TableRow key={index}>
                                    <TableCell>{item.nome}</TableCell>
                                    <TableCell>{item.descricao}</TableCell>
                                    <TableCell>
                                        <Link
                                            href={`/edit-object?id=${item.id}`}
                                        >
                                            Editar
                                        </Link>
                                        <span>, </span>
                                        <Link href={'#'}>
                                            <a
                                                onClick={() => {
                                                    setObjectRemove(item);
                                                }}
                                            >
                                                Apagar
                                            </a>
                                        </Link>
                                        <span>, </span>
                                        <Link
                                            href={`/inform-owner?id=${item.id}`}
                                        >
                                            Informar Entrega
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            )}
                            header={['Nome', 'Descrição', 'Ações']}
                        ></Table>
                        {totalPages > 1 && (
                            <TablePagination
                                count={totalPages}
                                page={currentPage}
                                onChange={(_event, nextPage) => {
                                    setCurrentPage(nextPage);
                                }}
                            />
                        )}
                    </>
                ) : (
                    <Typography color={'grey'}>
                        Nenhum objeto cadastrado ainda
                    </Typography>
                )}

                <Link href="/new-object">
                    <RoudedButton variant="contained">Novo Objeto</RoudedButton>
                </Link>
            </FormElementsContainer>
            <Snackbar
                open={messageSnackbar.length > 0}
                message={messageSnackbar}
                autoHideDuration={2000}
                onClose={() => {
                    setMessageSnackbar('');
                }}
            />
            {objectRemove.id && (
                <RemoveDialog
                    object={objectRemove}
                    onCancel={() => {
                        setObjectRemove({} as ObjectInterface);
                    }}
                    onConfirm={removeObject}
                />
            )}
        </Container>
    );
};
