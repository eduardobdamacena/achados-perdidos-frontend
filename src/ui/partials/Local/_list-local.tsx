import { Container, Typography } from '@mui/material';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import Local from 'ui/components/data-display/Local/Local';
import { useRouter } from 'next/router';
import useSearchLocations from 'data/hooks/pages/useSearchLocations.page';
import Head from 'next/head';

export const ListLocal = () => {
    const router = useRouter(),
        searchTerm = router.query.search;
    const { locations } = useSearchLocations(searchTerm as string);

    return (
        <Container sx={{ marginBottom: '54px' }}>
            <Head>
                <title>Locais</title>
            </Head>
            <PageTitle
                title="Locais encontrados"
                subtitle={
                    'Clique sobre um local para ver os objetos que estão disponíveis no setor de achados e perdidos.'
                }
            />
            {locations.length == 0 && (
                <Typography color={'grey'} align="center">
                    Nenhum local encontrado
                </Typography>
            )}
            {locations.map((item) => (
                <Local key={item.id} place={item} />
            ))}
        </Container>
    );
};
