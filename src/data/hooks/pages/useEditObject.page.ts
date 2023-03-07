import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { ObjectFormInterface } from 'data/@types/FormInterface';
import { ObjectInterface } from 'data/@types/ObjectInterface';
import { ObjectContext } from 'data/context/ObjectContext';
import { ApiServiceHateoas } from 'data/services/ApiService';
import { FormSchemaService } from 'data/services/FormSchemaService';
import { ObjectService } from 'data/services/ObjectService';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export default function useEditObject(id: string | undefined) {
    const { objectState } = useContext(ObjectContext),
        router = useRouter(),
        formMethods = useForm<ObjectFormInterface>({
            resolver: yupResolver(FormSchemaService.object()),
        }),
        [isWaitingResponse, setWaitingResponse] = useState(false),
        [isUpdating, setUpdating] = useState(false),
        [object, setObject] = useState({} as ObjectInterface),
        [showImage, setShowImage] = useState(true),
        [error, setError] = useState('');

    useEffect(() => {
        getObject();
    }, [id, objectState]);

    useEffect(() => {
        formMethods.setValue('nome', object.nome);
        formMethods.setValue('descricao', object.descricao);
    }, [object]);

    function getObject() {
        setWaitingResponse(true);

        const objectSelected = objectState.objects.find(
            (item) => item.id == Number(id)
        );
        if (objectSelected) {
            ApiServiceHateoas(objectSelected.links, 'self', async (request) => {
                const response = await request<ObjectInterface>();
                if (response.data) {
                    setObject(response.data);
                }
            });
        }
        setWaitingResponse(false);
    }

    function onEditObjectFormSubmit(formData: ObjectFormInterface) {
        setError('');
        ApiServiceHateoas(object.links, 'atualizar_objeto', async (request) => {
            setUpdating(true);
            try {
                const response = await request<ObjectInterface>({
                    data: {
                        nome: formData.nome,
                        descricao: formData.descricao,
                    },
                });
                if (formData.imagem) {
                    ApiServiceHateoas(
                        response.data.links,
                        'definir_imagem_objeto',
                        async (request) => {
                            try {
                                const imageFormData =
                                    ObjectService.jsonToFormData({
                                        imagem_objeto: formData.imagem,
                                    });
                                const response = await request({
                                    data: imageFormData,
                                    headers: {
                                        'Content-type': 'multipart/form-data',
                                    },
                                });
                                router.push('object');
                            } catch (error) {
                                if (axios.isAxiosError(error)) {
                                    if (error?.response?.data.imagem_objeto) {
                                        formMethods.setError('imagem', {
                                            type: 'invalido',
                                            message:
                                                error.response.data
                                                    .imagem_objeto,
                                        });
                                    }
                                }
                            }
                        }
                    );
                } else {
                    router.push('object');
                }
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    if (error.response?.data.nome) {
                        formMethods.setError('nome', {
                            type: 'invalido',
                            message: error.response.data.nome,
                        });
                    }
                    if (error.response?.data.descricao) {
                        formMethods.setError('descricao', {
                            type: 'invalido',
                            message: error.response.data.descricao,
                        });
                    }
                } else {
                    setError(
                        'Falha ao atualizar o objeto. Tente novamente mais tarde.'
                    );
                }
            }
            setUpdating(false);
        });
    }

    function removeImage() {
        setShowImage(false);
    }

    return {
        object,
        isWaitingResponse,
        isUpdating,
        showImage,
        removeImage,
        formMethods,
        onEditObjectFormSubmit,
        error,
    };
}
