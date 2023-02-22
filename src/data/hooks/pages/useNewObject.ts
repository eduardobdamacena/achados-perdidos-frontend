import { yupResolver } from '@hookform/resolvers/yup';
import { NewObjectFormInterface } from 'data/@types/FormInterface';
import { FormSchemaService } from 'data/services/FormSchemaService';
import { useForm } from 'react-hook-form';

export default function useNewObject() {
    const formMethods = useForm<NewObjectFormInterface>({
        resolver: yupResolver(FormSchemaService.newObject()),
    });

    function onNewObjectFormSubmit(data: NewObjectFormInterface) {
        console.log(data);
    }

    return { formMethods, onNewObjectFormSubmit };
}
