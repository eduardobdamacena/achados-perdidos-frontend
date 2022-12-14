import { Controller, useFormContext } from 'react-hook-form';
import FileField from '../../FileField/FileField';
import { FormContainer } from '../UserForm.style';

export const PicturePlaceForm = () => {
    const {
        control,
        formState: { errors },
    } = useFormContext<{ imagem: string }>();
    return (
        <FormContainer>
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
        </FormContainer>
    );
};
