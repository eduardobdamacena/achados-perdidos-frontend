import { Container, Typography, CircularProgress } from '@mui/material';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import Local from 'ui/components/data-display/Local/Local';
import { useRouter } from 'next/router';
import useSearchLocations from 'data/hooks/pages/useSearchLocations.page';
import Head from 'next/head';
import { TablePagination } from 'ui/components/data-display/Table/Table';

export const ListLocal = () => {
    const router = useRouter(),
        searchTerm = router.query.search;
    const { listData, isFetching, currentPage, setCurrentPage, totalPages } =
        useSearchLocations(searchTerm as string);

    return (
        <Container sx={{ marginBottom: '54px' }}>
            <Head>
                <title>Locais</title>
            </Head>
            {isFetching ? (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <CircularProgress />
                </div>
            ) : (
                <>
                    <PageTitle
                        title="Locais encontrados"
                        subtitle={
                            'Clique sobre um local para ver os objetos que estão disponíveis no setor de achados e perdidos.'
                        }
                    />
                    {listData.length == 0 && (
                        <Typography color={'grey'} align="center">
                            Nenhum local encontrado
                        </Typography>
                    )}
                    {listData.map((item) => (
                        <Local key={item.id} place={item} />
                    ))}
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
                </>
            )}
        </Container>
    );
};
