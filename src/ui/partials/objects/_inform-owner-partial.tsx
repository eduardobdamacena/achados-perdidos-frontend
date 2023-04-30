import React from 'react';
import { Container, Typography } from '@mui/material';
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

export const InformOwnerPartial: React.FC = () => {
    const router = useRouter(),
        object_id = router.query.id,
        { formMethods, onSubmit, objectSelected, isFetching } = useInformOwner(
            object_id as string
        );
    return (
        <Container sx={{ alignItems: 'center' }}>
            <Head>
                <title>Informar entrega do objeto</title>
            </Head>
            {object_id ? (
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
                    <Typography align="center" style={{ alignItems: 'center' }}>
                        ID do objeto não informado.
                    </Typography>
                </>
            )}
        </Container>
    );
};
