import Container from '@mui/material/Container';
import useCadastro from 'data/hooks/pages/useRegisterUserPlace.page';
import { NextPage } from 'next';
import Head from 'next/head';
import { FormProvider } from 'react-hook-form';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import PlaceForm from 'ui/components/inputs/UserForms/forms/PlaceForm';
import { NewUserForm } from 'ui/components/inputs/UserForms/forms/NewUserForm';
import { PicturePlaceForm } from 'ui/components/inputs/UserForms/UserForm';
import {
    ButtonSubmit,
    FormContainer,
    FormDataBorder,
} from 'ui/components/inputs/UserForms/UserForm.style';
import { Typography } from '@mui/material';

const RegisterUserPlace: NextPage = () => {
    const { formMethods, onSubmit, isWaitingReponse } = useCadastro();
    return (
        <Container>
            <Head>Cadastro</Head>
            <PageTitle
                title="Cadastre-se na plataforma"
                subtitle="Primeiros vamos precisar de alguns dados pessoais"
            />
            <FormProvider {...formMethods}>
                <form onSubmit={formMethods.handleSubmit(onSubmit)}>
                    <FormContainer>
                        <FormDataBorder>
                            <Typography color={'GrayText'}>
                                Dados do local
                            </Typography>
                            <PlaceForm />
                            <PicturePlaceForm />
                        </FormDataBorder>
                        <FormDataBorder style={{ marginTop: '32px' }}>
                            <Typography color={'GrayText'}>
                                Dados do administrador local
                            </Typography>
                            <NewUserForm />
                        </FormDataBorder>

                        <ButtonSubmit
                            type="submit"
                            variant="contained"
                            disabled={isWaitingReponse}
                            loading={isWaitingReponse}
                        >
                            Cadastre-se
                        </ButtonSubmit>
                    </FormContainer>
                </form>
            </FormProvider>
        </Container>
    );
};

export default RegisterUserPlace;
