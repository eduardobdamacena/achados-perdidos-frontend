import { yupResolver } from '@hookform/resolvers/yup';
import { LoginFormDataInterface } from 'data/@types/FormInterface';
import { FormSchemaService } from 'data/services/FormSchemaService';
import { useForm } from 'react-hook-form';

export default function useLogin() {
    const formMethods = useForm<{ login: LoginFormDataInterface }>({
        resolver: yupResolver(FormSchemaService.login()),
    });

    function onSubmit(data: { login: LoginFormDataInterface }) {
        console.log(data.login);
    }
    return {
        formMethods,
        onSubmit,
    };
}
