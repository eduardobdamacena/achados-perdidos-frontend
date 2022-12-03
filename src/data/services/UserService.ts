import { ApiLinksInterface } from 'data/@types/ApiLinksInterface';
import { RegisterPlaceUserFormDataInterface } from 'data/@types/FormInterface';
import { UseFormReturn } from 'react-hook-form/dist/types';
import { ApiService } from './ApiService';

export const UserService = {
    async register(
        local_data: RegisterPlaceUserFormDataInterface,
        link: ApiLinksInterface
    ): Promise<RegisterPlaceUserFormDataInterface> {
        ApiService.defaults.headers.Authorization = null;
        const reponse =
            await ApiService.request<RegisterPlaceUserFormDataInterface>({
                url: link.uri,
                method: link.type,
                data: local_data,
            });

        return reponse.data;
    },
    handleNewUserErrors(error: any, form: UseFormReturn<T>): void {
        const errorList = error?.response?.data;
        if (errorList) {
            if (errorList.usuario.email) {
                form.setError('usuario.email', {
                    type: 'cadastrado',
                    message: 'Email já cadastrado',
                });
            }
        }
    },
};
