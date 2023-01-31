import { Container, Typography } from '@mui/material';
import useLogin from 'data/hooks/pages/useLogin.page';
import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import { LoginForm } from 'ui/components/inputs/UserForms/UserForm';
import { FormProvider } from 'react-hook-form';
import {
    ButtonSubmit,
    FormContainer,
    FormDataBorder,
} from 'ui/components/inputs/UserForms/UserForm.style';

const Login: NextPage = () => {
    const {
        externalServicesState,
        isWaitingReponse,
        errorLogin,
        formMethods,
        onSubmit,
    } = useLogin();
    return (
        <Container>
            <Head>
                <title>Login</title>
            </Head>
            <PageTitle
                title="Realizar o login"
                subtitle="Realize o login para gerenciar os objetos cadastrados"
            />
            <FormProvider {...formMethods}>
                <form onSubmit={formMethods.handleSubmit(onSubmit)}>
                    <FormContainer>
                        <FormDataBorder>
                            <LoginForm />
                        </FormDataBorder>
                        <ButtonSubmit
                            variant="contained"
                            type={'submit'}
                            disabled={
                                isWaitingReponse ||
                                externalServicesState?.externalServices
                                    ?.length === 0
                            }
                            loading={isWaitingReponse}
                        >
                            Entrar
                        </ButtonSubmit>
                        {errorLogin && (
                            <Typography
                                sx={{ textAlign: 'center' }}
                                color={'error'}
                            >
                                {errorLogin}
                            </Typography>
                        )}
                    </FormContainer>
                </form>
            </FormProvider>
        </Container>
    );
};

export default Login;
