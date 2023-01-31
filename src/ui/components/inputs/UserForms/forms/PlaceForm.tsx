import TextField from '../../TextField/TextField';
import { useFormContext } from 'react-hook-form';
import { UserPlaceInterface } from 'data/@types/UserPlaceInterface';

const PlaceForm = () => {
    const {
        register,
        formState: { errors },
    } = useFormContext<UserPlaceInterface>();
    return (
        <>
            <TextField
                label={'Nome do local'}
                placeholder={'Digite o nome do local'}
                {...register('nome')}
                error={errors?.nome !== undefined}
                helperText={errors?.nome?.message}
            />
            <TextField
                label={'Endereço'}
                placeholder={'Digite o endereço'}
                {...register('endereco')}
                error={errors?.endereco !== undefined}
                helperText={errors?.endereco?.message}
            />
            <TextField
                label={'Modos de contato'}
                placeholder={
                    'Digite o modo que o usuário pode entrar em contato com você'
                }
                {...register('contato')}
                error={errors?.contato !== undefined}
                helperText={errors?.contato?.message}
            />
            <TextField
                label={'Descrição'}
                placeholder={'Digite a descrição do local'}
                {...register('descricao')}
                error={errors?.descricao !== undefined}
                helperText={errors?.descricao?.message}
            />
        </>
    );
};

export default PlaceForm;
