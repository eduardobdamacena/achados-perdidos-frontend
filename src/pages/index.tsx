import type { NextPage } from 'next';
import { Container } from '@mui/material';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import Head from 'next/head';
import TextField from 'ui/components/inputs/TextField/TextField';
import {
    PageContainer,
    SearchButton,
    SearchContainer,
} from '@styles/pages/index.style.page';
import useIndex from 'data/hooks/pages/useIndex';

const Home: NextPage = () => {
    const { searchLocations, searchTerm, setSearchTerm, error } = useIndex();
    return (
        <PageContainer>
            <Head>
                <title>Início</title>
            </Head>
            <PageTitle
                title="Perdeu um objeto?"
                subtitle={
                    'Veja se o local onde perdeu seu objeto já está cadastrado na nossa plataforma.'
                }
            />
            <SearchContainer>
                <TextField
                    fullWidth
                    placeholder="Digite o nome do local"
                    onChange={(event) => setSearchTerm(event.target.value)}
                    value={searchTerm}
                    error={error.length > 0}
                    helperText={error}
                />
                <SearchButton variant="contained" onClick={searchLocations}>
                    Buscar
                </SearchButton>
            </SearchContainer>
        </PageContainer>
    );
};

export default Home;
