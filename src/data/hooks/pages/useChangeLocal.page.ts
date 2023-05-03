import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { RegisterPlaceUserFormDataInterface } from 'data/@types/FormInterface';
import { UserPlaceInterface } from 'data/@types/UserPlaceInterface';
import { UserPlaceContext } from 'data/context/UserPlaceContext';
import { ApiServiceHateoas } from 'data/services/ApiService';
import { FormSchemaService } from 'data/services/FormSchemaService';
import { ObjectService } from 'data/services/ObjectService';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';

export default function useChangeLocal() {
    const formMethods = useForm<RegisterPlaceUserFormDataInterface>({
            resolver: yupResolver(
                FormSchemaService.local().concat(FormSchemaService.editUser())
            ),
        }),
        [isWaitingResponse, setWaitingResponse] = useState(false),
        { userPlaceState, userPlaceDispatch } = useContext(UserPlaceContext),
        userPlace = userPlaceState.userPlace,
        [showImage, setShowImage] = useState(true),
        [picture, setPicture] = useState<File>(),
        [snackMessage, setSnackMessage] = useState('');

    function onPictureChange(files: FileList) {
        if (files !== null && files.length) {
            const file = files[0];
            setPicture(file);
        }
    }

    async function updatePicture() {
        setWaitingResponse(true);
        if (picture) {
            const imageFormData = ObjectService.jsonToFormData({
                imagem_local: picture,
            });
            ApiServiceHateoas(
                userPlace.links,
                'definir_imagem_local',
                async (request) => {
                    await request<{ message: string }>({
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                        data: imageFormData,
                    });
                }
            );
        }
    }

    async function updateLocalUser(data: RegisterPlaceUserFormDataInterface) {
        if (!data.usuario.password || !data.usuario.password_confirmation) {
            delete data.usuario.password;
            delete data.usuario.password_confirmation;
        }
        ApiServiceHateoas(
            userPlace.links,
            'atualizar_local',
            async (request) => {
                try {
                    const updatedUserLocal = (
                        await request<UserPlaceInterface>({
                            data: data,
                        })
                    ).data;
                    userPlaceDispatch({
                        type: 'SET_USER_PLACE',
                        payload: updatedUserLocal,
                    });
                    setSnackMessage('Dados atualizados com sucesso');
                } catch (error) {
                    if (axios.isAxiosError(error)) {
                        if (error.response?.data?.usuario?.email) {
                            formMethods.setError('usuario.email', {
                                type: 'invalido',
                                message: error.response?.data?.usuario?.email,
                            });
                        }
                    }
                }
                setWaitingResponse(false);
            }
        );
    }

    async function onSubmit(data: RegisterPlaceUserFormDataInterface) {
        await updatePicture();
        await updateLocalUser(data);
    }

    function removeImage() {
        setShowImage(false);
    }

    return {
        onSubmit,
        formMethods,
        isWaitingResponse,
        userPlace,
        showImage,
        removeImage,
        onPictureChange,
        snackMessage,
        setSnackMessage,
    };
}
