import { Container } from '@mui/material';
import { LoginContainer } from '@styles/pages/login.style';
import useLogin from 'data/hooks/pages/useLogin.page';
import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import RoudedButton from 'ui/components/inputs/RoudedButton/RoudedButton';
import { LoginForm } from 'ui/components/inputs/UserForms/UserForm';
import { FormProvider } from 'react-hook-form';
import {
    ContainerBorder,
    FormContainer,
    PageFormContainerBorder,
} from 'ui/components/inputs/UserForms/UserForm.style';

const Login: NextPage = () => {
    const { formMethods, onSubmit } = useLogin();
    return (
        <Container>
            <Head>
                <title>Login</title>
            </Head>
            <PageTitle
                title="Realizar o Login"
                subtitle="Realize o login para gerenciar os objetos cadastrados"
            />
            <FormProvider {...formMethods}>
                <form onSubmit={formMethods.handleSubmit(onSubmit)}>
                    <FormContainer>
                        <PageFormContainerBorder>
                            <LoginForm />
                        </PageFormContainerBorder>
                        <RoudedButton
                            variant="contained"
                            sx={{ justifySelf: 'center', width: '120px' }}
                            type={'submit'}
                        >
                            Entrar
                        </RoudedButton>
                    </FormContainer>
                </form>
            </FormProvider>
        </Container>
    );
};

export default Login;
