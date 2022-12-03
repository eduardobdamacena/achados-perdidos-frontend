import { UserPlaceInterface } from './UserPlaceInterface';

export interface LoginFormDataInterface {
    email: string;
    password: string;
}

export interface RegisterPlaceUserFormDataInterface
    extends UserPlaceInterface {}
