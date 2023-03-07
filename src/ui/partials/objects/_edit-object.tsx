import Head from 'next/head';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import { Container, CircularProgress, Button, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import useEditObject from 'data/hooks/pages/useEditObject.page';
import { FormProvider } from 'react-hook-form';
import {
    ButtonSubmit,
    FormContainer,
    FormDataBorder,
} from 'ui/components/inputs/UserForms/UserForm.style';
import { NewObjectForm } from 'ui/components/inputs/UserForms/forms/NewObjectForm';
import { ObjectPicture } from './_edit-object.style';
import { PictureObjectForm } from 'ui/components/inputs/UserForms/forms/PictureObjectForm';

const EditObject: React.FC<{ id: string }> = ({ id }) => {
    const {
        object,
        isWaitingResponse,
        isUpdating,
        showImage,
        removeImage,
        formMethods,
        onEditObjectFormSubmit,
        error,
    } = useEditObject(id);
    if (isWaitingResponse) {
        return (
            <Container sx={{ textAlign: 'center', my: 10 }}>
                <CircularProgress />
            </Container>
        );
    }
    return (
        <Container sx={{ alignItems: 'center' }}>
            <Head>
                <title>Editar objeto</title>
            </Head>
            <PageTitle
                title="Editar objeto"
                subtitle="Preencha os dados do objeto que deseja editar"
            />
            <FormProvider {...formMethods}>
                <form
                    onSubmit={formMethods.handleSubmit(onEditObjectFormSubmit)}
                >
                    <FormContainer>
                        <FormDataBorder>
                            <NewObjectForm />
                            {object.imagem && showImage && (
                                <ObjectPicture>
                                    <img src={object.imagem} />
                                    <Button
                                        color="error"
                                        startIcon={<DeleteIcon />}
                                        variant="contained"
                                        onClick={removeImage}
                                    >
                                        Remover
                                    </Button>
                                </ObjectPicture>
                            )}
                            {(!object.imagem || !showImage) && (
                                <PictureObjectForm />
                            )}
                        </FormDataBorder>
                        {error && (
                            <Typography textAlign={'center'} color={'red'}>
                                {error}
                            </Typography>
                        )}
                        <ButtonSubmit
                            type="submit"
                            variant="contained"
                            loading={isUpdating}
                            disabled={isUpdating}
                        >
                            Atualizar
                        </ButtonSubmit>
                    </FormContainer>
                </form>
            </FormProvider>
        </Container>
    );
};

export default EditObject;
