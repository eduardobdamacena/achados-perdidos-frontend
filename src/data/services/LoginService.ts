import { LoginFormDataInterface } from 'data/@types/FormInterface';
import { UserPlaceInterface } from 'data/@types/UserPlaceInterface';
import { ApiService } from './ApiService';
import { LocalStorage } from './StorageService';

export const LoginService = {
    async login(credentials: LoginFormDataInterface): Promise<boolean> {
        try {
            const { data } = await ApiService.post<{
                access: string;
                refresh: string;
            }>('api/auth/login', credentials);

            LocalStorage.set('token', data.access);
            LocalStorage.set('token_refresh', data.refresh);

            ApiService.defaults.headers['Authorization'] =
                'Bearer ' + data.access;

            return true;
        } catch (error) {
            return false;
        }
    },
    async getUserPlace() {
        const token = LocalStorage.get('token', '');
        if (token) {
            ApiService.defaults.headers['Authorization'] = 'Bearer ' + token;
            const userPlace = (
                await ApiService.get<UserPlaceInterface>('/api/locais')
            ).data;
            return userPlace;
        }
        return undefined;
    },
    logout() {
        ApiService.post('api/auth/logout/', {
            refresh: LocalStorage.get('token_refresh', ''),
        });
        LocalStorage.clear('token');
        LocalStorage.clear('token_refresh');
    },
};
