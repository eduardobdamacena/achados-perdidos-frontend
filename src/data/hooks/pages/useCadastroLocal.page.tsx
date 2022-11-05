import { yupResolver } from '@hookform/resolvers/yup';
import { CadastroLocalFormDataInterface } from 'data/@types/FormInterface';
import { FormSchemaService } from 'data/services/FormSchemaService';
import { useForm } from 'react-hook-form';

export default function useCadastroLocal() {
    const formMethods = useForm<CadastroLocalFormDataInterface>({
        resolver: yupResolver(
            FormSchemaService.local().concat(FormSchemaService.newUser())
        ),
    });

    function onSubmit(data: CadastroLocalFormDataInterface) {
        const local = data.local;
        delete local.imagem;
        const request_data = { ...local, usuario: data.usuario };
        console.log(request_data);
    }
    return { formMethods, onSubmit };
}
