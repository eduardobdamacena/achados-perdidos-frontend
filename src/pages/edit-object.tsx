import EditObject from '@partials/objects/_edit-object';
import { ObjectProvider } from 'data/context/ObjectContext';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Container, Typography } from '@mui/material';

const EditObjectPage: NextPage = () => {
    const router = useRouter();
    if (router.query.id) {
        return (
            <ObjectProvider>
                <EditObject id={router.query.id as string} />
            </ObjectProvider>
        );
    } else {
        return (
            <Container>
                <Typography align="center" style={{ alignItems: 'center' }}>
                    ID do objeto não informado.
                </Typography>
            </Container>
        );
    }
};

export default EditObjectPage;
