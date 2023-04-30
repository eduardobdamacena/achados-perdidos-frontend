import TextField from '../../TextField/TextField';
import { useFormContext } from 'react-hook-form';
import { UserPlaceInterface } from 'data/@types/UserPlaceInterface';
import { useContext, useEffect } from 'react';
import { UserPlaceContext } from 'data/context/UserPlaceContext';

const PlaceForm = () => {
    const {
            register,
            formState: { errors },
        } = useFormContext<UserPlaceInterface>(),
        { userPlaceState } = useContext(UserPlaceContext);

    return (
        <>
            <TextField
                label={'Nome do local'}
                placeholder={'Digite o nome do local'}
                {...register('nome')}
                error={errors?.nome !== undefined}
                helperText={errors?.nome?.message}
                defaultValue={userPlaceState.userPlace.nome}
            />

            <TextField
                label={'Endereço'}
                placeholder={'Digite o endereço'}
                {...register('endereco')}
                defaultValue={userPlaceState.userPlace.endereco}
                error={errors?.endereco !== undefined}
                helperText={errors?.endereco?.message}
            />
            <TextField
                label={'Modos de contato'}
                placeholder={
                    'Digite o modo que o usuário pode entrar em contato com você'
                }
                {...register('contato')}
                defaultValue={userPlaceState.userPlace.contato}
                error={errors?.contato !== undefined}
                helperText={errors?.contato?.message}
            />
            <TextField
                label={'Descrição'}
                placeholder={'Digite a descrição do local'}
                {...register('descricao')}
                defaultValue={userPlaceState.userPlace.descricao}
                error={errors?.descricao !== undefined}
                helperText={errors?.descricao?.message}
            />
        </>
    );
};

export default PlaceForm;
