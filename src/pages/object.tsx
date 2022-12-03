import { Container, Typography } from '@mui/material';
import { NextPage } from 'next';
import Head from 'next/head';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';

const ObjectPage: NextPage = () => {
    return (
        <Container>
            <Head>
                <title>Objetos</title>
            </Head>
            <PageTitle title="Objetos " subtitle="" />
        </Container>
    );
};

export default ObjectPage;
