import { CircularProgress, Container, Typography } from '@mui/material';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import { useRouter } from 'next/router';
import ObjectComponent from 'ui/components/data-display/Object/Object';
import { NotificationDialog } from '@partials/objects/_object-dialogs';
import Head from 'next/head';
import useLocalObjects from 'data/hooks/pages/useLocalObjects.page';
import { TablePagination } from 'ui/components/data-display/Table/Table';

export const ListLocalObjects = () => {
    const router = useRouter(),
        id = router.query.id;
    const {
        listData,
        localSelected,
        seeContact,
        setSeeContact,
        isFetching,
        currentPage,
        setCurrentPage,
        totalPages,
    } = useLocalObjects(id as string);

    return (
        <Container sx={{ marginBottom: '54px' }}>
            <Head>
                <title>Objetos</title>
            </Head>
            {isFetching ? (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <CircularProgress />
                </div>
            ) : (
                <>
                    <PageTitle
                        title={`Objetos perdidos no ${localSelected?.nome.toUpperCase()}`}
                        subtitle={
                            'Verifique na lista abaixo se o objeto que perdeu está disponível nesse local'
                        }
                    />
                    {listData.map((item) => (
                        <ObjectComponent
                            key={item.id}
                            object={item}
                            onClickSeeContact={() => setSeeContact(true)}
                        />
                    ))}
                    {listData.length == 0 && (
                        <Typography color={'grey'} align="center">
                            Nenhum objeto disponível neste local
                        </Typography>
                    )}
                    {totalPages > 1 && (
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                marginTop: '64px',
                            }}
                        >
                            <TablePagination
                                count={totalPages}
                                page={currentPage}
                                onChange={(_event, nextPage) => {
                                    setCurrentPage(nextPage);
                                }}
                            />
                        </div>
                    )}
                    {seeContact && (
                        <NotificationDialog
                            title="Dados de contato"
                            description={
                                ('Entre em contato com o departamento de achados e perdidos para resgatar o objeto: ' +
                                    localSelected?.contato) as string
                            }
                            onClose={() => setSeeContact(false)}
                        />
                    )}
                </>
            )}
        </Container>
    );
};
