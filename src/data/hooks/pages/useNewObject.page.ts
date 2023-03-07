import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { ObjectFormInterface } from 'data/@types/FormInterface';
import { ObjectInterface } from 'data/@types/ObjectInterface';
import { UserPlaceContext } from 'data/context/UserPlaceContext';
import { ApiServiceHateoas } from 'data/services/ApiService';
import { FormSchemaService } from 'data/services/FormSchemaService';
import { ObjectService } from 'data/services/ObjectService';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';

export default function useNewObject() {
    const { userPlaceState } = useContext(UserPlaceContext),
        [isWaitingResponse, setWaitingResponse] = useState(false),
        router = useRouter(),
        formMethods = useForm<ObjectFormInterface>({
            resolver: yupResolver(FormSchemaService.object()),
        }),
        [error, setError] = useState('');

    function onNewObjectFormSubmit(formData: ObjectFormInterface) {
        setWaitingResponse(true);
        ApiServiceHateoas(
            userPlaceState.userPlace.links,
            'adicionar_objeto_local',
            async (request) => {
                try {
                    const response = await request<ObjectInterface>({
                        data: {
                            nome: formData.nome,
                            descricao: formData.descricao,
                        },
                    });
                    if (formData.imagem && response.data.id) {
                        ApiServiceHateoas(
                            response.data.links,
                            'definir_imagem_objeto',
                            async (request) => {
                                try {
                                    const imageFormData =
                                        ObjectService.jsonToFormData({
                                            imagem_objeto: formData.imagem,
                                        });
                                    await request({
                                        data: imageFormData,
                                        headers: {
                                            'Content-Type':
                                                'multipart/form-data',
                                        },
                                    });
                                    router.push('object');
                                } catch (error) {}
                            }
                        );
                    }
                    router.push('object');
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
            }
        );
    }

    return { formMethods, isWaitingResponse, onNewObjectFormSubmit, error };
}
