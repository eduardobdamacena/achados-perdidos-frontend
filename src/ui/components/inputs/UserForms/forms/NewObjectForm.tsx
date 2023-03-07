import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import TextField from '../../TextField/TextField';
import { ObjectFormInterface } from 'data/@types/FormInterface';

export const NewObjectForm: React.FC = () => {
    const {
        control,
        formState: { errors },
    } = useFormContext<ObjectFormInterface>();
    return (
        <>
            <Controller
                name={'nome'}
                defaultValue={''}
                control={control}
                render={({ field: { ref, ...inputProps } }) => (
                    <TextField
                        label={'Nome'}
                        {...inputProps}
                        error={errors?.nome !== undefined}
                        helperText={errors?.nome?.message}
                    />
                )}
            />
            <Controller
                name={'descricao'}
                defaultValue={''}
                control={control}
                render={({ field: { ref, ...inputProps } }) => (
                    <TextField
                        label={'Descrição'}
                        {...inputProps}
                        error={errors?.descricao !== undefined}
                        helperText={errors?.descricao?.message}
                    />
                )}
            />
        </>
    );
};
