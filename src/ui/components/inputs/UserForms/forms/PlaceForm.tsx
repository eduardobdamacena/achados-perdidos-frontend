import TextField from '../../TextField/TextField';
import { FormContainer } from '../UserForm.style';
import { useFormContext } from 'react-hook-form';

const PlaceForm = () => {
    const {
        register,
        formState: { errors },
    } = useFormContext();
    return (
        <FormContainer>
            <TextField
                label={'Nome do local'}
                placeholder={'Digite o nome do local'}
                {...register('local.nome')}
                error={errors?.local?.nome !== undefined}
                helperText={errors?.local?.nome?.message}
            />
            <TextField
                label={'Endereço'}
                placeholder={'Digite o endereço'}
                {...register('local.endereco')}
                error={errors?.local?.endereco !== undefined}
                helperText={errors?.local?.endereco?.message}
            />
            <TextField
                label={'Modos de contato'}
                placeholder={
                    'Digite o modo que o usuário pode entrar em contato com você'
                }
                {...register('local.contato')}
                error={errors?.local?.contato !== undefined}
                helperText={errors?.local?.contato?.message}
            />
            <TextField
                label={'Descrição'}
                placeholder={'Digite a descrição do local'}
                {...register('local.descricao')}
                error={errors?.local?.descricao !== undefined}
                helperText={errors?.local?.descricao?.message}
            />
        </FormContainer>
    );
};

export default PlaceForm;
