import { useFormContext } from 'react-hook-form';
import TextField from '../../TextField/TextField';
import { LoginData } from '../UserForm.style';

export const LoginForm = () => {
    const {
        register,
        formState: { errors },
    } = useFormContext();
    return (
        <LoginData>
            <TextField
                {...register('login.email')}
                label={'E-mail'}
                placeholder={'Digite o seu e-mail'}
                error={errors?.login?.email !== undefined}
                helperText={errors?.login?.email?.message}
            />
            <TextField
                {...register('login.password')}
                label={'Senha'}
                type={'password'}
                placeholder={'Digite a sua senha'}
                error={errors?.login?.password !== undefined}
                helperText={errors?.login?.password?.message}
            />
        </LoginData>
    );
};