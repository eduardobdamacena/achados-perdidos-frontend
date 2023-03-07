import { NextPage } from 'next';
import Head from 'next/head';
import { Container, Typography } from '@mui/material';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import {
    ButtonSubmit,
    FormContainer,
    FormDataBorder,
} from 'ui/components/inputs/UserForms/UserForm.style';
import { NewObjectForm } from 'ui/components/inputs/UserForms/forms/NewObjectForm';
import { FormProvider } from 'react-hook-form';
import useNewObject from 'data/hooks/pages/useNewObject.page';
import { PictureObjectForm } from 'ui/components/inputs/UserForms/forms/PictureObjectForm';

const NewObjectPage: NextPage = () => {
    const { formMethods, isWaitingResponse, onNewObjectFormSubmit, error } =
        useNewObject();
    return (
        <Container sx={{ alignItems: 'center' }}>
            <Head>
                <title>Adicionar novo objeto</title>
            </Head>
            <PageTitle
                title="Adicionar novo objeto"
                subtitle="Preencha os dados do objeto que deseja adicionar"
            />
            <FormProvider {...formMethods}>
                <form
                    onSubmit={formMethods.handleSubmit(onNewObjectFormSubmit)}
                >
                    <FormContainer>
                        <FormDataBorder>
                            <NewObjectForm />
                            <PictureObjectForm />
                        </FormDataBorder>
                        {error && (
                            <Typography textAlign={'center'} color={'red'}>
                                {error}
                            </Typography>
                        )}
                        <ButtonSubmit
                            type="submit"
                            variant="contained"
                            loading={isWaitingResponse}
                            disabled={isWaitingResponse}
                        >
                            Cadastrar
                        </ButtonSubmit>
                    </FormContainer>
                </form>
            </FormProvider>
        </Container>
    );
};

export default NewObjectPage;
