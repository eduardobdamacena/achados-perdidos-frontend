import { Container } from '@mui/material';
import { LoginContainer } from '@styles/pages/login.style';
import useLogin from 'data/hooks/pages/useLogin.page';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import RoudedButton from 'ui/components/inputs/RoudedButton/RoudedButton';
import { LoginForm } from 'ui/components/inputs/UserForms/UserForm';
import { FormProvider } from 'react-hook-form';

const Login: NextPage = () => {
    const { formMethods, onSubmit } = useLogin();
    return (
        <Container>
            <form onSubmit={formMethods.handleSubmit(onSubmit)}>
                <Head>
                    <title>Login</title>
                </Head>
                <PageTitle
                    title="Realizar o Login"
                    subtitle="Realize o login para gerenciar os objetos cadastrados"
                />
                <LoginContainer>
                    <FormProvider {...formMethods}>
                        <LoginForm />
                        <RoudedButton
                            variant="contained"
                            sx={{ justifySelf: 'center', width: '120px' }}
                            type={'submit'}
                        >
                            Entrar
                        </RoudedButton>
                    </FormProvider>
                </LoginContainer>
            </form>
        </Container>
    );
};

export default Login;
