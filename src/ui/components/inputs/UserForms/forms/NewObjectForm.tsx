import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import TextField from '../../TextField/TextField';
import FileField from '../../FileField/FileField';
import { NewObjectFormInterface } from 'data/@types/FormInterface';

export const NewObjectForm: React.FC = () => {
    const {
        control,
        formState: { errors },
    } = useFormContext<NewObjectFormInterface>();
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
            <Controller
                name={'imagem'}
                defaultValue={''}
                control={control}
                render={({ field }) => (
                    <FileField
                        label={'Imagem do local'}
                        onChange={(files) => field.onChange(files[0])}
                        inputProps={{
                            accept: '.jpeg, .jpg, .png',
                        }}
                    />
                )}
            />
        </>
    );
};
