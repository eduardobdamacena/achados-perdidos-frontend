import { InformOnwerFormInterface } from 'data/@types/FormInterface';
import { useFormContext, Controller } from 'react-hook-form';
import TextField from 'ui/components/inputs/TextField/TextField';
import TextFieldMask from '../../TextFieldMask/TextFieldMask';

export const InformOwnerForm = () => {
    const {
        control,
        formState: { errors },
    } = useFormContext<InformOnwerFormInterface>();
    return (
        <>
            <Controller
                name="dono_nome"
                control={control}
                render={({ field: { ref, ...inputProps } }) => (
                    <TextField
                        fullWidth
                        label="Nome"
                        placeholder="Digite o nome completo"
                        {...inputProps}
                        error={errors?.dono_nome !== undefined}
                        helperText={errors?.dono_nome?.message}
                    />
                )}
            />
            <Controller
                name="dono_cpf"
                control={control}
                render={({ field: { ref, ...inputProps } }) => (
                    <TextFieldMask
                        label="CPF"
                        placeholder="Digite o CPF"
                        mask="999.999.999-99"
                        {...inputProps}
                        error={errors?.dono_cpf !== undefined}
                        helperText={errors?.dono_cpf?.message}
                    />
                )}
            />
        </>
    );
};
