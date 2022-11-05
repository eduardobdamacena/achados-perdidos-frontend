import { CadastroLocalFormDataInterface } from 'data/@types/FormInterface';
import { useFormContext } from 'react-hook-form';
import TextField from '../../TextField/TextField';
import { FormContainer } from '../UserForm.style';

export const NewUserForm = () => {
    const {
        register,
        formState: { errors },
    } = useFormContext<CadastroLocalFormDataInterface>();
    return (
        <FormContainer>
            <TextField
                label={'Nome'}
                {...register('usuario.nome')}
                error={errors?.usuario?.nome !== undefined}
                helperText={errors?.usuario?.nome?.message}
            />
            <TextField
                label={'E-mail'}
                type={'email'}
                {...register('usuario.email')}
                error={errors?.usuario?.email !== undefined}
                helperText={errors?.usuario?.email?.message}
            />
            <TextField
                label={'Senha'}
                type={'password'}
                {...register('usuario.password')}
                error={errors?.usuario?.password !== undefined}
                helperText={errors?.usuario?.password?.message}
            />
            <TextField
                label={'Confirme sua senha'}
                type={'password'}
                {...register('usuario.password_confirmation')}
                error={errors?.usuario?.password_confirmation !== undefined}
                helperText={errors?.usuario?.password_confirmation?.message}
            />
        </FormContainer>
    );
};
