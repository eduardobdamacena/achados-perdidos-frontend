import { yupResolver } from '@hookform/resolvers/yup';
import { LoginFormDataInterface } from 'data/@types/FormInterface';
import { ExternalServicesContext } from 'data/context/ExternalServicesContext';
import { UserPlaceContext } from 'data/context/UserPlaceContext';
import { FormSchemaService } from 'data/services/FormSchemaService';
import { LoginService } from 'data/services/LoginService';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';

export default function useLogin() {
    const { externalServicesState } = useContext(ExternalServicesContext),
        formMethods = useForm<{
            login: LoginFormDataInterface;
        }>({
            resolver: yupResolver(FormSchemaService.login()),
        }),
        [errorLogin, setErrorLogin] = useState(''),
        [isWaitingReponse, setWaitingReponse] = useState(false),
        { userPlaceDispatch } = useContext(UserPlaceContext);

    async function onSubmit(data: { login: LoginFormDataInterface }) {
        setErrorLogin('');
        setWaitingReponse(true);
        const loginSuccess = await LoginService.login(data.login);
        if (loginSuccess) {
            const userPlace = await LoginService.getUserPlace();
            userPlaceDispatch({ type: 'SET_USER_PLACE', payload: userPlace });
        } else {
            setErrorLogin('E-mail ou senha incorretos');
        }
        setWaitingReponse(false);
    }
    return {
        externalServicesState,
        isWaitingReponse,
        errorLogin,
        formMethods,
        onSubmit,
    };
}
