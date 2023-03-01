import { NextPage } from 'next';
import Head from 'next/head';
import { Container } from '@mui/material';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import {
    ButtonSubmit,
    FormContainer,
    FormDataBorder,
} from 'ui/components/inputs/UserForms/UserForm.style';
import { NewObjectForm } from 'ui/components/inputs/UserForms/forms/NewObjectForm';
import { FormProvider } from 'react-hook-form';
import useNewObject from 'data/hooks/pages/useNewObject';

const NewObjectPage: NextPage = () => {
    const { formMethods, isWaitingResponse, onNewObjectFormSubmit } =
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
                        </FormDataBorder>
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
