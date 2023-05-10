import React from 'react';
import { Container } from '@mui/material';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import Head from 'next/head';
import {
    ButtonSubmit,
    FormContainer,
    FormDataBorder,
} from 'ui/components/inputs/UserForms/UserForm.style';
import useInformOwner from 'data/hooks/pages/useInformOwner.page';
import { FormProvider } from 'react-hook-form';
import { InformOwnerForm } from 'ui/components/inputs/UserForms/UserForm';
import { useRouter } from 'next/router';
import Link from 'next/link';
import RoudedButton from 'ui/components/inputs/RoudedButton/RoudedButton';

export const InformOwnerPartial: React.FC = () => {
    const router = useRouter(),
        objectId = router.query.id,
        { formMethods, onSubmit, objectSelected, isFetching } = useInformOwner(
            objectId as string
        );
    if (objectId) {
        return (
            <Container sx={{ alignItems: 'center' }}>
                <Head>
                    <title>Informar entrega do objeto</title>
                </Head>
                {objectSelected ? (
                    <>
                        <PageTitle
                            title={`Informar entrega do objeto ${objectSelected?.nome.toUpperCase()}`}
                            subtitle="Entre com os dados da pessoa para o qual o objeto foi entregue"
                        />
                        <FormProvider {...formMethods}>
                            <form onSubmit={formMethods.handleSubmit(onSubmit)}>
                                <FormContainer>
                                    <FormDataBorder>
                                        <InformOwnerForm />
                                    </FormDataBorder>
                                    <ButtonSubmit
                                        type="submit"
                                        variant="contained"
                                        loading={isFetching}
                                        disabled={isFetching}
                                    >
                                        Confirmar entrega ao dono
                                    </ButtonSubmit>
                                </FormContainer>
                            </form>
                        </FormProvider>
                    </>
                ) : (
                    <>
                        <PageTitle
                            title={`Objeto não encontrado para entrega`}
                            subtitle="Retorne para a página de objetos disponíveis no local e tente novamente"
                        />
                        <FormContainer>
                            <Link href={'/object'}>
                                <RoudedButton
                                    sx={{ justifySelf: 'center' }}
                                    variant="contained"
                                >
                                    Ver objetos disponíveis
                                </RoudedButton>
                            </Link>
                        </FormContainer>
                    </>
                )}
            </Container>
        );
    } else {
        return (
            <Container sx={{ alignItems: 'center' }}>
                <Head>
                    <title>Informar entrega do objeto</title>
                </Head>
                <PageTitle
                    title={`Objeto não informado para entrega`}
                    subtitle="Retorne para a página de objetos disponíveis no local e selecione o objeto que deseja informar a entrega"
                />
                <FormContainer>
                    <Link href={'/object'}>
                        <RoudedButton
                            sx={{ justifySelf: 'center' }}
                            variant="contained"
                        >
                            Ver objetos disponíveis
                        </RoudedButton>
                    </Link>
                </FormContainer>
            </Container>
        );
    }
};
