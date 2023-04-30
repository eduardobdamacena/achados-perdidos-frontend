import { RegisterPlaceUserFormDataInterface } from 'data/@types/FormInterface';
import { useFormContext } from 'react-hook-form';
import TextField from '../../TextField/TextField';
import { useContext } from 'react';
import { UserPlaceContext } from 'data/context/UserPlaceContext';

export const NewUserForm = () => {
    const {
            register,
            formState: { errors },
        } = useFormContext<RegisterPlaceUserFormDataInterface>(),
        { usuario } = useContext(UserPlaceContext).userPlaceState.userPlace;

    return (
        <>
            <TextField
                label={'Nome'}
                placeholder="Digite o nome completo"
                {...register('usuario.nome')}
                defaultValue={usuario.nome}
                error={errors?.usuario?.nome !== undefined}
                helperText={errors?.usuario?.nome?.message}
            />
            <TextField
                label={'E-mail'}
                placeholder="Digite o seu e-mail"
                type={'email'}
                {...register('usuario.email')}
                defaultValue={usuario.email}
                error={errors?.usuario?.email !== undefined}
                helperText={errors?.usuario?.email?.message}
            />
            <TextField
                label={'Senha'}
                placeholder="Digite a sua senha"
                type={'password'}
                {...register('usuario.password')}
                error={errors?.usuario?.password !== undefined}
                helperText={errors?.usuario?.password?.message}
            />
            <TextField
                label={'Confirme sua senha'}
                placeholder="Digite a senha novamente"
                type={'password'}
                {...register('usuario.password_confirmation')}
                error={errors?.usuario?.password_confirmation !== undefined}
                helperText={errors?.usuario?.password_confirmation?.message}
            />
        </>
    );
};
