import { NextPage } from 'next';
import Head from 'next/head';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import { Button, Container, Snackbar, Typography } from '@mui/material';
import useChangeLocal from 'data/hooks/pages/useChangeLocal.page';
import { FormProvider } from 'react-hook-form';
import {
    ButtonSubmit,
    FormContainer,
    FormDataBorder,
} from 'ui/components/inputs/UserForms/UserForm.style';
import PlaceForm from 'ui/components/inputs/UserForms/forms/PlaceForm';
import { NewUserForm } from 'ui/components/inputs/UserForms/forms/NewUserForm';
import { PictureViewer } from '@partials/objects/_edit-object.style';
import DeleteIcon from '@mui/icons-material/Delete';
import FileField from 'ui/components/inputs/FileField/FileField';

const ChangeLocalPage: NextPage = () => {
    const {
        onSubmit,
        formMethods,
        isWaitingResponse,
        userPlace,
        showImage,
        removeImage,
        onPictureChange,
        snackMessage,
        setSnackMessage,
    } = useChangeLocal();
    return (
        <Container>
            <Head>
                <title>Alterar local</title>
            </Head>
            <PageTitle
                title="Alterar os dados do local"
                subtitle={
                    'Alteração dos dados cadastrais, troca de senha ou exclusão do local'
                }
            />
            <FormProvider {...formMethods}>
                <form onSubmit={formMethods.handleSubmit(onSubmit)}>
                    <FormContainer>
                        <FormDataBorder>
                            <Typography color={'GrayText'}>
                                Dados do local
                            </Typography>
                            <PlaceForm />
                            {userPlace.imagem && showImage && (
                                <PictureViewer>
                                    <img src={userPlace.imagem} />
                                    <Button
                                        color="error"
                                        startIcon={<DeleteIcon />}
                                        variant="contained"
                                        onClick={removeImage}
                                    >
                                        Remover
                                    </Button>
                                </PictureViewer>
                            )}
                            {(!userPlace.imagem || !showImage) && (
                                <FileField
                                    label={'Imagem do local'}
                                    onChange={onPictureChange}
                                    inputProps={{
                                        accept: '.jpeg, .jpg, .png',
                                    }}
                                />
                            )}
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
                            disabled={isWaitingResponse}
                            loading={isWaitingResponse}
                        >
                            Salvar
                        </ButtonSubmit>
                    </FormContainer>
                </form>
            </FormProvider>
            <Snackbar
                open={snackMessage.length > 0}
                message={snackMessage}
                autoHideDuration={4000}
                onClose={() => setSnackMessage('')}
            />
        </Container>
    );
};

export default ChangeLocalPage;
