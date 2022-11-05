import { LocalInterface } from './LocalInterface';
import { UserInterface } from './UserInterface';

export interface LoginFormDataInterface {
    email: string;
    password: string;
}

export interface CadastroLocalFormDataInterface {
    local: LocalInterface;
    usuario: UserInterface;
}
