import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterPlaceUserFormDataInterface } from 'data/@types/FormInterface';
import { UserPlaceInterface } from 'data/@types/UserPlaceInterface';
import { ExternalServicesContext } from 'data/context/ExternalServicesContext';
import { UserPlaceContext } from 'data/context/UserPlaceContext';
import { ApiServiceHateoas, linksResolver } from 'data/services/ApiService';
import { FormSchemaService } from 'data/services/FormSchemaService';
import { LoginService } from 'data/services/LoginService';
import { ObjectService } from 'data/services/ObjectService';
import { UserService } from 'data/services/UserService';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';

export default function useRegisterUserPlace() {
    const { externalServicesState } = useContext(ExternalServicesContext),
        [isWaitingReponse, setWaitingReponse] = useState(false),
        { userPlaceDispatch } = useContext(UserPlaceContext),
        formMethods = useForm<RegisterPlaceUserFormDataInterface>({
            resolver: yupResolver(
                FormSchemaService.local().concat(FormSchemaService.newUser())
            ),
        });

    async function onSubmit(data: RegisterPlaceUserFormDataInterface) {
        setWaitingReponse(true);
        const register_link = linksResolver(
            externalServicesState.externalServices,
            'register'
        );
        if (register_link) {
            // Register
            try {
                const new_place = await UserService.register(
                    data,
                    register_link
                );
                if (new_place) {
                    // Login
                    const login_success = await LoginService.login({
                        email: data.usuario.email,
                        password: data.usuario.password as string,
                    });
                    if (login_success) {
                        // Upload image
                        const imageFormData = ObjectService.jsonToFormData({
                            imagem_local: data.imagem,
                        });
                        ApiServiceHateoas(
                            new_place.links,
                            'definir_imagem_local',
                            (request) => {
                                try {
                                    request<{
                                        message: string;
                                    }>({
                                        data: imageFormData,
                                        headers: {
                                            'Content-Type':
                                                'multipart/form-data',
                                        },
                                    }).then((reponse) => {
                                        // Get user place and dispatch
                                        ApiServiceHateoas(
                                            new_place.links,
                                            'self',
                                            (request) => {
                                                try {
                                                    request<UserPlaceInterface>().then(
                                                        (reponse) => {
                                                            const userPlace =
                                                                reponse.data;
                                                            userPlaceDispatch({
                                                                type: 'SET_USER_PLACE',
                                                                payload:
                                                                    userPlace,
                                                            });
                                                        }
                                                    );
                                                } catch (error: any) {}
                                            }
                                        );
                                    });
                                } catch (error: any) {}
                            }
                        );
                    }
                }
            } catch (error) {
                UserService.handleNewUserErrors(error, formMethods);
                setWaitingReponse(true);
            }
        }
        setWaitingReponse(false);
    }

    return { formMethods, onSubmit, isWaitingReponse };
}
