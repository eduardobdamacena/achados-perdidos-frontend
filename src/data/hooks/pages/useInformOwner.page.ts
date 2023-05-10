import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { InformOnwerFormInterface } from 'data/@types/FormInterface';
import { ObjectInterface } from 'data/@types/ObjectInterface';
import { ObjectContext } from 'data/context/ObjectContext';
import { ApiServiceHateoas } from 'data/services/ApiService';
import { FormSchemaService } from 'data/services/FormSchemaService';
import { TextService } from 'data/services/TextService';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export default function useInformOwner(objectId: string | undefined) {
    const formMethods = useForm<InformOnwerFormInterface>({
            resolver: yupResolver(FormSchemaService.objectOwner()),
        }),
        { objectState } = useContext(ObjectContext),
        [objectSelected, setObjectSelected] = useState<ObjectInterface>(),
        [isFetching, setFetching] = useState(false),
        router = useRouter();

    useEffect(() => {
        setObjectSelected(
            objectState.objects.find((item) => item.id == Number(objectId))
        );
    }, [objectState, objectId]);

    function onSubmit(data: InformOnwerFormInterface) {
        if (objectId && objectSelected) {
            ApiServiceHateoas(
                objectSelected.links,
                'definir_dono_objeto',
                async (request) => {
                    try {
                        const cpf = TextService.getNumbersFromText(
                            data.dono_cpf
                        );
                        setFetching(true);
                        await request({
                            data: {
                                dono_nome: data.dono_nome,
                                dono_cpf: cpf,
                            },
                        });
                        setFetching(false);
                        router.push('object');
                    } catch (error) {
                        setFetching(false);
                        if (axios.isAxiosError(error)) {
                            if (error.response?.data?.dono_nome) {
                                formMethods.setError('dono_nome', {
                                    type: 'invalido',
                                    message: error.response?.data?.dono_nome[0],
                                });
                            }
                            if (error.response?.data?.dono_cpf) {
                                formMethods.setError('dono_cpf', {
                                    type: 'invalido',
                                    message: error.response?.data?.dono_cpf[0],
                                });
                            }
                        }
                    }
                }
            );
        }
    }

    return { formMethods, onSubmit, objectSelected, isFetching };
}
