import { yupResolver } from '@hookform/resolvers/yup';
import { NewObjectFormInterface } from 'data/@types/FormInterface';
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
        formMethods = useForm<NewObjectFormInterface>({
            resolver: yupResolver(FormSchemaService.newObject()),
        });

    function onNewObjectFormSubmit(formData: NewObjectFormInterface) {
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
                                    const imageData =
                                        ObjectService.jsonToFormData({
                                            imagem_objeto: formData.imagem,
                                        });
                                    await request({
                                        data: imageData,
                                        headers: {
                                            'Content-Type':
                                                'multipart/form-data',
                                        },
                                    });
                                } catch (error) {
                                    console.log('Erro ao definir imagem: ');
                                    console.log(error);
                                }
                            }
                        );
                    }
                    router.push('object');
                } catch (error) {
                    setWaitingResponse(false);
                    console.log('Erro ao cadastrar: ' + error);
                }
            }
        );
    }

    return { formMethods, isWaitingResponse, onNewObjectFormSubmit };
}
