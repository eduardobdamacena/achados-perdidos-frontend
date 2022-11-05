import Container from '@mui/material/Container';
import useCadastro from 'data/hooks/pages/useCadastroLocal.page';
import { NextPage } from 'next';
import Head from 'next/head';
import { FormProvider } from 'react-hook-form';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import RoudedButton from 'ui/components/inputs/RoudedButton/RoudedButton';
import PlaceForm from 'ui/components/inputs/UserForms/forms/PlaceForm';
import { NewUserForm } from 'ui/components/inputs/UserForms/forms/NewUserForm';
import { PicturePlaceForm } from 'ui/components/inputs/UserForms/UserForm';
import {
    FormContainer,
    PageFormContainerBorder,
} from 'ui/components/inputs/UserForms/UserForm.style';
import { Typography } from '@mui/material';

const CadastroLocal: NextPage = () => {
    const { formMethods, onSubmit } = useCadastro();
    return (
        <Container sx={{ marginBottom: '40px' }}>
            <Head>Cadastro</Head>
            <PageTitle
                title="Cadastre-se na Plataforma"
                subtitle="Primeiros vamos precisar de alguns dados pessoais"
            />
            <FormProvider {...formMethods}>
                <form onSubmit={formMethods.handleSubmit(onSubmit)}>
                    <FormContainer>
                        <PageFormContainerBorder>
                            <Typography color={'GrayText'}>
                                Dados do local
                            </Typography>
                            <PlaceForm />
                            <PicturePlaceForm />
                        </PageFormContainerBorder>
                        <PageFormContainerBorder>
                            <Typography color={'GrayText'}>
                                Dados do administrador local
                            </Typography>
                            <NewUserForm />
                        </PageFormContainerBorder>
                        <RoudedButton
                            type="submit"
                            variant="contained"
                            sx={{ justifySelf: 'center', width: '120px' }}
                        >
                            Cadastrar
                        </RoudedButton>
                    </FormContainer>
                </form>
            </FormProvider>
        </Container>
    );
};

export default CadastroLocal;
